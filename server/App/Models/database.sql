DROP TABLE IF EXISTS Administrator CASCADE;
CREATE TABLE Administrator (
    id SERIAL PRiMARY KEY NOT NULL,
    fname VARCHAR(50) NOT NULL,
    lname VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(255) NOT NULL 
);
DROP TABLE IF EXISTS Location CASCADE;
CREATE TABLE Location (
    location_id SERIAL PRiMARY KEY NOT NULL,
    address varchar(100),
    city varchar(100),
    town varchar(100),
    zip varchar(10),
    state varchar(100)
);
postgres://ejuhkgfxdbccqd:902664f1c7e6c2254766da1e8193f892889dfed4d8033197613f7f36a76a4e2a@ec2-44-206-197-71.compute-1.amazonaws.com:5432/d7au8bhh8ggg5o

DROP TABLE IF EXISTS Department CASCADE;
CREATE TABLE Department (
    dept_id SERIAL PRiMARY KEY NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    location_id int,
    FOREIGN KEY(location_id) REFERENCES Location(location_id)
);

DROP TABLE IF EXISTS Employees CASCADE;
CREATE TABLE Employees (
    emp_id SERIAL PRiMARY KEY NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone_number VARCHAR(150),
    hiredate TIMESTAMP NOT NULL DEFAULT NOW(),
    salary decimal(8,2),
    dept_id int,
    FOREIGN KEY(dept_id) REFERENCES Department(dept_id)
);

DROP TABLE IF EXISTS Job_History CASCADE;
CREATE TABLE Job_History (
    emp_id SERIAL PRiMARY KEY NOT NULL,
    company_name VARCHAR(50) NOT NULL,
    start_date Date NOT NULL,
    end_date Date NOT NULL,
    FOREIGN KEY(emp_id) REFERENCES Employees(emp_id)
);