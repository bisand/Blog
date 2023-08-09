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
        async signIn({ user, account, profile, email, credentials }: any) {
            const BISAND_BLOG: KVNamespace = process.env.BISAND_BLOG as unknown as KVNamespace;

            console.log(">>> signIn >>>", JSON.stringify(profile))
            const isAllowedToSignIn = true
            const usr: any = await BISAND_BLOG.get("user:" + profile.id, "json");
            if (usr.email === profile.email) {
                return true
            } else {
                // Return false to display a default error message
                return false
                // Or you can return a URL to redirect to:
                // return '/unauthorized'
            }
        },
        async session({ session, token, user }: any) {
            console.log(">>> session >>>", JSON.stringify(session))
            // Send properties to the client, like an access_token and user id from a provider.
            session.accessToken = token.accessToken
            session.user.id = token.id
            return session
        },
        async jwt({ token, account, profile }: any) {
            console.log(">>> jwt >>>", JSON.stringify(account))
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.accessToken = account.access_token
                token.id = profile.id
            }
            return token
        }
    },
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
