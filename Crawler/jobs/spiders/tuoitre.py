import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class TuoitreSpider(CrawlSpider):
    name = 'tuoitre'
    allowed_domains = ['vieclam.tuoitre.vn']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://vieclam.tuoitre.vn/viec-lam/tat-ca-viec-lam-vi.html',
            headers={
                "User-Agent": self.user_agent
            }
        )

    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//span[@class='jobtitle']/h3/a"), callback='parse_item', follow=True,
            process_request="set_user_agent"),
        Rule(LinkExtractor(restrict_xpaths="//div[@class='paginationTwoStatus']/a"),
             process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        job = {
            "Tên công việc": response.xpath(
                "//div[@class='top-job']/div[@class='top-job-info']/h1/text()").get().strip(),
            "Tên công ty": response.xpath(
                "//div[@class='top-job']/div[@class='top-job-info']/div/text()").get().strip(),
            "Ngày cập nhật": response.xpath("//div[@class='datepost']/span/text()").get().strip()
        }
        for detail in response.xpath("//ul[@class='DetailJobNew']/li"):
            st = detail.xpath("normalize-space(string(.//p))").get().split(':')
            key = st[0].strip()
            if key == 'Ngành nghề':
                value = st[1].split(',')
                value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
            else:
                value = st[1].strip()
            if key is not None and value is not None:
                job.update({key: value})
        for detail in response.xpath("//div[contains(@class, 'MarBot20')]"):
            st = detail.xpath(".//descendant::text()").getall()
            st = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, st)))
            key = st[0]
            value = st[1:]
            if key == 'Thông tin khác':
                value = {}
                for infor in detail.xpath(".//div/ul/li"):
                    if infor.xpath(".//p/text()").get() is not None:
                        subkey = infor.xpath(".//text()").get().replace(':', '').strip()
                        subvalue = infor.xpath(".//p/text()").getall()
                        subvalue = list(
                            map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, subvalue)))
                        if subkey is not None and subvalue is not None:
                            value.update({subkey: subvalue})
                    else:
                        st = infor.xpath(".//text()").get().split(':')
                        subkey = st[0].strip()
                        subvalue = st[1].strip()
                        if subkey is not None and subvalue is not None:
                            value.update({subkey: subvalue})
            if key is not None and value is not None:
                job.update({key: value})
        yield job
