# Use the official Maven image as a parent image
FROM maven:3.8.4-jdk-11 AS spring-build

# Set the working directory in the container
WORKDIR /app

# Copy the Maven configuration file
COPY backend/pom.xml .

# Copy the project source code
COPY backend/src ./src

# Build the project
RUN mvn clean package -DskipTests

# Use the official OpenJDK image as a base image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the Maven image
COPY --from=spring-build /app/target/*.jar app.jar

# Expose the port the application runs on
EXPOSE 8036

# Run the JAR file
CMD ["java", "-jar", "app.jar"]
