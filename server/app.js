const { Server } = require("socket.io");
const { createServer } = require("http");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.emit("hello", { greeting: "Hello Vikas" });
  console.log("connected", socket.id);

  // receive event from one client and send to other
  socket.on("event", (data) => {
    //console.log(data);
    socket.broadcast.emit("event", data);
  });
});

io.listen(3000);
console.log("socket io server started......");
