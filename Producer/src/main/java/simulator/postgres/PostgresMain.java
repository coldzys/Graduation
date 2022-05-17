package simulator.postgres;

import simulator.KProducer;

import java.util.concurrent.BlockingQueue;

public class PostgresMain {
    public static void main(String[] args) throws InterruptedException {
        KProducer producer = new KProducer();
        PostgresMiner postgresMiner = new PostgresMiner();
        String tableName = args[0];
        String topic = args[1];
        long throughput = Long.parseLong(args[2]);
        while (true) {
            BlockingQueue<String> messages = postgresMiner.get(tableName);
            producer.run(topic, messages, throughput);
            postgresMiner.waiting(10000L);
        }
    }
}
