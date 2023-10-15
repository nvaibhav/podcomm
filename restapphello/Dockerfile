FROM openjdk:8-jdk-alpine

WORKDIR /usr/src/app

COPY target/restapphello-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java","-jar","app.jar"]