let env = process.env.NODE_ENV || 'development'

if (env === 'development') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://mongo:27017/Server-bsc'
} else if (env === 'test') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://mongo:27017/Server-bsc-test'
}