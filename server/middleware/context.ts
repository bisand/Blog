import { KVNamespace, KVNamespaceGetOptions, KVNamespaceGetWithMetadataResult, KVNamespaceListOptions, KVNamespaceListResult, KVNamespacePutOptions, ReadableStream } from "@cloudflare/workers-types";
import * as fs from "fs";

export default defineEventHandler((event) => {
    if (!event.context.cloudflare) {
        console.log('New request: ' + getRequestURL(event))
        event.context.cloudflare = { env: { IMAGES: new KVLocal('IMAGES') } }; // initialize the context
    }
})

export class KVLocal {
    constructor(public name: string) { }
    public get<T>(key: string, options?: KVNamespaceGetOptions<T>): Promise<T | null> {
        // Load data from file
        const path = `./.wrangler/state/fake/kv/${this.name}/blobs/${key}`;
        const data = fs.readFileSync(path, 'utf8');

        return Promise.resolve(data as unknown as T);
    }
    public put(key: string, value: string, options?: KVNamespacePutOptions): Promise<void> {
        try {
            const dir = `./.wrangler/state/fake/kv/${this.name}/blobs`
            const path = `${dir}/${key}`
            // Create directory if it doesn't exist
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            fs.writeFileSync(path, value);
            console.log("Data saved to file.");
        } catch (err) {
            console.error(err);
        } return Promise.resolve();
    }
}