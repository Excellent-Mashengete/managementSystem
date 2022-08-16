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
    hiredate TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    salary decimal(8,2),
    dept_id int,
    status VARCHAR(20);
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

DROP TABLE IF EXISTS oldemployees CASCADE;
CREATE TABLE oldemployees (
    emp_id SERIAL PRiMARY KEY NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    phone_number VARCHAR(150),
    hiredate TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    enddate TIMESTAMPTZ NOT NULL DEFAULT now(),
    salary decimal(8,2),
    dept_id int,
    status VARCHAR(20);
    FOREIGN KEY(dept_id) REFERENCES Department(dept_id)

);