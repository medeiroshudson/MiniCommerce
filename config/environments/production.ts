import { Configuration } from '@minicommerce/shared'

const PRODUCTION: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || 'production',
    BACKEND_PORT: +(process.env.BACKEND_PORT || 5001)
}

export default PRODUCTION;