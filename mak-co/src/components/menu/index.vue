<template>
  <div class="bg-primary-100 px-5 mb-24 xl:justify-center">
    <tab-menu />
    <div class="2xl:mx-auto 2xl:w-128">
      <menu-item v-for="index in 5" :key="index" />
    </div>
  </div>
</template>

<script>
import tabMenu from "../tabMenu";
import menuItem from "../menuItem";
export default {
  components: {
    tabMenu,
    menuItem,
  },
};
</script>

<style></style>
