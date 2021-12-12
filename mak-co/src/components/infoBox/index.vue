<template>
  <div class="font-serif flex flex-col py-10 px-8">
    <div class="text-red-300 text-lg tracking-widest mb-2">
      {{ content.firstHeader }}
    </div>
    <div class="text-black text-2xl mb-8">{{ content.secondHeader }}</div>
    <div class="text-xl mb-12">
      {{ content.content }}
    </div>
    <div class="cursor-pointer">Learn More</div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {}
    }
  },
};
</script>

<style></style>
