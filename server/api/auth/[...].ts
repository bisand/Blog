// file: ~/server/api/auth/[...].ts
import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import { env } from 'process'

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: env.GITHUB_CLIENT_ID,
           clientSecret: env.GITHUB_CLIENT_SECRET
        })
    ]
})
