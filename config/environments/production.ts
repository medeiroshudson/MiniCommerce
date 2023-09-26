import { Configuration } from '@minicommerce/domain/entities/'

const PRODUCTION: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || 'production',
    BACKEND_PORT: +(process.env.BACKEND_PORT || 80),
    DATABASE_URL: process.env.DATABASE_URL || ''
}

export default PRODUCTION;