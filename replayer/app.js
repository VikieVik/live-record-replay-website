var socket = io("http://localhost:3000");

var firstEvent = null;
var roomName = "SqFR5uoLEUX8Qzuo66xF686qxf23";

const replayer = new rrweb.Replayer([], {
  liveMode: true,
});
replayer.startLive();

socket.on("connect", () => {
  socket.emit("new-user", roomName);

  // received from user side
  socket.on("user-event", (data) => {
    console.log(data);
    replayer.addEvent(data);
  });

  // sent to server room for agent
  socket.emit("receive-event", { event: "test", room: roomName });
});
