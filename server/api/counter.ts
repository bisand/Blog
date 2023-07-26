import { KVNamespace } from "@cloudflare/workers-types";

export default defineEventHandler(async (event) => {

    if (event.node.req.method === 'GET') {
        // the type `KVNamespace` comes from the @cloudflare/workers-types package
        const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;

        let value: number = await IMAGES_KV.get<number>("counter") ?? 0;
        return value;
    }
    else if (event.node.req.method === 'POST') {
        const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
        let value: number = await IMAGES_KV.get<number>("counter") ?? 0;
        value++;
        await IMAGES_KV.put("counter", value.toString());

        return value;
    }
})
