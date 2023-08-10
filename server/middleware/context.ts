import { KVLocal } from "../tools/kv-local";

export default defineEventHandler((event) => {
    // if (!event.context.cloudflare) {
    //     console.log('New request: ' + getRequestURL(event))
    //     event.context.cloudflare = { env: { IMAGES: new KVLocal('IMAGES'), BISAND_BLOG: new KVLocal('BISAND_BLOG') } }; // initialize the context
    // }
})
