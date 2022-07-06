from pyspark.sql import SparkSession
from datetime import datetime

spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).config("spark.jars", "postgresql-42.4.0.jar").getOrCreate()
today = datetime.today().strftime('%Y-%m-%d')
df = spark.read.json(f"{today}/careerbuilder-raw.json")
df.write.format("jdbc")\
    .option("url", "jdbc:postgresql://127.0.01:5432/postgres") \
    .option("driver", "org.postgresql.Driver").option("dbtable", "careerbuilder") \
    .option("user", "postgres").option("password", "postgres").save()
