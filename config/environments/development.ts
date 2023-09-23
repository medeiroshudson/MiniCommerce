import { Configuration } from '@minicommerce/shared'

const DEVELOPMENT: Configuration = {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
    BACKEND_PORT: +(process.env.BACKEND_PORT || 5001)
}

export default DEVELOPMENT;