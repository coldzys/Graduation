import scrapy
from scrapy.exceptions import CloseSpider
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule
from confluent_kafka import Producer
import socket
import json
import hashlib

conf = {
    'bootstrap.servers': "172.18.0.11:29092",
    'client.id': socket.gethostname()
}

producer = Producer(conf)

previous = {}
flag = False


class Timviec365Spider(CrawlSpider):
    name = 'timviec365'
    allowed_domains = ['timviec365.vn']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://timviec365.vn/tin-tuyen-dung-viec-lam.html',
            headers={
                "User-Agent": self.user_agent
            }
        )

    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//h3/a"), callback='parse_item', follow=True,
            process_request="set_user_agent"),
        Rule(LinkExtractor(restrict_xpaths="//a[@title='Next page']"),
             process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        global flag
        if flag:
            raise CloseSpider('No duplicate')
        global previous
        if previous == {}:
            with open("timviec365-last.json") as f:
                previous = json.load(f)
        job = {
            "Tên công ty": response.xpath("//div[@class='right_tit']/a/text()").get().strip(),
            "Tên công việc": response.xpath("//div[@class='right_tit']/h1/text()").get().strip(),
            "Lương": response.xpath("//div[@class='right_tit_2']/p[@class='lv_luong']/span/text()").get().strip()
        }
        for detail in response.xpath("//div[@class='right_tit']/p"):
            key = detail.xpath(".//text()").get().strip()
            if 'Lượt xem' in key:
                st = detail.xpath(".//span[@class='date_update']/text()").get().split(':')
                key = st[0].strip()
                value = st[1].strip()
                if key is not None and value is not None:
                    job.update({key: value})
            else:
                key = key.replace(':', '').strip()
                value = detail.xpath(".//*/descendant::text()").get().strip()
                if key is not None and value is not None:
                    job.update({key: value})
        for detail in response.xpath("//div[@class='tt_td']/div"):
            if detail.xpath(".//@class").get() == 'box_tomtat_2':
                for infor in detail.xpath(".//p"):
                    key = infor.xpath(".//text()[position() = 1]").get().replace(':', '').replace('-', '').strip()
                    value = infor.xpath(".//*/descendant::text()").getall()
                    value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
                    value = value if len(value) > 1 else value[0]
                    if key is not None and value is not None:
                        job.update({key: value})
            else:
                st = detail.xpath(".//text()").getall()
                st = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, st)))
                key = st[0]
                value = st[1:]
                if key is not None and value is not None:
                    job.update({key: value})
        value = json.dumps(job)
        key = hashlib.md5(value.encode("utf-8")).hexdigest()
        producer.produce("timviec365", key=key, value=value)
        producer.flush()
        if previous["Tên công ty"] == job["Tên công ty"] and previous["Tên công việc"] == job["Tên công việc"] and \
                previous["Ngày cập nhật"] == job["Ngày cập nhật"]:
            flag = True
            raise CloseSpider('No duplicate')
        yield job
