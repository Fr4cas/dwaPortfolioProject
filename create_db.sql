# Create the user
CREATE USER IF NOT EXISTS 'vocabulary_app_user'@'locahost' IDENTIFIED BY 'qwertyuiop';
GRANT ALL PRIVILEGES ON vocabulary_app.* TO 'vocabulary_app_user'@'localhost';

