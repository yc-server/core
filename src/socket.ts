import * as colors from 'colors/safe';
import * as moment from 'moment';
import { Ycs } from './app';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'typed-promisify';
import * as IO from 'socket.io';
import * as redis from 'socket.io-redis';

let io: SocketIO.Server;

export class Socket {
  private room: string;

  constructor(room: string) {
    this.room = room;
  }

  public register(socket: SocketIO.Socket): void {
    socket.join(this.room);
  }

  public emit(event: string, ...args: any[]) {
    io.of('/').to(this.room).emit(event, ...args);
  }
}

export async function setup(app: Ycs) {
  if (!app.config.socket) return;
  const config: IConfig = app.config.socket;
  const apiDir = path.join(app.dir, 'api');
  const dirs = await promisify(fs.readdir)(apiDir);
  const sockets: Socket[] = [];
  for (const dir of dirs) {
    if (/^\./.test(dir)) continue;
    try {
      const stat = await promisify(fs.stat)(`${apiDir}/${dir}/socket.js`);
      if (stat.isFile) {
        const socket: Socket = require(`${app.dir}/api/${dir}/socket`).default;
        sockets.push(socket);
      }
    } catch (e) {
      continue;
    }
  }

  const port = config.startPort + ~~process.env.pm_id;
  io = IO(port);
  io.adapter(redis({ host: config.redis.host, port: config.redis.port }));
  io.on('connection', socket => {
    if (config.onConnection) {
      config.onConnection(socket);
    }
    if (config.onDisconnect) {
      socket.on('disconnect', () => {
        config.onDisconnect(socket);
      });
    }
    for (const s of sockets) {
      s.register(socket);
    }
  });
  console.log(
    `[${colors.green(
      moment().format('YY-MM-DD HH:mm:ss')
    )}] Socket IO started at http://${app.config.domain}:${port}`
  );
}

export interface IConfig {
  startPort: number;
  redis: {
    host: string;
    port: number;
  };
  onConnection?: (socket: SocketIO.Socket) => void;
  onDisconnect?: (socket: SocketIO.Socket) => void;
}
