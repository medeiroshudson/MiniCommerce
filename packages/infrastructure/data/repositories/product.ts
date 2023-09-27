import { injectable } from 'inversify'

import { Product } from '@minicommerce/domain/entities'
import { IProductRepository } from '@minicommerce/domain/interfaces'
import { PrismaContext } from '@minicommerce/infrastructure/data/prisma/context';

@injectable()
export class ProductRepository implements IProductRepository {
    private database: PrismaContext;
    
    constructor() {
        this.database = new PrismaContext();
    }

    async get(sku: string): Promise<Product> {
        return await this.database.product.findUnique({
            where: { sku: sku }
        });
    }

    async getAll(): Promise<Product[]> {
        return await this.database.product.findMany();
    }
}