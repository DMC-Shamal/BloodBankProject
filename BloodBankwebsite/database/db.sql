
  

create database bloodbank;
use bloodbank;


--------------------------------------------------------Users--------------------------------------------------------------

CREATE TABLE users
(
U_Id INT PRIMARY KEY AUTO_INCREMENT,
First_Name VARCHAR(25),
Last_Name VARCHAR(25),
Email VARCHAR(40) UNIQUE,
Mobile CHAR(10),
Password VARCHAR(50),
Address VARCHAR(50),
Role VARCHAR(10) DEFAULT 'user'
);
  
INSERT INTO users VALUES(default,'John', 'Elliot','John@gmail.com','9634234165','John@123','Pune','admin');    
INSERT INTO users VALUES(default, 'Sakshi', 'Jadhav','Sakshi@gmail.com','9421376453','Sakshi@123','Pune',default);   //2   

INSERT INTO users VALUES(default, 'Shamal', 'Ramavat','Shamal@gmail.com','8342236487','Shamal@123','Pune',default);     

INSERT INTO users VALUES(default, 'Mansi', 'Kotgire','Mansi@gmail.com','9532996725','Mansi@123','Hinjewadi',default);  

INSERT INTO users VALUES(default, 'Pooja', 'Kote','Pooja@gmail.com','7645342675','Pooja@123','Hinjewadi',default);     

INSERT INTO users VALUES(default, 'Shubham', 'Yadav','Shubham@gmail.com','9634231698','Shubham@123','Wakad',default);       



-------------------------------------------------------Hospital-------------------------------------------------------

CREATE TABLE hospitals
(
H_Id INT PRIMARY KEY AUTO_INCREMENT,
Hospital_Name VARCHAR(50),
Hospital_Number CHAR(15),
Hospital_Email VARCHAR(100),
Hospital_Address VARCHAR(150)
);


INSERT INTO hospitals VALUES(default, 'Ruby Hall Clinic','020 6645 5100','hinjawadi@rubyhall.com','Rajeev Gandhi Infotech Park, MIDC. Phase No 1, Plot No P-33, Hinjawadi, Pune – 411057. Maharashtra'); 

INSERT INTO hospitals VALUES(default, 'MJM HOSPITAL','91 8530310999','info@mjmhospital.com','MJM HOSPITAL 1194/23 Janardan Sadan,Ghole Road, Pune - 411005.');  

INSERT INTO hospitals VALUES(default, 'Jehangir Hospital','020 6681 9999','info@jehangirhospital.com','32, Sasoon Rd, opposite Railway Station, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001');  

INSERT INTO hospitals VALUES(default, ' DPU Hospital','912027805100','info@dpuhospital.com',' Sant Tukaram Nagar,Pimpri,Pune-411018,Maharashtra,Pune');  



------------------------------------------------------Doners------------------------------------------------------------

CREATE TABLE doners
(
D_Id INT PRIMARY KEY AUTO_INCREMENT,
Blood_Type VARCHAR(10),
Hospital_Reciept VARCHAR(250) DEFAULT 'Null',
Age INT ,
Gender VARCHAR(15),
H_Id INT,
U_Id INT,
Action VARCHAR(100) DEFAULT 'Thank You for Your Request We will Late You Know If You Are Able For Donate Blood or Not',
Role VARCHAR(20) DEFAULT 'doner',
FOREIGN KEY(H_Id) REFERENCES hospitals(H_Id),
FOREIGN KEY(U_Id) REFERENCES users(U_Id)
);

INSERT INTO doners VALUES(default, 'O+',default,26,'Male',2,6,default,default);       
INSERT INTO doners VALUES(default, 'A-',default,26,'Female,2,4,defult,default);     
INSERT INTO doners VALUES(default, 'AB+',default,23,'Female',1,4,default,default);  
INSERT INTO doners VALUES(default, 'A+',default,32,'Female',4,4,default,default);
INSERT INTO doners VALUES(default, 'A-',default,23,'male',1,2,default,default,Sysdate());




-----------------------------------------------------Bloodbank-------------------------------------------------------------

CREATE TABLE bloodbank
(
B_Id INT PRIMARY KEY AUTO_INCREMENT,
D_Id INT,
H_Id INT,
U_Id INT,
FOREIGN KEY(H_Id) REFERENCES hospitals(H_Id),
FOREIGN KEY(D_Id) REFERENCES doners(D_Id),
FOREIGN KEY(U_Id) REFERENCES users(U_Id)
);

