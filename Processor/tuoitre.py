from pyspark.sql import SparkSession
from pyspark import pandas as pd
from datetime import datetime


def age_check(age):
    if age.strip() == "" or age.strip() == "Không giới hạn tuổi":
        return "Không yêu cầu"
    return age.strip()


def sex_check(sex):
    if sex.strip() == "":
        return "Không yêu cầu"
    return sex.strip()


def degree_check(degree):
    if degree.strip() == "" or degree.strip() == "Khác":
        return "Không yêu cầu"
    return degree.strip()


def experience_check(kn: str):
    if kn.strip() == "" or kn.strip() == "Chưa có kinh nghiệm" or kn.strip() == "0 - 0 Năm":
        return "Không yêu cầu"
    kns = kn.replace("Năm", "").strip().split()
    if len(kns) == 2:
        return kns[0]
    if kns[0] >= kns[2]:
        return kns[0]
    else:
        return f"{kns[0]} - {kns[2]}"


spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).getOrCreate()
hdfs_address = "172.18.0.16:9000"
today = datetime.today().strftime('%Y-%m-%d')
df = spark.read.parquet(f"hdfs://{hdfs_address}/usr/student/warehouse/tuoitre/{today}/*.parquet").toPandas()
df = df[df["company_name"].str.strip() != ""]
df["sex"] = df["sex"].apply(sex_check)
df["degree"] = df["degree"].apply(degree_check)
df["update_time"] = pd.to_datetime(df["update_time"], format="%d/%m/%Y").dt.strftime("%Y-%m-%d")
df["experience"] = df["experience"].apply(experience_check)
df["age"] = df["age"].apply(age_check)
df = spark.createDataFrame(df.astype(str))
# Elasticsearch configs
conf = {
    "index": "job-tuoitre",
    "host": "172.18.0.25",
    "port": "9200"
}

df.write.format("es") \
    .option("es.resource", '%s' % conf['index']) \
    .option("es.nodes", conf['host']) \
    .option("es.port", conf['port']) \
    .save()
