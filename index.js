const PORT = 8080
const ip = require("ip")
const path = require("path")
const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) =>
  res.render("after-image-006-rgb", {
    SOCKET_URL: `"${ip.address()}:${PORT}"`,
  })
)
app.get("/bundle.js", (req, res) =>
  res.sendFile(path.join(__dirname, "views/bundle.js"))
)

const server = app.listen(PORT)

const io = require("socket.io")(server)

const sockets = []
io.on("connection", function(socket) {
  sockets.push(socket)
})

const PythonShell = require('python-shell');
const pyshell = new PythonShell('pyth.py');

pyshell.on('message', function (message) {
    for (var i = 0; i < sockets.length; i++) {
      sockets[i].emit('color', message)
    }
});

console.log(`http://localhost:${PORT}`)
