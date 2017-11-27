import * as colors from 'colors/safe';
import * as http from 'http';
import * as moment from 'moment';
import { Ycs } from './app';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'typed-promisify';
import * as IO from 'socket.io';
import { Socket } from './socket';

export async function setup(app: Ycs) {
  const server = http.createServer(app.callback());
  if (app.config.http) {
    if (app.config.http.socket) {
      setupSocketIo(app, server);
    }
    if (app.config.http.preListen) {
      app.config.http.preListen(server);
    }
  }
  server.listen(app.config.port);
  console.log(
    `[${colors.green(
      moment().format('YY-MM-DD HH:mm:ss')
    )}] HTTP Server started at http://${app.config.domain}:${app.config.port}`
  );
}

export async function setupSocketIo(app: Ycs, server: http.Server) {
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
  const io: SocketIO.Server = IO(server);
  io.on('connection', socket => {
    if (app.config.http.socket.onConnection) {
      app.config.http.socket.onConnection(socket);
    }
    for (const s of sockets) {
      s.register(socket);
    }
  });
}
