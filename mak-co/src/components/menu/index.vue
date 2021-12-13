<template>
  <div class="bg-primary-100 px-5 mb-24">
      <tab-menu />
      <menu-item v-for="index in 5" :key="index" />

  </div>
</template>

<script>
import tabMenu from "../tabMenu";
import menuItem from "../menuItem";
export default {
  components: {
    tabMenu,
    menuItem
  },
};
</script>

<style></style>
