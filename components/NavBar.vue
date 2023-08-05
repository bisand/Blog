<template>
    <div class="container mx-auto">
        <nav>
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
        </nav>
    </div>
</template>

<script setup lang="ts">
</script>