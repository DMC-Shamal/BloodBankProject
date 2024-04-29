
create database bloodapp;
use bloodapp;


CREATE TABLE User (
         U_Id INT AUTO_INCREMENT PRIMARY KEY,
         firstname VARCHAR(50) NOT NULL,
         lastname VARCHAR(50) NOT NULL,
         mobile VARCHAR(15),
         address VARCHAR(150),
         email VARCHAR(100) NOT NULL UNIQUE,
         password VARCHAR(100) NOT NULL,
         role ENUM('USER', 'ADMIN') DEFAULT 'USER',
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );


INSERT INTO User (firstname, lastname, mobile, address, email, password, role)
     VALUES
         ('Shamal', 'Patel', '9876543210', '123 Main St', 'shamal@example.com', 'shamal123', 'USER'),
         ('Sejal', 'Shah', '9871234560', '456 Elm St', 'sejal@example.com', 'sejal456', 'USER'),
         ('Bharti', 'Mehta', '5551237890', '789 Oak St', 'bharti@example.com', 'bharti789', 'USER'),
         ('Pooja', 'Desai', '1234567890', '321 Pine St', 'pooja@example.com', 'pooja123', 'USER');
    


CREATE TABLE Hospital (
         H_Id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         location VARCHAR(255) NOT NULL,
         contact_number VARCHAR(20) NOT NULL,
         is_donor BOOLEAN NOT NULL DEFAULT FALSE,
         is_blood_bank BOOLEAN NOT NULL DEFAULT FALSE
     );


INSERT INTO Hospital (name, location, contact_number, is_donor, is_blood_bank) 
VALUES
     
       ('Ruby Hall Clinic', 'Sasoon Road, Pune', '+91 20 2616 3391', TRUE, FALSE),
         ('Deenanath Mangeshkar Hospital', 'Erandwane, Pune', '+91 20 4015 1000', TRUE, FALSE),
        ('Sahyadri Hospital', 'Kothrud, Pune', '+91 20 6721 5000', TRUE, TRUE),
         ('Jehangir Hospital', 'Sassoon Road, Pune', '+91 20 6681 1111', FALSE, TRUE);
         





CREATE TABLE donors (
         D_Id INT AUTO_INCREMENT PRIMARY KEY,
         Blood_Type VARCHAR(10),
         Age INT,
         Gender VARCHAR(10),
         U_Id INT,
         H_Id INT,
         FOREIGN KEY (U_Id) REFERENCES User (U_Id),
         FOREIGN KEY (H_Id) REFERENCES Hospital (H_Id)
     );


INSERT INTO donors (Blood_Type, Age, Gender, U_Id, H_Id)
     VALUES
         ('O+', 30, 'Male', 1, 1),
         ('AB-', 25, 'Female', 2, 2),
         ('A+', 35, 'Male', 3, 3), 
         ('B-', 28, 'Female', 4, 4); 



CREATE TABLE needblood (
         NB_Id INT AUTO_INCREMENT PRIMARY KEY,
         D_Id INT,
         U_Id INT,
         H_Id INT,
         FOREIGN KEY (D_Id) REFERENCES donors (D_Id),
         FOREIGN KEY (U_Id) REFERENCES User (U_Id),
         FOREIGN KEY (H_Id) REFERENCES Hospital (H_Id)
     );



