today=$(date +'%Y-%m-%d')

java -jar stream-producer.jar stream/$today/tuoitre-raw.csv stream 5000
