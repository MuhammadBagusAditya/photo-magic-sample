<script lang="ts">
  import Jumbotron from "$lib/components/HomePage/Jumbotron.svelte";
  import About from "$lib/components/HomePage/About.svelte";
  import Services from "$lib/components/HomePage/Services.svelte";
  import Packages from "$lib/components/HomePage/Packages.svelte";
  import Gallery from "$lib/components/HomePage/Gallery.svelte";
</script>

<svelte:head>
  <title>PhotoMagic - Studio foto terbaik</title>
</svelte:head>

<main>
  <Jumbotron />
  <About />
  <Services />
  <Packages />
  <Gallery />
</main>
