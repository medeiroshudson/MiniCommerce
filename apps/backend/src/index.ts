import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from 'hono/pretty-json'

import { info, product } from './routes/'
import { configuration } from '@configuration';

const app = new Hono();

app.use(cors());
app.use(prettyJSON());

app.route('/info', info);
app.route('/product', product);

app.notFound((c) => c.json({ message: "Not Found" }, 404));

export default {
    fetch: app.fetch,
    port: configuration.BACKEND_PORT
}