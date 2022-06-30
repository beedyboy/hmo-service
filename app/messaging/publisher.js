import amqp from "amqplib/callback_api";
var { RABBIT_URI } = process.env;
var rabbitConn = null;
var publisherChannel = null;
export const publisher = () => {
  amqp.connect(RABBIT_URI, (err, connection) => {
    if (err) {
      return setTimeout(publisher(), 3000);
    }
    connection.on("error", (err) => {
      if (err.message !== "Connection closing") {
        console.error("[conn] error", err.message);
      }
    });
    connection.on("close", () => {
      console.log("Connection closed.");
    });
    rabbitConn = connection;
    connected();
  });
};
const connected = () => {
  rabbitConn.createChannel((channelErr, channel) => {
    if (channelErr) {
      throw channelErr;
    }
    publisherChannel = channel;
  });
};
const publish = (exchange, routingKey, content) => {
    try {
        publisherChannel.publish(exchange, routingKey, Buffer.from(content), {persistent: true}, (err, msg) => {
            if(err) {
                console.error("Publish error", err.message);
                publisherChannel.connection.close();
            }
            console.log("[x] sent %s", content );
        });
        
    } catch (error) {
        console.error("Publisher error");
    }
}
