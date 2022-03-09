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

socket.on("connect", () => {
  rrweb.record({
    emit(event) {
      console.log(event);
      socket.emit("event", event);
    },
  });

  // for (let i = 0; i < 10; i++) {
  //   socket.emit("event", { data: i });
  // }
});
