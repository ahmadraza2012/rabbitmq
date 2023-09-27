const express = require("express");
const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());

const amqp = require("amqplib");
var channel, connection;

connectQueue()  // call the connect function
async function connectQueue() {
    try {
        connection = await amqp.connect("amqp://localhost:5672");
        channel    = await connection.createChannel()
        
        // Create Queue if not exist
        await channel.assertQueue("test-queue")
        
        channel.consume("test-queue", data => {
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);      // Acknowledge data is received, it will remove it from queue once we acknowledge
        })
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, () => console.log("Server running at port " + PORT));