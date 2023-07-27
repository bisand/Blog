export default defineEventHandler((event) => {
    // if (!event.context.cloudflare) {
        console.log('New request: ' + getRequestURL(event))
        event.context.cloudflare = { env: {} }; // initialize the context
    // }
})
