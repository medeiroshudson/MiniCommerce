import { Prisma } from '@prisma/client'

export class Product {
    public id: number;
    public sku: string
    public description: string
    public price: Prisma.Decimal
    public tags: string[]

    constructor(
        id: number, sku: string,
        description: string, price: Prisma.Decimal, tags: string[]
    ) {
        this.id = id;
        this.sku = sku;
        this.description = description;
        this.price = price;
        this.tags = tags;
    }
}