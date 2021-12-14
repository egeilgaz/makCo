<template>
  <div class="fixed w-full">
    <div class="bg-white h-24 grid grid-cols-2">
      <!-- <div>
              <img src="../../assets/makco-logo.png" alt="">
          </div> -->
      <div class="flex flex-row-reverse py-8 px-4">
        <div class="w-14 h-14"><img src="../../assets/makco-logo.jpeg" alt=""></div>
      </div>
      <div class="flex flex-row-reverse py-8 px-4">
        <div @click="openMenu" class="text-black cursor-pointer">
          <svgIcon
            name="hamburger-menu"
            class="h-7 w-7 mx-2 bg-white rounded-full"
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
