from pyspark.sql import SparkSession
from pyspark.sql.functions import monotonically_increasing_id

spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).config("spark.jars", "postgresql-42.4.0.jar").getOrCreate()
df = spark.read.json("careerbuilder-raw.json")
df = df.withColumn("id", monotonically_increasing_id())
df.write.format("jdbc")\
    .option("url", "jdbc:postgresql://172.18.0.15:5432/postgres") \
    .option("driver", "org.postgresql.Driver").option("dbtable", "careerbuilder") \
    .option("user", "postgres").option("password", "postgres").save()
