<template>
  <div class="flex flex-col px-3 py-4">
    <div class="text-2xl my-4 mx-auto">
      <svgIcon :name="content.icon" class="h-24 w-24" />
    </div>
    <div class="text-2xl mb-3">{{ content.header }}</div>
    <div class="leading-10 text-gray-400 text-xl mb-8">
      {{ content.content }}
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
