<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section class="container py-6 md:py-12" id="services">
  <h2 class="text-3xl font-bold text-secondary-800 text-center mb-8">
    Kenapa memilih kami?
  </h2>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
    <div
      class="flex flex-col items-center py-4 px-6 rounded-lg max-w-[30rem] w-full"
    >
      <Icon
        icon="mdi:clock"
        class="text-primary-600 text-5xl sm:text-7xl xl:text-8xl mb-4"
      />

      <h3 class="text-xl text-secondary-700 font-semibold mb-2 text-center">
        Hasil dalam 2 x 24 jam
      </h3>

      <p class="text-secondary-700 text-center">
        Dengan menggunakan jasa kami, anda akan mendapatkan hasil foto dalam
        waktu dekat.
      </p>
    </div>

    <div
      class="flex flex-col items-center py-4 px-6 rounded-lg max-w-[30rem] w-full"
    >
      <Icon
        icon="mdi:thumb-up"
        class="text-primary-600 text-5xl sm:text-7xl xl:text-8xl mb-4"
      />

      <h3 class="text-xl text-secondary-700 font-semibold mb-2 text-center">
        Kualitas album yang top
      </h3>

      <p class="text-secondary-700 text-center">
        Kualitas album yang dapat awet hingga bertahun-tahun dengan gambar yang
        jernih dan detail.
      </p>
    </div>

    <div
      class="flex flex-col items-center py-4 px-6 rounded-lg max-w-[30rem] w-full"
    >
      <Icon
        icon="mdi:face-agent"
        class="text-primary-600 text-5xl sm:text-7xl xl:text-8xl mb-4"
      />

      <h3 class="text-xl text-secondary-700 font-semibold mb-2 text-center">
        Admin yang siap sedia
      </h3>

      <p class="text-secondary-700 text-center">
        Anda punya pertanyaan seputar layanan kami? Tenang admin kami siap
        membantu kapan saja (dalam waktu kerja).
      </p>
    </div>
  </div>
</section>
