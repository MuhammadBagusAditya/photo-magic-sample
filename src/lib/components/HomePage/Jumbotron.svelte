<script lang="ts">
  import { base } from "$app/paths";
  import { twMerge } from "tailwind-merge";

  let bannerImg = `bg-[url('/img/banner.jpg')]`;
</script>

<section
  class={twMerge("bg-cover bg-center bg-no-repeat")}
  style:background-image={`url('${base}/img/banner.jpg')`}
>
  <div
    class="grid grid-rows-1 grid-cols-1 min-h-[400px] md:min-h-[80vh] items-center bg-slate-900/80"
  >
    <div class="flex flex-col items-center justify-center">
      <h1
        class="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-200 text-center mb-2"
      >
        Abadikan kenangan anda <br />
        Di <span class="text-primary-600">PhotoMagic</span>
      </h1>

      <div
        class="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 w-full px-8 justify-center"
      >
        <button
          type="button"
          class="w-full sm:w-fit text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center max-w-[20rem]"
        >
          Lebih lanjut
        </button>

        <button
          type="button"
          class="w-full sm:w-fit text-secondary-800 bg-secondary-200 hover:bg-secondary-300 focus:ring-4 focus:outline-none focus:ring-secondary-200 dark:bg-secondary-200 dark:hover:bg-secondary-300 dark:focus:ring-secondary-400 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center text-center max-w-[20rem]"
        >
          Hubungi kami
        </button>
      </div>
    </div>
  </div>
</section>
