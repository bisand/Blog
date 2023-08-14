export default defineEventHandler((event) => {
    return {
        hello: 'world',
        time: new Date(),
        origin: process.env.ORIGIN
    }
})
