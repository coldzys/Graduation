import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class MyworkSpider(CrawlSpider):
    name = 'mywork'
    allowed_domains = ['mywork.com.vn']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://mywork.com.vn/tuyen-dung?',
            headers={
                "User-Agent": self.user_agent
            }
        )

    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//div[@class='jobslist-01-row-ttl']/a"), callback='parse_item', follow=True,
            process_request="set_user_agent"),
        Rule(LinkExtractor(restrict_xpaths="(//a[@class='page-link d-none d-md-block'])[last()]"),
             process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        pass
