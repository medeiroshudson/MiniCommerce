import { Product } from '@minicommerce/domain/entities'

export interface IProductRepository {
    get: (sku: string) => Promise<Product> | null
    getAll: () => Promise<Product[]> | null
}