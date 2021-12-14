<template>
  <div class="flex py-5 px-6 mx-auto justify-center bg-primary-100">
    <div
      v-for="header in headers"
      :key="header"
      class="border-b-4 border-solid mx-1 text-green-600 border-green-600"
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
