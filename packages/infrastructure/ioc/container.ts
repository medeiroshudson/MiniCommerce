import 'reflect-metadata';
import { Container } from 'inversify';

import { TYPES } from './types'
import { IProductRepository } from '@minicommerce/domain/interfaces';
import { ProductRepository } from '@minicommerce/infrastructure/data/repositories';

const container = new Container();

if (container) {
    container.bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);
}

export { container };