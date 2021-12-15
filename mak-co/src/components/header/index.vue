<template>
  <div class="fixed w-full z-20">
    <div
      class="h-28 md:h-32 grid grid-cols-3"
      :class="scrollTop ? 'bg-white' : ''"
    >
      <div class="flex flex-row-reverse py-5 pl-6"></div>
      <div class="w-20 h-20 md:w-24 md:h-24 mx-auto my-auto">
        <img src="../../assets/makco-logo.jpeg" alt="" />
      </div>
      <div class="flex flex-row-reverse py-8 px-4">
        <div @click="openMenu" class="text-black cursor-pointer">
          <svgIcon name="hamburger-menu" class="h-14 w-14 mx-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   scrollTop: {
  //     type: Boolean,
  //     default: true,
  //   },
  // },
  data() {
    return {
      scrollTop: false,
    };
  },
  computed: {},
  methods: {
    openMenu() {
      
    },
    updateScroll() {
      if (window.scrollY > 200) {
        this.scrollTop = true;
      } else {
        this.scrollTop = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  destroy() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style></style>
