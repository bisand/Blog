<script setup lang="ts">
const { status, signOut, signIn } = useAuth()

function loginWithGithub() {
    if (status.value === 'authenticated')
        return signOut()
    return signIn('github')
}

</script>

<template>
    <UButton :icon="status === 'authenticated' ? 'i-heroicons-lock-open-solid' : 'i-heroicons-lock-closed-solid'"
        color="gray" variant="ghost" @click="loginWithGithub()" />
</template>