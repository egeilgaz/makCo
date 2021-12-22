<template>
  <div class="bg-primary-100 py-36 font-serif">
    <div class="px-5">
      <div class="text-black text-2xl md:text-4xl xl:text-5xl mb-8">
        {{ firstLine }}
      </div>
      <div class="text-gray-500 text-md md:text-lg lg:text-xl">
        {{ secondLine }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstLine: {
      type: String,
      default: "",
    },
    secondLine: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
