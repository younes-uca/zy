# Use the official MySQL image as a parent image
FROM mysql:latest AS mysql-db

# Set the environment variables for MySQL database
ENV MYSQL_DATABASE=koscy
ENV MYSQL_ROOT_PASSWORD=root

# Create additional user 'ana' with password 'ana'
ENV MYSQL_USER=ana
ENV MYSQL_PASSWORD=ana

# Expose the default MySQL port
EXPOSE 3306
