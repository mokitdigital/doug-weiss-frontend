import dotenv from 'dotenv'

dotenv.config({ silent: process.env.NODE_ENV === 'production' })

module.exports = {
  // options...
  devServer: {
        proxy: process.env.URL_LOCALHOST_BACKEND,
    }
}