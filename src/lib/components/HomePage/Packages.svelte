<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section class="container py-6 md:py-12" id="packages">
  <h2 class="text-3xl font-bold text-secondary-800 text-center mb-8">
    Apa yang kami tawarkan?
  </h2>

  <div
    class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
  >
    <div
      class="w-full max-w-sm p-4 bg-white border border-secondary-200 rounded-lg shadow sm:p-8 dark:bg-secondary-800 dark:border-secondary-700 flex flex-col"
    >
      <h5
        class="mb-4 text-xl font-medium text-secondary-600 dark:text-secondary-400"
      >
        Paket Basic
      </h5>

      <div class="flex items-baseline text-secondary-800 dark:text-white">
        <span class="text-2xl font-semibold">Rp.</span>
        <span class="text-4xl font-extrabold tracking-tight">200.000</span>
      </div>

      <ul role="list" class="space-y-5 my-7">
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Kualitas foto up to 2K</span
          >
        </li>
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Foto jadi dalam 3 hari</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Mendapatkan album</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Total foto 15 lembar</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Tempat foto di studio</span
          >
        </li>
      </ul>

      <button
        type="button"
        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-auto items-center gap-2"
      >
        Pesan sekarang <Icon icon="mdi:arrow-right" class="text-xl" />
      </button>
    </div>

    <div
      class="w-full max-w-sm p-4 bg-white border border-secondary-200 rounded-lg shadow sm:p-8 dark:bg-secondary-800 dark:border-secondary-700 flex flex-col relative"
    >
      <div class="flex items-center justify-between mb-4">
        <h5
          class="text-xl font-medium text-secondary-600 dark:text-secondary-400"
        >
          Paket Normal
        </h5>

        <span
          class="py-1 px-4 rounded-bl-lg rounded-r-none rounded-tr-lg bg-primary-600 text-secondary-100 text-sm absolute top-0 right-0"
          >Rekomendasi</span
        >
      </div>

      <div class="flex items-baseline text-secondary-800 dark:text-white">
        <span class="text-2xl font-semibold">Rp.</span>
        <span class="text-4xl font-extrabold tracking-tight">450.000</span>
      </div>

      <ul role="list" class="space-y-5 my-7">
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Kualitas foto up to 4K</span
          >
        </li>
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Foto jadi dalam 3 hari</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Mendapatkan album</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Total foto 20 lembar</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Tempat foto di area semarang</span
          >
        </li>
      </ul>
      <button
        type="button"
        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-auto items-center gap-2"
      >
        Pesan sekarang <Icon icon="mdi:arrow-right" class="text-xl" />
      </button>
    </div>

    <div
      class="w-full max-w-sm p-4 bg-white border border-secondary-200 rounded-lg shadow sm:p-8 dark:bg-secondary-800 dark:border-secondary-700 flex flex-col"
    >
      <h5
        class="mb-4 text-xl font-medium text-secondary-600 dark:text-secondary-400"
      >
        Paket Premium
      </h5>

      <div class="flex items-baseline text-secondary-800 dark:text-white">
        <span class="text-2xl font-semibold">Rp.</span>
        <span class="text-4xl font-extrabold tracking-tight">1.000.000</span>
      </div>

      <ul role="list" class="space-y-5 my-7">
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Kualitas foto up to 4K</span
          >
        </li>
        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Foto jadi dalam 1 hari</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Mendapatkan album custom</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Total foto 40 lembar</span
          >
        </li>

        <li class="flex items-center">
          <svg
            class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
            />
          </svg>
          <span
            class="text-base font-normal leading-tight text-secondary-500 dark:text-secondary-400 ms-3"
            >Tempat foto sesuai keinginan customer</span
          >
        </li>
      </ul>
      <button
        type="button"
        class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-200 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center mt-auto items-center gap-2"
      >
        Pesan sekarang <Icon icon="mdi:arrow-right" class="text-xl" />
      </button>
    </div>
  </div>

  <h5 class="text-center text-secondary-600 mt-4">
    Jika jarak lokasi lebih dari 150km dengan studio, biaya perjalanan
    ditangguhkan kepada customer
  </h5>
</section>
