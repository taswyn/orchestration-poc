import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const PORT = 8200;

const app = express();

app.use(cors());

app.use(express.static(path.resolve(dirname, 'compiled-components'), {
  maxAge: '365d',
}));

app.listen(PORT);

console.log(`Listening on: http://localhost:${PORT}`);