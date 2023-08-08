// file: ~/server/api/auth/[...].ts
import GithubProvider from "@auth/core/providers/github"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"
import { KVNamespace } from "@cloudflare/workers-types";

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

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
    secret: runtimeConfig.authJs.secret,
    providers: [
        GithubProvider({
            clientId: runtimeConfig.github.clientId,
            clientSecret: runtimeConfig.github.clientSecret
        })
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            console.log('signIn called')
            console.log(profile)

            return true
        },
        async session({ session, user, token }) {
            console.log('session called')
            console.log(session)

            return session
        },
    },
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         // console.log(`signIn ${BISAND_BLOG}` );
    //         return true;
    //         // const BISAND_BLOG_KV: KVNamespace = process.env.BISAND_BLOG as unknown as KVNamespace;
    //         // if (BISAND_BLOG_KV) {
    //         //     let value: string = await BISAND_BLOG_KV.get<string>("user:2023-08-07-21431412345") ?? '';

    //         //     if (user.email === value) {
    //         //         return true
    //         //     } else {
    //         //         // Return false to display a default error message
    //         //         return false
    //         //         // Or you can return a URL to redirect to:
    //         //         // return '/unauthorized'
    //         //     }
    //         // }
    //         // return false
    //     }
    // }
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
