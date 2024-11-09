<script lang="ts">
  import { base } from "$app/paths";
  import _ from "lodash";

  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
    function (val) {
      return {
        url: base + "/img/" + val + ".jpg",
        title: "image no " + val,
      };
    }
  );

  const allImages = _.chunk(images, 4);
</script>

<section class="container py-6 md:py-12" id="gallery">
  <h2 class="text-3xl font-bold text-secondary-800 text-center mb-8">
    Galeri kami
  </h2>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {#each allImages as blockImages}
      <div class="flex flex-col gap-4">
        {#each blockImages as image}
          <figure class="last:flex-1 flex relative rounded-lg overflow-hidden">
            <img
              src={image.url}
              alt="random"
              class="flex-1 object-cover"
              loading="lazy"
            />

            <caption
              class="text-center hidden sm:block absolute bottom-0 left-0 bg-secondary-900/60 text-secondary-100 py-1 px-3 w-full"
            >
              {image.title}
            </caption>
          </figure>
        {/each}
      </div>
    {/each}
  </div>
</section>
