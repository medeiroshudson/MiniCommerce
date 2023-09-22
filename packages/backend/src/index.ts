import { Hono } from "hono";
import { cors } from "hono/cors";
import { prettyJSON } from 'hono/pretty-json'

import { Workspace } from '@minicommerce/shared'

const app = new Hono();

app.use("*", prettyJSON());
app.use("/api/*", cors());

app.get('/workspaces', (c) => {
    const workspaces: Workspace[] = [
        { name: 'backend', version: '1.0.0' },
        { name: 'shared', version: '1.0.0' }
    ]

    return c.json(workspaces);
});

app.notFound((c) => c.json({ message: "Not Found" }, 404));

export default {
    port: 5001,
    fetch: app.fetch
}