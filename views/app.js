import io from "socket.io-client"

class Socket {
  constructor() {
    const rSliderEl = document.querySelector(".slider--red")
    const gSliderEl = document.querySelector(".slider--green")
    const bSliderEl = document.querySelector(".slider--blue")

    this._socket = io(window.SOCKET_URL)

    this._socket.on("color", data => {
      console.log(data);
    })
  }
}

export default new Socket()
