package simulator.stream;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Random;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.stream.Stream;

public class StreamMiner {
    private static final Random rd = new Random();
    private int cnt = 0;

    public void waiting(long time) throws InterruptedException {
        Thread.sleep(time);
    }

    public BlockingQueue<String> get(String path) {
        BlockingQueue<String> messages = new LinkedBlockingQueue<>();
        String[] columnNames = {"price", "year", "mileage", "city", "state", "vin", "make", "model"};
        try (Stream<String> stream = Files.lines(Paths.get(path))) {
            int limit = rd.nextInt(10000);
            stream.skip(cnt).limit(limit).forEach(message -> {
                String[] values = message.split(",");
                if (values.length == columnNames.length) {
                    JSONObject json = new JSONObject();
                    for (int i = 0; i < values.length; ++i) {
                        json.put(columnNames[i], values[i].trim());
                    }
                    messages.add(json.toString());
                }
            });
            cnt += limit;
            return messages;
        } catch (IOException ioe) {
            throw new RuntimeException(ioe);
        }
    }
}
