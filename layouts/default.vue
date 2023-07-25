<template>
    <div
        :class="['bg-white', darkMode ? 'dark' : 'dark:bg-gray-900', 'text-black', darkMode ? 'dark:text-white' : 'text-white', 'transition-colors duration-300']">

        <!-- Navbar -->
        <nav class="bg-blue-600 dark:bg-gray-800 p-4">
            <div class="container mx-auto">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="text-white text-xl font-bold">Developer Blog</NuxtLink>
                    <ul class="flex space-x-4">
                        <li>
                            <NuxtLink to="/" class="text-white">Home</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/articles" class="text-white">Articles</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about" class="text-white">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" class="text-white">Contact</NuxtLink>
                        </li>
                        <li>
                            <ColorModePicker />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Main Content -->
        <main class="container mx-auto p-4">
            <slot />
        </main>
    </div>
</template>

<script>
</script>