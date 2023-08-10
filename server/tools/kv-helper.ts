import { KVNamespace } from "@cloudflare/workers-types";
import { KVLocal } from "./kv-local";

export class KVHelper {
    private static _BISAND_BLOG: KVNamespace;
    private static _IMAGES: KVNamespace;
    public static get BISAND_BLOG(): KVNamespace {
        if (!process.env.BISAND_BLOG) {
            KVHelper._BISAND_BLOG = new KVLocal('BISAND_BLOG') as unknown as KVNamespace;
        } else {
            KVHelper._BISAND_BLOG = process.env.BISAND_BLOG as unknown as KVNamespace;
        }
        return KVHelper._BISAND_BLOG;
    }
    public static get IMAGES(): KVNamespace {
        if (!process.env.IMAGES) {
            KVHelper._IMAGES = new KVLocal('IMAGES') as unknown as KVNamespace;
        } else {
            KVHelper._IMAGES = process.env.IMAGES as unknown as KVNamespace;
        }
        return KVHelper._IMAGES;
    }
}
