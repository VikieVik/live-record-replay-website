var cronyScript = document.createElement("SCRIPT");
cronyScript.src = "https://cdn.socket.io/4.4.1/socket.io.min.js";
cronyScript.type = "text/javascript";
document.getElementsByTagName("HEAD")[0].appendChild(cronyScript);

// globle window funtion can be accessed from anywhere in the browser
window.cronyWidget = function (customConfig) {
  var { token, apiServer } = customConfig;

  // var socket = io("http://localhost:3000");
  // var roomName = "SqFR5uoLEUX8Qzuo66xF686qxf23";

  var socket = io(apiServer);
  var roomName = token;

  console.log("crony script initiated.....");

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
  });
};
