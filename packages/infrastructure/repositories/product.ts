import { PrismaClient } from '@prisma/client'
import { Product } from '@minicommerce/domain/entities'
import { IProductRepository } from '@minicommerce/domain/interfaces'

export class ProductRepository implements IProductRepository {
    constructor (private readonly prisma: PrismaClient) {}

    async get(sku: string): Promise<Product> {
        return await this.prisma.product.findUnique({
            where: { sku: sku }
        });
    }
}