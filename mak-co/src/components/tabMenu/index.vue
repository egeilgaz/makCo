<template>
  <div class="flex py-5 px-6 bg-primary-100">
    <div
      v-for="header in headers"
      :key="header"
      class="border-b-2 border-solid mx-auto text-red-400 border-red-400"
    >
      <div class="p-3 font-semibold uppercase">{{header.header}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { header: "Makarna" },
        { header: "Dolgulu Makarna" },
        { header: "Tatlı" },
      ],
    };
  },
};
</script>

<style></style>
