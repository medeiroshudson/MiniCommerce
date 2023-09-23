import { Configuration } from '@minicommerce/shared'

const PRODUCTION: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || 'production',
    BACKEND_PORT: +(process.env.BACKEND_PORT || 80)
}

export default PRODUCTION;