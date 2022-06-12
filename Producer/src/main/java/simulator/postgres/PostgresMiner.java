package simulator.postgres;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.*;
import java.util.Random;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;

public class PostgresMiner {
    private static final Random rd = new Random();
    private static final String className = "org.postgresql.Driver";
    private static final String url = "jdbc:postgresql://172.18.0.19:5432/postgres";
    private static final String username = "postgres";
    private static final String password = "postgres";
    private int cnt = 0;

    public void waiting(long time) throws InterruptedException {
        Thread.sleep(time);
    }

    public BlockingQueue<String> get(String tableName) {
        try (Connection connection = create()) {
            Statement stmt = connection.createStatement();
            BlockingQueue<String> messages = new LinkedBlockingQueue<>();
            String query = String.format(" SELECT * FROM %s WHERE id > %d LIMIT %d ", tableName, cnt, rd.nextInt(10000));
            ResultSet rs = stmt.executeQuery(query);
            int numberOfColumns = rs.getMetaData().getColumnCount();
            while (!rs.isClosed() && rs.next()) {
                JSONObject json = new JSONObject();
                for (int i = 0; i < numberOfColumns; ++i) {
                    if (rs.getMetaData().getColumnLabel(i + 1).equals("id")) continue;
                    json.put(
                            rs.getMetaData().getColumnLabel(i + 1),
                            rs.getObject(i + 1)
                    );
                }
                messages.add(json.toString());
                ++cnt;
            }
            return messages;
        } catch (SQLException se) {
            throw new RuntimeException(se);
        }
    }

    private Connection create() {
        try {
            Class.forName(className);
            return DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException | SQLException exception) {
            throw new RuntimeException(exception);
        }
    }
}
