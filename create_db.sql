-- Create database script for Vocabulary app

# Create the database
CREATE DATABASE IF NOT EXISTS vocabulary_app;
USE vocabulary_app;

# Create the tables
CREATE TABLE IF NOT EXISTS words (id INT AUTO_INCREMENT NOT NULL ,word VARCHAR(50),meaning VARCHAR(255),example_sentence VARCHAR(255),difficulty_level VARCHAR(255),category VARCHAR(100), PRIMARY KEY(id));

# Create the user
CREATE USER IF NOT EXISTS 'vocabulary_app_user'@'localhost' IDENTIFIED BY 'qwertyuiop';
GRANT ALL PRIVILEGES ON vocabulary_app.* TO 'vocabulary_app_user'@'localhost';

