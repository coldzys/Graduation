package simulator.localfile;

import simulator.KProducer;

import java.util.concurrent.BlockingQueue;

public class LocalfileMain {
    public static void main(String[] args) throws InterruptedException {
        KProducer producer = new KProducer();
        LocalfileMiner localfileMiner = new LocalfileMiner();
        String path = args[0];
        String topic = args[1];
        long throughput = Long.parseLong(args[2]);
        while (true) {
            BlockingQueue<String> messages = localfileMiner.get(path);
            producer.run(topic, messages, throughput);
            localfileMiner.waiting(10000L);
        }
    }
}
