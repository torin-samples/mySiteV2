<script>
  import Header from '$lib/components/Header.svelte';
  import Main from '$lib/components/Main.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import ParticleBackground from '$lib/components/ParticleBackground.svelte';
</script>

<ThemeToggle />
<ParticleBackground />
<div class="container mx-auto max-w-4xl px-4 py-16">
  <Header />
  <Main />
  <Footer />
</div>
  