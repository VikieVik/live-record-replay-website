var socket = io("http://localhost:3000");

var firstEvent = null;
var roomName = "test-room-1";

const replayer = new rrweb.Replayer([], {
  liveMode: true,
});
replayer.startLive();

socket.on("connect", () => {
  socket.emit("new-user", roomName);

  socket.on("event", (data) => {
    console.log(data);
    replayer.addEvent(data);
  });
});
