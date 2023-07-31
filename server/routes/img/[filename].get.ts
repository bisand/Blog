import { Body, KVNamespace } from "@cloudflare/workers-types";
import * as path from "path";

const notFoundError = { statusCode: 404, statusMessage: 'Image Not Found' };

export default defineEventHandler(async (event) => {
    const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
    const filename = event.context.params?.filename;

    if (!filename) {
        throw createError(notFoundError)
    }
    try {
        const image: ArrayBuffer | null = await IMAGES_KV.get(filename, 'arrayBuffer');
        if (image === null) {
            throw createError(notFoundError)
        } else {
            const headers = {
                'Content-Type': `image/${path.extname(filename).slice(1)}`,
                'Cache-Control': 'public, max-age=31536000, immutable'
            };
            setHeaders(event, headers); // Set the headers
            event.node.res.write(image);
            event.node.res.end();
        }
    } catch (error) {
        throw createError(notFoundError)
    }
});

