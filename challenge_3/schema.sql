DROP DATABASE IF EXISTS customerinformation;
CREATE DATABASE customerinformation;

USE customerinformation;

CREATE TABLE customerinformation (
  id int PRIMARY KEY auto_increment,
  customername varchar(140) NOT NULL,
  email varchar(140) NOT NULL,
  customerpassword varchar(140) NOT NULL,
  lineone varchar(140) NOT NULL,
  linetwo varchar(140) NOT NULL,
  city varchar(140) NOT NULL,
  customerstate varchar(140) NOT NULL,
  zipcode varchar(140) NOT NULL,
  phonenumber varchar(140) NOT NULL,
  creditcardnumber varchar(140) NOT NULL,
  expirydate varchar(140) NOT NULL,
  cvv varchar(140) NOT NULL,
  billingzip varchar(140) NOT NULL,
);