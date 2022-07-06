package simulator.stream;

import org.json.JSONObject;

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
        String[] columnNames = {
                "level",
                "experience",
                "job_field",
                "update_time",
                "location",
                "degree",
                "sex",
                "age",
                "working_form",
                "company_name",
                "job_name"
        };
        try (Stream<String> stream = Files.lines(Paths.get(path))) {
            int limit = rd.nextInt(250);
            stream.skip(cnt).limit(limit).forEach(message -> {
                String[] values = message.split("@");
                if (values.length == columnNames.length) {
                    JSONObject json = new JSONObject();
                    for (int i = 0; i < values.length; ++i) {
                        json.put(
                                columnNames[i],
                                values[i] == null ? "" : values[i].trim()
                        );
                    }
                    messages.add(json.toString());
                }
            });
            cnt += limit;
            if (messages.size() == 0) cnt = 0;
            return messages;
        } catch (IOException ioe) {
            throw new RuntimeException(ioe);
        }
    }
}
