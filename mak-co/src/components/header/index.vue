<template>
  <div>
    <div class="bg-blue-400 h-24 grid grid-cols-2">
      <!-- <div>
              <img src="../../assets/makco-logo.png" alt="">
          </div> -->
      <div class="flex flex-row-reverse py-8 px-4">
        <div>logo</div>
      </div>
      <div class="flex flex-row-reverse py-8 px-4">
        <div @click="openMenu" class="text-black cursor-pointer">nerde bu</div>
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
