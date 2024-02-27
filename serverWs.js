// http is a core node module
//const http = require("http");
//ws is a 3rd party module
const websocket = require("ws");

/* const server = http.createServer((req, res) => {
  res.end("I am connected!");
}); */

const wss = new websocket.WebSocketServer({
  port: 3000,
});

wss.on("headers", (headers, req) => {
  console.log(headers);
});

wss.on("connection", (ws, req) => {
  // console.log(ws);
  ws.send("You are connected to a WebSocket Server, Welcome :)");
  ws.on("message", (messageEvent) => {
    console.log(messageEvent.toString());
  });
});

/* server.listen(3000); */
