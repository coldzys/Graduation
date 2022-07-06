package simulator.postgres;

import simulator.KProducer;

import java.util.concurrent.BlockingQueue;

public class PostgresMain {
    public static void main(String[] args) {
        KProducer producer = new KProducer();
        PostgresMiner postgresMiner = new PostgresMiner();
        String tableName = args[0];
        String topic = args[1];
        long throughput = Long.parseLong(args[2]);
        long start = System.currentTimeMillis();
        while (true) {
            BlockingQueue<String> messages = postgresMiner.get(tableName);
            producer.run(topic, messages, throughput);
            if (System.currentTimeMillis() - start >= 600000) System.exit(0);
        }
    }
}
