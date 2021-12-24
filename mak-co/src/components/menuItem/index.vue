<template>
  <div
    class="px-2 pt-20 pb-5 md:px-20 lg:px-14 flex flex-col bg-primary-100 text-left border-b-2 border-dashed border-gray-200"
  >
    <div class="px-5 md:flex md:px-0">
      <div class="lg:flex">
        <div>
          <img
            class="w-24 h-24 rounded-lg mb-4 lg:mr-8 xl:mr-24 md:w-32 md:h-32"
            src="../../assets/food-1.jpg"
            alt=""
          />
        </div>
        <div class="lg:flex lg:flex-col lg:ml-4">
          <div class="text-2xl mb-2">{{ menuItem.title }}</div>
          <div class="text-xl text-gray-400 mb-3">
            {{ menuItem.content }}
          </div>
        </div>
      </div>
      <div class="text-green-600">{{ menuItem.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
