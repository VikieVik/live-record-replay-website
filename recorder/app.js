// var events = [];

// let stopFn = rrweb.record({
//   emit(event) {
//     console.log(event);
//     if (events.length > 10) {
//       // stop after 100 events
//       stopFn();
//       const replayer = new rrweb.Replayer(events);
//       replayer.play();
//     } else {
//       events.push(event);
//     }
//   },
// });

var socket = io("http://localhost:3000");

// const replayer = new rrweb.Replayer([], {
//   liveMode: true,
// });

var roomName = "test-room-1";

socket.on("connect", () => {
  // instruct a room name to be joined by server
  socket.emit("new-user", roomName);

  rrweb.record({
    emit(event) {
      console.log(event);
      //socket.emit("event", event);
      socket.emit("send-event", { event: event, room: roomName });
      //socket.to(roomName).emit("event", event);
    },
  });

  // for (let i = 0; i < 10; i++) {
  //   socket.emit("event", { data: i });
  // }
});
