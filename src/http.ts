import * as colors from 'colors/safe';
import * as http from 'http';
import * as moment from 'moment';
import { Ycs } from './app';

export const preListenActions = [];

export async function setup(app: Ycs) {
  const server = http.createServer(app.callback());
  if (app.config.http && app.config.http.preListen) {
    app.config.http.preListen(server);
  }
  for (const action of preListenActions) {
    action(server);
  }
  server.listen(app.config.port);
  console.log(
    `[${colors.green(
      moment().format('YY-MM-DD HH:mm:ss')
    )}] HTTP Server started at http://${app.config.domain}:${app.config.port}`
  );
}

export interface IConfig {
  /**
   * Doing some stuff before http server started
   */
  preListen?: (server: http.Server) => void;
}
