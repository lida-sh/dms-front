<template>
  <div
    class="card border bg-base-100 overflow-hidden w-[18rem] h-[35rem] group px-4 lg:px-6 py-10"
  >
    <div
      class="hover:-translate-y-2 flex flex-col w-full transition-all duration-500"
    >
      <div class="relative aspect-w-40 aspect-h-21">
        <figure class="overflow-hidden">
          <img
            :src="item.icon"
            alt=""
            loading="lazy"
            class="w-20 h-16 transition duration-500 transform-gpu group-hover:opacity-90 group-hover:scale-105"
          />
        </figure>
      </div>
      <div class="card-body items-center text-center mb-4">
        <h2 class="card-title mb-5">{{ item.title }}</h2>
        <div class="min-h-16">
          <p class="text-sm font-normal">{{ item.description }}</p>
        </div>
        <nuxt-link
          class="btn w-full h-10 bg-indigo-600 text-white flex items-center justify-center cursor-pointer hover:bg-indigo-500"
          >{{ item.action }}</nuxt-link
        >
        <!-- <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div> -->
      </div>
      <div class="relative aspect-w-40 aspect-h-21 w-full h-[12.75rem]">
        <figure class="overflow-hidden">
          <img
            :src="item.image"
            alt=""
            loading="lazy"
            class="w-full h-full transition duration-500 transform-gpu group-hover:opacity-90 group-hover:scale-105"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title: string;
  description: string;
  image: string;
  action: string;
  icon: string;
}
interface Props {
  item: Item;
}
const props = defineProps<Props>();
</script>

<style scoped></style>