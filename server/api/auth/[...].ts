// file: ~/server/api/auth/[...].ts
import { KVNamespace } from "@cloudflare/workers-types";
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import { env } from 'process'
import { B } from "../../../dist/_nuxt/entry.cce0e594";

function getUtcDateString() {
    const now = new Date()
    const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = now.getUTCDate().toString().padStart(2, '0');
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = now.getUTCMilliseconds().toString().padStart(3, '0');
    return `${now.getUTCFullYear()}${month}${day}:${hours}${minutes}${seconds}${milliseconds}`
}

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    secret: process.env.NUXT_SECRET,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: env.GITHUB_CLIENT_ID,
            clientSecret: env.GITHUB_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            const BISAND_BLOG_KV: KVNamespace = env.BISAND_BLOG as unknown as KVNamespace;
            if (BISAND_BLOG_KV) {
                let value: string = await BISAND_BLOG_KV.get<string>("user:2023-08-07-21431412345") ?? '';

                if (user.email === value) {
                    return true
                } else {
                    // Return false to display a default error message
                    return false
                    // Or you can return a URL to redirect to:
                    // return '/unauthorized'
                }
            }
            return false
        }
    }
})
