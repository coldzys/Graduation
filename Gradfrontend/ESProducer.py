from elasticsearch import Elasticsearch, helpers
import csv

es = Elasticsearch()


def generator():
    with open("datasets/true_car_listings.csv") as f:
        reader = list(csv.reader(f))
        columns = reader[0]
        documents = []
        cnt = 0
        for row in reader[1:]:
            document = {
                "_id": cnt,
                columns[0]: int(row[0]),
                columns[1]: int(row[1]),
                columns[2]: int(row[2]),
                columns[3]: row[3],
                columns[4]: row[4],
                columns[5]: row[5],
                columns[6]: row[6]
            }
            documents.append(document)
            cnt += 1
        helpers.bulk(es, documents, index="cars")


generator()
