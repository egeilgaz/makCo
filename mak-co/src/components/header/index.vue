<template>
  <div>
    <div class="fixed w-full z-50">
      <div
        class="h-28 md:h-32 grid grid-cols-3 transform"
        :class="
          scrollTop
            ? 'bg-white  translate-y-0 ease-in-out transition duration-500'
            : ' -translate-y-0 duration-500 '
        "
      >
        <div class="flex flex-row-reverse py-5 pl-6"></div>
        <div @click="$emit('scrollUp')" class="w-20 h-20 md:w-24 md:h-24 mx-auto my-auto cursor-pointer">
          <img src="../../assets/makco-logo.jpeg" alt="" />
        </div>
        <div class="flex flex-row-reverse py-8 px-4">
          <div
            @click="$emit('toggle')"
            class="text-black cursor-pointer"
          >
            <svgIcon name="hamburger-menu" class="h-14 w-14 mx-2" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <sideMenu
        :menuOpen="menuStatus"
        @toggle="$emit('toggle')"
        @scrollMeTo="$emit('scrollMeTo', $event)"
      />
    </div>
  </div>
</template>

<script>
import sideMenu from "../sideMenu";
export default {
  components: {
    sideMenu,
  },
  props: {
    menuStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scrollTop: false,
    };
  },
  computed: {},
  methods: {
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
