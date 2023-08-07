<template>
    <UCard :ui="ui">
        About!
        <UButton icon="i-heroicons-magnifying-glass" />
        <UCard>
            <div class="max-w-5xl mx-auto mt-5 px-5">
                <h3 class="text-xl font-bold ">Authentication Overview</h3>
                <p class="text-sm">See all available authentication & session information below.</p>
                <pre v-if="status"><span>Status:</span> {{ status }}</pre>
                <pre v-if="data"><span>Data:</span> {{ data }}</pre>
                <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
                <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
            </div>
        </UCard>
    </UCard>
</template>
  
<script setup>
// definePageMeta({ auth: false })
const ui = /*ui*/ {
    background: 'bg-white dark:bg-neutral-700'
}

// file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useAuth()

// status.value // Session status: `unauthenticated`, `loading`, `authenticated`
// data.value // Session data, e.g., expiration, user.email, ...

// await signIn() // Sign in the user
// await signOut() // Sign out the user

</script>