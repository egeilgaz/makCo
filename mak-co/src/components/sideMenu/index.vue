<template>
  <div
    v-if="menuOpen"
    class="h-screen w-80 z-10 bg-white fixed absolute top-0 right-0"
  >
    <div class="my-56">
      <div
        class="mb-6 text-xl"
        v-for="menuItem in menuItems"
        :key="menuItem.id"
      >
        {{ menuItem.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      menuItems: [
        { id: 1, name: "Ana Sayfa" },
        { id: 2, name: "Restaurant" },
        { id: 3, name: "Menu" },
        { id: 4, name: "İletişim" },
      ],
    };
  },
};
</script>

<style></style>
