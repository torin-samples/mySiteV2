<script lang="ts">
    import { onMount } from 'svelte';

    let isDark = false;
    let mounted = false;

    onMount(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        updateTheme();
        mounted = true;
    });

    function toggleTheme() {
        isDark = !isDark;
        updateTheme();
    }

    function updateTheme() {
        const root = document.documentElement;
        
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
</script>

<button
    on:click={toggleTheme}
    class="fixed top-4 right-4 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xs shadow-lg 
        hover:scale-110 transition-all duration-300 z-50 border border-gray-200 dark:border-gray-700"
    aria-label="Toggle theme"
>
    {#if mounted}
        {#if isDark}
            <svg class="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
            </svg>
        {:else}
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        {/if}
    {:else}
        <div class="w-6 h-6 animate-pulse bg-gray-300 rounded"></div>
    {/if}
</button>
