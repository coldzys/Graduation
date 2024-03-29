from pyspark.sql import SparkSession
from pyspark import pandas as pd
from datetime import datetime


def salary_check(salary):
    if salary.strip() == "" or salary.strip() == "Thỏa thuận":
        return ""
    salary = salary.replace("Trên", "").replace(
        "Dưới", "").replace("triệu", "").strip()
    return salary


def degree_check(degree):
    if degree.strip() == "Khác" or degree.strip() == "Không yêu cầu":
        return "Không yêu cầu"
    return degree.replace("trở lên", "").strip()

def experience_check(kn: str):
    return kn.replace("năm kinh nghiệm", "").replace("Hơn", "").strip()


spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).getOrCreate()
hdfs_address = "172.18.0.16:9000"
today = datetime.today().strftime('%Y-%m-%d')
df = spark.read.parquet(f"hdfs://{hdfs_address}/usr/student/warehouse/careerlink/{today}/*.parquet").toPandas()
df["update_time"] = pd.to_datetime(df["update_time"], format="%d/%m/%Y").dt.strftime("%Y-%m-%d")
df = df[df["company_name"].str.strip() != ""]
df["salary"] = df["salary"].apply(salary_check)
df["degree"] = df["degree"].apply(degree_check)
df["experience"] = df["experience"].apply(experience_check)
df = spark.createDataFrame(df.astype(str))
# Elasticsearch configs
conf = {
    "index": "job-careerlink",
    "host": "172.18.0.25",
    "port": "9200"
}

df.write.format("es") \
    .option("es.resource", '%s' % conf['index']) \
    .option("es.nodes", conf['host']) \
    .option("es.port", conf['port']) \
    .save()
