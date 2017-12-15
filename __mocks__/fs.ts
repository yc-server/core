const fs: any = jest.genMockFromModule('fs');

export function existsSync(f: string) {
  return f.startsWith('E/');
}

export function readdir(f: string, cb: (err: NodeJS.ErrnoException, files: string[]) => void) {
  const ff = files
    .filter(x => x.startsWith(f))
    .map(x => x.replace('E/plugins/', ''));
  cb(null, ff);
}

export function stat(f: string, cb: (err: NodeJS.ErrnoException, stat: any) => void) {
  cb(null, {
    isFile: () => f.startsWith('E/plugins/bookmark') || f.startsWith('E/plugins/err')
  });
}

const files: string[] = [];
export function mockFiles(newFiles: string[]) {
  files.splice(0, files.length);
  for (const f of newFiles) files.push(f);
}