export class Socket {
  private sockets: {
    [key: string]: SocketIO.Socket;
  } = {};

  public register(socket: SocketIO.Socket): void {
    this.sockets[socket.id] = socket;
    socket.on('disconnect', () => {
      delete this.sockets[socket.id];
    });
  }

  public emit(event: string, ...args: any[]) {
    for (const key of Object.keys(this.sockets)) {
      this.sockets[key].emit(event, ...args);
    }
  }
}
