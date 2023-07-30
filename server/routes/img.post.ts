import { KVNamespace } from '@cloudflare/workers-types';

export default defineEventHandler(async (event) => {

    const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
    const data = await readMultipartFormData(event);

    data?.forEach(element => {
        const { filename, data } = element;
        if (filename !== undefined && data !== undefined) {
            const sanitizedFilename = filename.replace(/[^a-zA-Z0-9_.-]/gi, '_').toLocaleLowerCase();
            IMAGES_KV.put(sanitizedFilename, data, { expirationTtl: 31536000 });
        }
    });
    return data;

});
