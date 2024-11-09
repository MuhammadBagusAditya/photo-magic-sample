<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";

  let sidebarStatus = false;
  let doc: Document | null = null;

  onMount(() => {
    doc = window.document;
  });

  $: if (doc) {
    if (sidebarStatus) {
      doc.body.classList.add("overflow-hidden");
    } else {
      doc.body.classList.remove("overflow-hidden");
    }
  }
</script>

<nav class="py-4 bg-white sticky top-0 left-0 z-[2]">
  <div class="container flex items-center justify-between">
    <a href="/" class="inline-flex">
      <span class="text-3xl text-primary-600 font-bold">Photo</span>
      <span class="text-3xl text-secondary-800 font-bold">Magic</span>
    </a>

    <div class="hidden md:flex gap-6">
      <a href="#home" class="font-semibold text-secondary-700">Beranda</a>
      <a href="#about-us" class="font-semibold text-secondary-700">Tentang</a>
      <a href="#services" class="font-semibold text-secondary-700">Keunggulan</a
      >
      <a href="#packages" class="font-semibold text-secondary-700">Layanan</a>
      <a href="#gallery" class="font-semibold text-secondary-700">Galeri</a>
    </div>

    <div
      class={twMerge(
        "fixed top-0 w-[70vw] bg-primary-700 h-screen py-3 px-6 flex flex-col transition-all duration-300",
        sidebarStatus ? "right-0" : "right-[-100%]"
      )}
    >
      <div
        class="flex justify-between items-center border-b border-secondary-200 pb-3 mb-4"
      >
        <h2 class="text-2xl font-semibold text-secondary-100">Menu</h2>

        <button
          class="text-secondary-200"
          on:click={() => (sidebarStatus = false)}
        >
          <Icon icon="mdi:close" class="text-xl" />
        </button>
      </div>

      <div class="flex flex-col gap-3">
        <a href="#home" class="text-secondary-200 text-lg">Beranda</a>
        <a href="#about-us" class="text-secondary-200 text-lg">Tentang</a>
        <a href="#services" class="text-secondary-200 text-lg">Keunggulan</a>
        <a href="#packages" class="text-secondary-200 text-lg">Layanan</a>
        <a href="#gallery" class="text-secondary-200 text-lg">Galeri</a>
      </div>
    </div>

    <button
      on:click={() => (sidebarStatus = true)}
      class="inline-flex items-center justify-center md:hidden"
    >
      <Icon icon="mdi:menu" class="text-2xl text-secondary-800" />
    </button>
  </div>
</nav>
