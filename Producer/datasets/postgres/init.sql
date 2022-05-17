DROP TABLE IF EXISTS cars;

CREATE TABLE IF NOT EXISTS cars
(
    id      serial primary key,
    price   int,
    year    int,
    mileage int,
    city    varchar(64),
    state   varchar(64),
    vin     varchar(64),
    make    varchar(64),
    model   varchar(64)
);

COPY cars (price, year, mileage, city, state, vin, make, model) FROM '/datasets/postgres/postgres-data.csv' WITH (FORMAT CSV);
