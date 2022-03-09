var socket = io("http://localhost:3000");

var firstEvent = null;

const replayer = new rrweb.Replayer([], {
  liveMode: true,
});
replayer.startLive();

socket.on("connect", () => {
  socket.on("event", (data) => {
    console.log(data);
    replayer.addEvent(data);
  });
});
