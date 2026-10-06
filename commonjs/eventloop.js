import http from 'node:http';
import { pbkdf2Sync } from 'node:crypto';

const key = 'demo-key';

http.createServer((req, res) => {
  if (req.url === '/health') return res.end('ok');

  if (req.headers['x-api-key'] !== key) {
    res.statusCode = 401;
    return res.end();
  }
  
  pbkdf2Sync(key, 'salt', 200_000, 32, 'sha256');

  if (req.url === '/orders') {
    return res.end(JSON.stringify([
      { id: 1, item: 'Laptop' },
      { id: 2, item: 'Phone' }
    ]));
  }

  res.statusCode = 404;
  res.end();
}).listen(3000);



// fixed version

import http from 'node:http';
import { pbkdf2 } from 'node:crypto';
import { promisify } from 'node:util';

const hash = promisify(pbkdf2);
const key1 = 'demo-key1';

http.createServer(async (req, res) => {
  if (req.url === '/health') return res.end('ok');

  if (req.headers['x-api-key'] !== key1) {
    res.statusCode = 401;
    return res.end();
  }

  await hash(key1, 'salt', 200_000, 32, 'sha256');

  if (req.url === '/orders') {
    return res.end(JSON.stringify([
      { id: 1, item: 'Laptop' },
      { id: 2, item: 'Phone' }
    ]));
  }

  res.statusCode = 404;
  res.end();
}).listen(3000, () => {
  console.log('Server running on port 3000');
});

