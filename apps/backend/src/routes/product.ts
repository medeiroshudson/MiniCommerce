import { Hono } from "hono";
import { container, TYPES } from '@minicommerce/infrastructure/ioc'
import { IProductRepository } from "@minicommerce/domain/interfaces"

const product = new Hono();
const repository = container.get<IProductRepository>(TYPES.IProductRepository);

product.get('/', async (c) => {
    var products = await repository.getAll();
    return c.json(products);
});

product.get('/:sku', async (c) => {
    const { sku } = c.req.param();

    var product = await repository.get(sku);
    return c.json(product);
});

export { product };