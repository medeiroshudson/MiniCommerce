import { Hono } from "hono";

const product = new Hono();

product.get('/', (c) => c.text('Produtos 2'));

export { product };