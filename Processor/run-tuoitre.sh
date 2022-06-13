docker cp tuoitre.py spark-master:/spark-jobs/preprocessing/

docker exec -it spark-master bash /opt/bitnami/spark/bin/spark-submit \
  --master spark://spark-master:7077 \
  --packages org.elasticsearch:elasticsearch-hadoop:8.2.2 \
  --packages org.elasticsearch:elasticsearch-spark-30_2.12:8.2.2 \
  --conf spark.eventLog.enabled=true \
  /spark-jobs/preprocessing/tuoitre.py
