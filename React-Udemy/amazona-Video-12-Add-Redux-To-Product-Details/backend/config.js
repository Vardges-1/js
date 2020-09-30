export default {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://Amazona:123AAA@cluster0-ub3b4.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}