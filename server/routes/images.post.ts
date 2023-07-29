import { KVNamespace } from '@cloudflare/workers-types';
import busboy from 'busboy';
import { log } from 'console';

export default eventHandler(async (event) => {

    const IMAGES_KV: KVNamespace = event.context.cloudflare.env.IMAGES;
    // let value: number = await IMAGES_KV.get<number>("counter") ?? 0;
    // value++;
    const buf = await new Promise<ArrayBuffer>(resolve => {
        resolve(Buffer.from('hello world'));
    });

    log('buf', buf);

    console.log('POST request');
    const bb = busboy({ headers: event.node.req.headers });
 
    bb.on('file', (name: any, file: any, info: { filename: any; encoding: any; mimeType: any; }) => {
        let data: ArrayBuffer = new ArrayBuffer(0);
        const { filename, encoding, mimeType } = info;
        const sanitizedFilename = filename.replace(/[^a-z0-9_.-]/gi, '_').toLowerCase();
        console.log(`File [${name}]: filename: ${sanitizedFilename}, encoding: ${encoding}, mimeType: ${mimeType}`);
        file.on('data', (chunk: any) => {
            console.log(`File [${name}] ${sanitizedFilename} got ${chunk.length} bytes`);
            const newBuffer = new ArrayBuffer(data.byteLength + chunk.length);
            const newView = new Uint8Array(newBuffer);
            newView.set(new Uint8Array(data));
            newView.set(new Uint8Array(chunk), data.byteLength);
            data = Buffer.from(newBuffer);
        }).on('close', () => {
            console.log(`File [${name}] ${sanitizedFilename} done`);
        }).on('end', async () => {
            await IMAGES_KV.put(sanitizedFilename, data);
        });
    });
    bb.on('field', (name: any, val: any, info: any) => {
        console.log(`Field [${name}]: value: %j`, val);
    });
    bb.on('close', () => {
        console.log('Done parsing form!');
        setResponseStatus(event, 201);
    });
    event.node.req.pipe(bb);
    return null;
})