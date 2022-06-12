package simulator.localfile;

import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Random;
import java.util.Scanner;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class LocalfileMiner {
    private static final Random rd = new Random();
    private String latestName = "";

    public void waiting(long time) throws InterruptedException {
        Thread.sleep(time);
    }

    public BlockingQueue<String> get(String path) {
        File folder = new File(path);
        File[] listOfFiles = folder.listFiles();
        assert listOfFiles != null;
        BlockingQueue<String> messages = new LinkedBlockingQueue<>();
        String[] columnNames = {"price", "year", "mileage", "city", "state", "vin", "make", "model"};
        for (File file : listOfFiles) {
            if (file.isFile() && file.getName().compareTo(latestName) > 0) {
                latestName = file.getName();
                try {
                    Scanner sc = new Scanner(file);
                    while (sc.hasNextLine()) {
                        String line = sc.nextLine();
                        String[] values = line.split(",");
                        if (values.length == columnNames.length) {
                            JSONObject json = new JSONObject();
                            for (int i = 0; i < values.length; ++i) {
                                json.put(columnNames[i], values[i].trim());
                            }
                            messages.add(json.toString());
                        }
                    }
                } catch (FileNotFoundException fnne) {
                    throw new RuntimeException(fnne);
                }
                if (rd.nextBoolean()) break;
            }
        }
        return messages;
    }
}
