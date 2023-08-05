<template>
    <div class="bg-slate-100 dark:bg-stone-800 min-h-screen">
        <header class="dark:bg-stone-800 sticky top-0 z-30 w-full px-2 py-4 sm:px-4 shadow-xl border-b border-b-neutral-400 dark:border-b-neutral-700">
            <NavBar />
        </header>
        <!-- Main Content -->
        <main class="container mx-auto my-4 dark:bg-inherit min-h-full">
            <slot />
        </main>
    </div>
</template>

<script>
</script>