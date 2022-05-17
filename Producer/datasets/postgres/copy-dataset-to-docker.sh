docker exec -it postgres mkdir -p /datasets/postgres
docker cp postgres-data.csv postgres:/datasets/postgres/
