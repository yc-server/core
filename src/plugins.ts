import * as colors from 'colors/safe';
import * as fs from 'fs';
import * as moment from 'moment';
import * as path from 'path';
import { promisify } from 'typed-promisify';
import { Ycs } from './app';
import { Router } from './routers';

export let routers: Router[] = [];

export async function setup(app: Ycs, mode: 'pre' | 'post') {
  const pluginsDir = path.join(app.dir, 'plugins');
  try {
    if (!fs.existsSync(pluginsDir)) return;
    const files = await promisify(fs.readdir)(pluginsDir);
    for (const fileName of files) {
      if (/^\./.test(fileName)) continue;
      if (!/\.js$/.test(fileName)) continue;
      const stat = await promisify(fs.stat)(`${pluginsDir}/${fileName}`);
      if (stat.isFile()) {
        const plugin = await import(`${app.config
          .root}/node_modules/ycs-plugin-${fileName.substring(
          0,
          fileName.length - 3
        )}/lib/index`);
        const fn = plugin.setup[mode];
        if (fn) {
          const pluginRouters: Router[] = await fn(app);
          if (mode === 'pre' && pluginRouters && pluginRouters.length)
            routers = routers.concat(pluginRouters);
        }
      }
    }
  } catch (e) {
    console.log(
      `[${colors.red(moment().format('YY-MM-DD HH:mm:ss'))}] ${colors.red(
        'Plugin setup error'
      )}
      `,
      colors.red(e)
    );
  }
}
