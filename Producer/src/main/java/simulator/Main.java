package simulator;

import java.io.File;
import java.util.Arrays;
import java.util.Comparator;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        File folder = new File("datasets/localfile");
        File[] listOfFiles = folder.listFiles();
        assert listOfFiles != null;
        Arrays.sort(listOfFiles, Comparator.comparing(File::getName));
        String latestName = "";
        for (File file : listOfFiles) {
            if (file.isFile() && file.getName().compareTo(latestName) > 0) {
                System.out.println(file.getName());
                latestName = file.getName();
            }
        }
    }
}
