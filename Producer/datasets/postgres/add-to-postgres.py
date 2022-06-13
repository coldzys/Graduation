from pyspark.sql import SparkSession

spark = SparkSession.builder.config("spark.sql.debug.maxToStringFields", 100000).config("spark.jars", "postgresql-42.4.0.jar").getOrCreate()
df = spark.read.json("datasets/careerbuilder.json")
df = df.select([
    df["Tên công ty"].alias("company_name"),
    df["Địa điểm"].alias("location"),
    df["Tên công việc"].alias("job_name"),
    df["Ngày cập nhật"].alias("update_time"),
    df["Ngành nghề"].alias("job_field"),
    df["Hình thức"].alias("working_form"),
    df["Lương"].alias("salary"),
    df["Kinh nghiệm"].alias("experience"),
    df["Cấp bậc"].alias("level"),
    df["Thông tin khác"]["Bằng cấp"].alias("degree"),
    df["Thông tin khác"]["Độ tuổi"].alias("age"),
    df["Thông tin khác"]["Giới tính"].alias("sex")
])
df.write.format("jdbc")\
    .option("url", "jdbc:postgresql://172.18.0.13:5432/postgres") \
    .option("driver", "org.postgresql.Driver").option("dbtable", "careerbuilder") \
    .option("user", "postgres").option("password", "postgres").save()
