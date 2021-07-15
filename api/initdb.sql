CREATE DATABASE rysolart_pvmessdaten;
USE rysolart_pvmessdaten;

-- initialize tables

CREATE TABLE GesamtMessungKRW ( -- 10.41.100.121
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungKRW_Mensa ( -- 10.41.100.122
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungKRW_Aula ( -- 10.41.100.123
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungKRW_Sudtrakt ( -- 10.41.100.124
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungKRW_Hauptgebaude ( -- 10.41.100.125
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE GesamtMessungPV_Rysolar ( -- 10.41.100.126
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungRysolarHauptgebaude ( -- 10.41.100.127
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungRysolarMensa ( -- 10.41.100.128
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE MessungRysolarSudtrakt ( -- 10.41.100.129
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    _3P FLOAT(23), -- IEEE 754 standard Float
    _3EP FLOAT(53), -- IEEE 754 standard double 
    tstamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
