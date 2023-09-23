import { Hono } from "hono";
import { configuration } from '@configuration';

const info = new Hono();

info.get('/', (c) => {
    return c.json({ environment: configuration.ENVIRONMENT, port: configuration.BACKEND_PORT });
});

export { info };