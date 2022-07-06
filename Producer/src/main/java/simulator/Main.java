package simulator;

public class Main {
    public static void main(String[] args) {
        long start = System.currentTimeMillis();
        while (true) {
            if (System.currentTimeMillis() - start > 8000) System.exit(0);
        }
    }
}
