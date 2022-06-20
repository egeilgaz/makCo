<template>
  <div id="app">
    <div class="bg-primary-100">
      <header-comp
        @scrollMeTo="scrollMeTo"
        @toggle="toggle"
        :menuStatus="menuStatus"
      />

      <div ref="home">
        <welcome-comp />
      </div>
      <head-lines
        :firstLine="firstObject.firstLine"
        :secondLine="firstObject.secondLine"
      />

      <div class="md:grid md:grid-cols-1 lg:hidden">
        <info-box
          class="mb-4"
          v-for="content in contents"
          :content="content"
          :key="content.id"
        />
      </div>

      <div class="hidden lg:flex">
        <big-info-box />
      </div>

      <div ref="restaurant">
        <location-box />
      </div>

      <div class="bg-white pt-4 md:pt-16 text-3xl md:text-4xl font-serif">
        Meet the chefs
      </div>

      <div class="bg-white">
        <div class="md:grid md:grid-cols-2 lg:w-128 lg:mx-auto xl:w-257">
          <chefs v-for="index in 4" :key="index" :menuStatus="menuStatus" />
        </div>
      </div>

      <div ref="menu">
        <head-lines
          :firstLine="secondObject.firstLine"
          :secondLine="secondObject.secondLine"
        />
        <!-- <menu-comp class="md:px-24 xl:mx-48" :menuStatus="menuStatus" /> -->
      </div>

      <services />

      <div ref="contact">
        <googleMap />
      </div>

      <div class="md:mx-auto bg-black">
        <footer-comp />
      </div>
    </div>
  </div>
</template>

<script>
import headerComp from "../src/components/header";
import headLines from "../src/components/headlines";
import infoBox from "../src/components/infoBox";
import locationBox from "../src/components/location";
import chefs from "../src/components/chefs";
// import menuComp from "../src/components/menu";
import services from "../src/components/services";
import googleMap from "../src/components/googleMap";
import footerComp from "../src/components/footer";
import bigInfoBox from "../src/components/bigInfoBox";
import welcomeComp from "../src/components/welcomeComp";

export default {
  name: "App",
  components: {
    headerComp,
    headLines,
    infoBox,
    locationBox,
    chefs,
    // menuComp,
    services,
    googleMap,
    footerComp,
    bigInfoBox,
    welcomeComp,
  },
  data() {
    return {
      menuStatus: false,
      firstObject: {
        firstLine: "Find your best food",
        secondLine: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quidem, animi culpa",
      },
      secondObject: {
        firstLine: "Menu",
        secondLine: "En çok tercih edilen 5 makarnamız",
      },
      contents: [
        {
          id: 1,
          firstHeader: "VEGIES",
          secondHeader: "BEEF EMPANADAS",
          content:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
          photoUrl: "food-2.jpg",
        },
        {
          id: 2,
          firstHeader: "FOOD",
          secondHeader: "BUTTERMILK CHICKEN JIBARITOS",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
          photoUrl: "food-2.jpg",
        },
        {
          id: 3,
          firstHeader: "FOOD",
          secondHeader: "CHICKEN CHIMICHURRI CROQUETTES",
          content:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
          photoUrl: "food-3.jpg",
        },
      ],
    };
  },
  methods: {
    scrollMeTo(e) {
      var element = this.$refs[e];
      var top = element.offsetTop - 155;
      window.scrollTo(0, top);
    },
    toggle() {
      this.menuStatus = !this.menuStatus;
    },
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: Avenir, Helvetica, ui-serif, sans-serif, Arial, Georgia, Cambria,
    "Times New Roman", Times, serif;
}
</style>
