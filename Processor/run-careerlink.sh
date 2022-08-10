docker exec -it spark-master mkdir -p /tmp/spark-events
docker exec -it spark-master mkdir -p /spark-jobs/preprocessing/

docker exec -it -u root spark-master pip install pandas pyarrow
docker exec -it -u root spark-worker-01 pip install pandas pyarrow
docker exec -it -u root spark-worker-02 pip install pandas pyarrow
docker exec -it -u root spark-worker-03 pip install pandas pyarrow

docker cp careerlink.py spark-master:/spark-jobs/preprocessing/

docker exec -it spark-master bash /opt/bitnami/spark/bin/spark-submit \
  --master spark://spark-master:7077 \
  --packages org.elasticsearch:elasticsearch-hadoop:8.3.3 \
  --packages org.elasticsearch:elasticsearch-spark-30_2.12:8.3.3 \
  --conf spark.eventLog.enabled=true \
  /spark-jobs/preprocessing/careerlink.py
