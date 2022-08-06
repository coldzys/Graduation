from pyspark.sql import SparkSession
from pyspark import pandas as pd
from datetime import datetime


def salary_check(salary: str):
    if salary.strip() == "Cạnh tranh" or salary.strip() == "":
        return ""
    salary = salary.replace("Trên", "").replace(
        "Dưới", "").replace("Tr", "").strip()
    values = salary.split()
    if len(values) == 2:
        if values[1] == "VND":
            return values[0].replace(',', '.')
        if values[1] == "USD":
            return float(values[0].replace(",", "")) * 23182 // 1000000
    if len(values) == 4:
        if values[3] == "VND":
            return f"{values[0].replace(',', '.')} - {values[2].replace(',', '.')}"
        if values[3] == "USD":
            return f"{float(values[0].replace(',', '')) * 23182 // 1000000} - {float(values[2].replace(',', '')) * 23182 // 1000000}"


def degree_check(bc):
    if bc == "" or bc.strip() == "Khác":
        return "Không yêu cầu"
    return bc.strip()


def experience_check(kn: str):
    if kn == "" or kn.strip() == "Chưa có kinh nghiệm" or kn.strip() == "0 - 0 Năm":
        return "Không yêu cầu"
    kns = kn.replace("Năm", "").strip().split()
    if len(kns) == 2:
        return kns[0]
    if kns[0] >= kns[2]:
        return kns[0]
    else:
        return f"{kns[0]} - {kns[2]}"


def sex_check(sex: str):
    if sex == "":
        return "Không yêu cầu"
    return sex.strip()


spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).getOrCreate()
hdfs_address = "172.18.0.16:9000"
today = datetime.today().strftime('%Y-%m-%d')
df = spark.read.parquet(f"hdfs://{hdfs_address}/usr/student/warehouse/careerbuilder/{today}/*.parquet").toPandas()
df["update_time"] = pd.to_datetime(df["update_time"], format="%d/%m/%Y").dt.strftime("%Y-%m-%d")
df["sex"] = df["sex"].apply(sex_check)
df = df[df["company_name"].str.strip() != ""]
df["salary"] = df["salary"].apply(salary_check)
df["degree"] = df["degree"].apply(degree_check)
df["experience"] = df["experience"].apply(experience_check)
df = spark.createDataFrame(df.astype(str))
# Elasticsearch configs
conf = {
    "index": "job-careerbuilder",
    "host": "172.18.0.25",
    "port": "9200"
}

df.write.format("es") \
    .option("es.resource", '%s' % conf['index']) \
    .option("es.nodes", conf['host']) \
    .option("es.port", conf['port']) \
    .save()
