<template>
    <div
        :class="['bg-white', darkMode ? 'dark' : 'dark:bg-gray-900', 'text-black', darkMode ? 'dark:text-white' : 'text-white', 'transition-colors duration-300']">
        <!-- Dark Mode Toggler -->
        <DarkModeToggler :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />

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
export default {
    data() {
        return {
            darkMode: false,
        };
    },
    mounted() {
        // Check if dark mode was enabled previously and restore it.
        if (localStorage.getItem('darkModeEnabled') === 'true') {
            this.darkMode = true;
        }
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            if (this.darkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('darkModeEnabled', true);
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('darkModeEnabled', false);
            }
        },
    },
};
</script>