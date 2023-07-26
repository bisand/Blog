import * as Cloudflare from "cloudflare-client";

export default defineEventHandler(async (event) => {

    if (event.node.req.method === 'POST') {
        const kv = Cloudflare.kv({
            accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
            accessToken: process.env.CLOUDFLARE_TOKEN as string
        });

        const ns = kv.namespace("be707cd3dec2440085d7cc08a06e90b5");
        let value: number = await ns.get("counter") as number ?? 0;
        value++;
        const count = await ns.set("counter", value);

        return value;
    }
    else if (event.node.req.method === 'GET') {
        const kv = Cloudflare.kv({
            accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
            accessToken: process.env.CLOUDFLARE_TOKEN as string
        });

        const ns = kv.namespace("be707cd3dec2440085d7cc08a06e90b5");
        let value: number = await ns.get("counter") as number ?? 0;
        return value;
    }
})
