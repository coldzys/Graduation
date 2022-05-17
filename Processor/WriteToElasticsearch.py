from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .master("spark://spark-master:7077") \
    .appName("Write to Elasticsearch") \
    .getOrCreate()

columns = ["language", "users_count"]
data = [("Java", "20000"), ("Python", "100000"), ("Scala", "3000")]

df = spark.createDataFrame(data).toDF(*columns)

conf = {
    "index": "spark",
    "doc_type": "docs",
    "host": "172.18.0.21",
    "port": "9200"
}

df.write.format(
    "es"
).option(
    "es.resource", '%s/%s' % (conf['index'], conf['doc_type'])
).option(
    "es.nodes", conf['host']
).option(
    "es.port", conf['port']
).save()
