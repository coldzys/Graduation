import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class CareerlinkSpider(CrawlSpider):
    name = 'careerlink'
    allowed_domains = ['www.careerlink.vn']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://www.careerlink.vn/vieclam/list?order=date&sort=desc',
            headers={
                "User-Agent": self.user_agent
            }
        )

    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//a[@class='job-link clickable-outside']"),
            callback='parse_item', follow=True,
            process_request="set_user_agent"),
#        Rule(LinkExtractor(restrict_xpaths="(//a[@class='page-link d-none d-md-block'])[last()]"),
#             process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        org = response.xpath(
            "//div[contains(@class, 'card-header')]/div/div[@class='media-body job-title-and-org-name']")
        job = {
            "Tên công ty": org.xpath(".//p/a/@title").get().strip(),
            "Địa điểm": org.xpath(".//div[@class='job-overview']/ul/li/a/span/text()").get().strip(),
            "Tên công việc": org.xpath(".//h1/text()").get().strip(),
            "Lương": org.xpath(".//div[@class='job-overview']/p/span[1]/text()").get().strip()
        }
        for detail in response.xpath("//div[contains(@class, 'card-body')]/div[@class='py-4 border-bottom-mb']"):
            key = detail.xpath(".//h5/text()").get().strip()
            if key == 'Mô tả':
                for infor in detail.xpath("(.//div[@class='row job-summary']/div/div/div/div/div)[position()<last()]"):
                    key = infor.xpath(".//div[1]/text()").get().strip()
                    value = infor.xpath(".//div[2]/text()").get().strip()
                    if key is not None and value is not None:
                        job.update({key: value})
                infor = detail.xpath("(.//div[@class='row job-summary']/div/div/div/div/div)[last()]/div")
                key = infor.xpath(".//div[1]/text()").get().strip()
                value = infor.xpath(".//div[2]/descendant::text()").getall()
                value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
                if key is not None and value is not None:
                    job.update({key: value})
            else:
                value = detail.xpath(".//div[@class='raw-content']/descendant::text()").getall()
                value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: v.strip() != '', value)))
                if key is not None and value is not None:
                    job.update({key: value})
        yield job
