<template>
    <div class="fixed bottom-4 right-4 flex items-center space-x-2">
        <label for="dark-mode-toggle" class="text-gray-700 dark:text-gray-300">Dark Mode</label>
        <input type="checkbox" id="dark-mode-toggle" :checked="darkMode" @change="toggleDarkMode" class="hidden">
        <div class="w-10 h-6 bg-gray-400 dark:bg-gray-700 rounded-full flex items-center p-1">
            <div class="bg-white dark:bg-white w-4 h-4 rounded-full shadow-md transform transition-transform"
                :class="{ 'translate-x-6': darkMode }"></div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        darkMode: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggleDarkMode() {
            this.$emit('toggleDarkMode');
        },
    },
};
</script>
  