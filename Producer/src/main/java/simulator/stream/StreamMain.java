package simulator.stream;

import simulator.KProducer;

import java.util.concurrent.BlockingQueue;

public class StreamMain {
    public static void main(String[] args) {
        KProducer producer = new KProducer();
        StreamMiner streamMiner = new StreamMiner();
        String path = args[0];
        String topic = args[1];
        long throughput = Long.parseLong(args[2]);
        while (true) {
            BlockingQueue<String> messages = streamMiner.get(path);
            producer.run(topic, messages, throughput);
        }
    }
}
