import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class CareerbuilderSpider(CrawlSpider):
    name = 'careerbuilder'
    allowed_domains = ['careerbuilder.vn']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-sortdv-vi.html',
            headers={
                "User-Agent": self.user_agent
            }
        )
        
    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//div[@class='job-item  ']/div/div[@class='figcaption']/div[starts-with(@class,'title')]/a"),
            callback='parse_item', follow=True,
            process_request="set_user_agent"),
        Rule(LinkExtractor(restrict_xpaths="//div[@class='pagination']/ul/li[@class='next-page']/a"),
             process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        job = {
            "Tên công ty": response.xpath(
                "(//div[@class='apply-now-content']/div[@class='job-desc']/a)[1]/text()").get().strip(),
            "Địa điểm": response.xpath("//div[@class='map']/p/a/text()").get().strip(),
            "Tên công việc": response.xpath(
                "//div[@class='apply-now-content']/div[@class='job-desc']/h1/text()").get().strip()
        }
        for detail in response.xpath("//div[@class='detail-box has-background']/ul/li"):
            key = detail.xpath(".//strong/text()[last()]").get()
            if key == 'Ngành nghề':
                value = detail.xpath(".//p/descendant::text()").getall()
                value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
            else:
                value = detail.xpath("normalize-space(string(.//p))").get()
            if key is not None and value is not None:
                job.update({key: value})
        for detail in response.xpath("//div[contains(@class, 'detail-row')]"):
            key = detail.xpath(".//h3/text()").get()
            value = detail.xpath("(.//*)[position() > 1]/text()").getall()
            value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: v.strip() != '', value)))
            if key == 'Thông tin khác':
                value = (lambda ls: dict((u.split(':')[0], u.split(':')[1]) for u in ls))(value)
            if key is not None and value is not None:
                job.update({key: value})
        yield job
