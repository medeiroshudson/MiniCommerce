import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from 'hono/pretty-json'

import { configuration } from '@configuration';

const app = new Hono();

app.use("*", prettyJSON());
app.use("/api/*", cors());

app.get('/info', (c) => {
    return c.json({ environment: configuration.ENVIRONMENT, port: configuration.BACKEND_PORT });
});

app.notFound((c) => c.json({ message: "Not Found ssss" }, 404));

export default {
    fetch: app.fetch,
    port: configuration.BACKEND_PORT
}