<template>
    <nav class="bg-slate-50 dark:bg-gray-800 p-4 shadow-lg fixed">
        <div class="container mx-auto">
            <div class="flex items-center justify-between">
                <NuxtLink to="/" class="text-xl font-bold">Developer Blog</NuxtLink>
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/" class="align-middle">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/articles" class="align-middle">Articles</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="align-middle">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="align-middle">Contact</NuxtLink>
                    </li>
                    <li>
                        <ColorModePicker />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
</script>