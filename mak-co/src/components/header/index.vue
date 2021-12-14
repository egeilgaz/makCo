<template>
  <div class="fixed w-full z-20">
    <div class="bg-white h-28 md:h-32 grid grid-cols-3">
      <div class="flex flex-row-reverse py-5 pl-6"></div>
      <div class="w-20 h-20 md:w-24 md:h-24 mx-auto my-auto">
        <img src="../../assets/makco-logo.jpeg" alt="" />
      </div>
      <div class="flex flex-row-reverse py-8 px-4">
        <div @click="openMenu" class="text-black cursor-pointer">
          <svgIcon
            name="hamburger-menu"
            class="h-14 w-14 mx-2 bg-white rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    openMenu() {
      console.log("kardeşim ub method menuyu açsın.");
    },
  },
};
</script>

<style></style>
