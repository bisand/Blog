import { KVNamespace } from "@cloudflare/workers-types";

export default defineEventHandler((event) => {
    if (!event.context.cloudflare) {
        console.log('New request: ' + getRequestURL(event))
        event.context.cloudflare = { env: { IMAGES: {} as KVNamespace } }; // initialize the context
    }
})
