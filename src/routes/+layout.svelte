<script lang="ts">
  import "./../app.css";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="flex flex-col min-h-screen">
  <Navbar />

  <main class="flex-1">
    <slot />
  </main>

  <Footer />

  <div class="flex sticky left-0 bottom-0 bg-slate-700 py-2">
    <div class="container">
      <p class="text-slate-200 text-center">
        Website ini hanya sebuah sampel. Apabila ada kesamaan nama / merek, kami
        mohon maaf.
      </p>
    </div>
  </div>
</div>
