docker exec -it spark-master bash /opt/bitnami/spark/bin/spark-submit \
  --master spark://spark-master:7077 \
  --packages org.elasticsearch:elasticsearch-hadoop:7.17.3 \
  --packages org.elasticsearch:elasticsearch-spark-30_2.12:7.17.3 \
  --conf spark.eventLog.enabled=true \
  /spark-jobs/WriteToElasticsearch.py
