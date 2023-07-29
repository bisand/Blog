import { Body, KVNamespace } from "@cloudflare/workers-types";
import * as path from "path";

export default defineEventHandler(async (event) => {
    const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
    const filename = event.context.params?.filename;

    if (filename === undefined) {
        throw createError({ statusCode: 404, statusMessage: 'Image Not Found' })
    }
    try {
        const image: ArrayBuffer | null = await IMAGES_KV.get(filename, 'arrayBuffer');

        if (image === null) {
            throw createError({ statusCode: 404, statusMessage: 'Image Not Found' })
        }
        const contentType = `image/${path.extname(filename).slice(1)}`;
        const headers = {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable'
        };
        setHeaders(event, headers); // Set the headers
        return image;
    } catch (error) {
       throw createError({ statusCode: 404, statusMessage: 'Image Not Found' })
    }
});

