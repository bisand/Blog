import { KVNamespace } from "@cloudflare/workers-types";
import { KVHelper } from "../tools/kv-helper";

export default defineEventHandler(async (event) => {

    // const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
    let value: number = await KVHelper.IMAGES.get<number>("counter") ?? 0;
    value++;
    await KVHelper.IMAGES.put("counter", value.toString());

    return value;
})
