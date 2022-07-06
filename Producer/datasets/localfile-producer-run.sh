today=$(date +'%Y-%m-%d')

java -jar localfile-producer.jar localfile/$today localfile 5000
