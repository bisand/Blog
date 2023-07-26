import { Redis } from '@upstash/redis'

export default defineEventHandler(async (event) => {

    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL as string,
        token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
    })

    const count = await redis.incr("counter");
    return count;
})
