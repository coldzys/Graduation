package simulator;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;
import java.util.concurrent.BlockingQueue;

public class KProducer {
    private static final Logger logger = LoggerFactory.getLogger(KProducer.class);
    private final KafkaProducer<String, String> producer;

    public KProducer() {
        producer = create();
    }

    public void run(String topic, BlockingQueue<String> messages, long throughput) {
        logger.info("Retrieved {} records", messages.size());
        if (messages.size() == 0) return;
        try {
            long wait = 1000 * 60 / throughput;
            long cnt = 0;
            while (messages.size() > 0) {
                String message = messages.poll();
                producer.send(new ProducerRecord<>(topic, message));
                ++cnt;
                Thread.sleep(wait);
            }
            logger.info("Sent {} messages", cnt);
        } catch (InterruptedException ie) {
            throw new RuntimeException(ie);
        }
    }

    private KafkaProducer<String, String> create() {
        Properties properties = new Properties();
        String bootstrapServers = "172.18.0.11:29092";
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, "true");
        properties.setProperty(ProducerConfig.ACKS_CONFIG, "all");
        properties.setProperty(ProducerConfig.RETRIES_CONFIG, Integer.toString(Integer.MAX_VALUE));
        properties.setProperty(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, "5");
        properties.setProperty(ProducerConfig.COMPRESSION_TYPE_CONFIG, "zstd");
        properties.setProperty(ProducerConfig.LINGER_MS_CONFIG, "25");
        properties.setProperty(ProducerConfig.BATCH_SIZE_CONFIG, Integer.toString(32 * 1024));
        return new KafkaProducer<>(properties);
    }
}
