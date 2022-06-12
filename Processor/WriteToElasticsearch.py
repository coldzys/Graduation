from pyspark.sql import SparkSession

spark = SparkSession.builder \
    .master("spark://spark-master:7077") \
    .appName("Write to Elasticsearch") \
    .getOrCreate()

df = spark.read.parquet("hdfs://172.18.0.14:9000/usr/graduation/warehouse/stream/*.parquet")

conf = {
    "index": "spark",
    "host": "172.18.0.19",
    "port": "9200"
}

df.write.format("es") \
    .option("es.resource", '%s' % conf['index']) \
    .option("es.nodes", conf['host']) \
    .option("es.port", conf['port']) \
    .save()
