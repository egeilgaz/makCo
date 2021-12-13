<template>
  <div class="flex justify-center">
    <div class="bg-white font-serif flex flex-col ml-3 py-10 px-8">
      <div class="text-red-300 text-lg tracking-widest mb-2">
        {{ content.firstHeader }}
      </div>
      <div class="text-black text-xl mb-8">{{ content.secondHeader }}</div>
      <div class="text-xl mb-12">
        {{ content.content }}
      </div>
      <!-- <div class="cursor-pointer">Learn More</div> -->
    </div>
    <div class="hidden md:flex">
      <div class="md:pt-14 md:w-2/3 md:px-16 md:bg-white lg:hidden">
        <img class="rounded-lg" src="../../assets/food-1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
