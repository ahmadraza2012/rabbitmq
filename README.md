# Rabbit MQ

RabbitMQ is an open-source message broker software. Message Broker is the intermediary agent between provider and client(s) that makes sure the message is not lost.
Some alternatives: Apache Kafka, Amazon Kinesis etc

RabbitMQ implements AMQP (Advanced Message Queuing Protocol). AMQP is a protocol that helps in communication between services using messages.

## 1- Installation using Docker
Pull latest docker container for rabbitmq from dockerhub.
```
docker pull rabbitmq
```
Run rabbitmq container using following command

```
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:latest
```

## 2- Download Project and install dependencies

```
cd provider-app
npm i
```

```
cd client-app
npm i
```

## 3- Run both projects
```
cd provider-app
npm run start
```
Provider App is running on port `4001`

```
cd client-app
npm run start
```
Client App is running on port `4002`

## Test Message from Provider to Client

Please open any browser and type this url `http://localhost:4001/send-msg` and hit `Enter`.
Please refer to the client app running on `4002` and see you must be receiving message there.

## Note
To understart concept, please give a read to index.js file in each `provider`/`client projects`.






