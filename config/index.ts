import * as dotenv from 'dotenv';

import PRODUCTION from './environments/production';
import DEVELOPMENT from './environments/development';

import { Configuration } from '@minicommerce/domain/entities';

dotenv.config();

let currentConfiguration: Configuration = DEVELOPMENT;

if (process.env.NODE_ENV) {

    if (process.env.NODE_ENV === "production") {
        currentConfiguration = PRODUCTION;
    } else {
        currentConfiguration = DEVELOPMENT;
    }
    
}

export { currentConfiguration as configuration };