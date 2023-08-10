import { KVHelper } from "../tools/kv-helper";

export default defineEventHandler(async (event) => {

    // the type `KVNamespace` comes from the @cloudflare/workers-types package
    // const IMAGES_KV: KVNamespace = process.env.IMAGES as unknown as KVNamespace;

    let value: number = await KVHelper.IMAGES.get<number>("counter") ?? 0;
    return value;
})
