import { Configuration } from '@minicommerce/domain/entities/'

const DEVELOPMENT: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    BACKEND_PORT: +(process.env.BACKEND_PORT || 80),
    DATABASE_URL: process.env.DATABASE_URL || ''
}

export default DEVELOPMENT;