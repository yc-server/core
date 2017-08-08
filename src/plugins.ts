import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'typed-promisify';
import { Ycs } from './app';

export async function setup(app: Ycs, mode: 'pre' | 'post') {
  const pluginsDir = path.join(app.dir, 'plugins');
  try {
    if (!fs.existsSync(pluginsDir)) return;
    const dirs = await promisify(fs.readdir)(pluginsDir);
    for (const dir of dirs) {
      if (/^\./.test(dir)) continue;
      const stat = await promisify(fs.stat)(`${pluginsDir}/${dir}/setup.js`);
      if (stat.isFile) {
        const fn = require(`${app.dir}/plugins/${dir}/setup`)[mode];
        fn && fn(app);
      }
    }
  } catch (e) {
    console.log(e.name);
  }
}
