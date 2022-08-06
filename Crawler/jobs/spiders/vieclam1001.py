import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class Vieclam1001Spider(CrawlSpider):
    name = 'vieclam1001'
    allowed_domains = ['1001vieclam.com']
    user_agent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"

    def start_requests(self):
        yield scrapy.Request(
            url='https://1001vieclam.com/search-results-jobs',
            headers={
                "User-Agent": self.user_agent
            }
        )

    rules = (
        Rule(LinkExtractor(
            restrict_xpaths="//h3/a"), callback='parse_item', follow=True, process_request="set_user_agent"),
        Rule(LinkExtractor(restrict_xpaths="//span[@class='nextBtn']/a"), process_request="set_user_agent")
    )

    def set_user_agent(self, request, spider):
        request.headers["User-Agent"] = self.user_agent
        return request

    def parse_item(self, response):
        job = {
            "Tên công việc": response.xpath("//div[@class='listingInfo']/h1/text()").get().strip(),
            "Tên công ty": response.xpath("//span[@class='company-name']/text()").get().strip()
        }
        for detail in response.xpath("//div[@class='listingInfo']/div/div/fieldset/div"):
            key = detail.xpath(".//h3/text()").get().replace(':', '').strip()
            value = detail.xpath(".//div/text()").get().strip()
            if key == 'Ngành':
                value = value.split(',')
                value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
            if key is not None and value is not None:
                job.update({key: value})
        for detail in response.xpath("//div[@class='listingInfo']/fieldset/div"):
            key = detail.xpath(".//h3/text()").get().replace(':', '').strip()
            value = detail.xpath(".//div/descendant::text()").getall()
            value = list(map(lambda u: ' '.join(u.split()), filter(lambda v: len(v.strip()) > 1, value)))
            if key is not None and value is not None:
                job.update({key: value})
        yield job
