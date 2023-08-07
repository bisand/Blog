<template>
    <UCard :ui="ui">
        About!
        <UButton icon="i-heroicons-magnifying-glass" />
    </UCard>
</template>
  
<script setup>
const ui = /*ui*/ {
    background: 'bg-white dark:bg-neutral-700'
}

// file: e.g ~/pages/login.vue
const { status, data, signIn, signOut } = useAuth()

status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...

await signIn() // Sign in the user
// await signOut() // Sign out the user

</script>