import * as colors from 'colors/safe';
import * as http from 'http';
import * as moment from 'moment';
import { Ycs } from './app';

export async function setup(app: Ycs) {
  http.createServer(app.callback()).listen(app.config.port);
  console.log(
    `[${colors.green(
      moment().format('YY-MM-DD HH:mm:ss')
    )}] HTTP Server started at http://${app.config.domain}:${app.config.port}`
  );
}
