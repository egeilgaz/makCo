<template>
  <div id="app">
    <div class="bg-primary-100">
      <header-comp />
      <head-lines
        :firstLine="firstObject.firstLine"
        :secondLine="firstObject.secondLine"
      />
      <div class="md:grid md:grid-cols-1 ml-10">
        <info-box
          class="mb-4"
          v-for="content in contents"
          :content="content"
          :key="content"
        />
      </div>
      <!-- buraya resim gelcek 3 tane -->

      <location-box />
      <div class="bg-white pt-4 text-3xl font-serif">Meet the chefs</div>
      <chefs v-for="index in 4" :key="index" />
      <head-lines
        :firstLine="secondObject.firstLine"
        :secondLine="secondObject.secondLine"
      />
      <menu-comp />
      <services />
      <googleMap />
      <footer-comp />
    </div>
  </div>
</template>

<script>
import headerComp from "../src/components/header";
import headLines from "../src/components/headlines";
import infoBox from "../src/components/infoBox";
import locationBox from "../src/components/location";
import chefs from "../src/components/chefs";
import menuComp from "../src/components/menu";
import services from "../src/components/services";
import googleMap from "../src/components/googleMap";
import footerComp from "../src/components/footer";

export default {
  name: "App",
  components: {
    headerComp,
    headLines,
    infoBox,
    locationBox,
    chefs,
    menuComp,
    services,
    googleMap,
    footerComp,
  },
  data() {
    return {
      firstObject: {
        firstLine: "Find your best food",
        secondLine: "Free Website Template For Restaurants Made by Colorlib",
      },
      secondObject: {
        firstLine: "Menu",
        secondLine: "Free Website Template For Restaurants Made by Colorlib",
      },
      contents: [
        {
          firstHeader: "VEGIES",
          secondHeader: "BEEF EMPANADAS",
          content:
            "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        },
        {
          firstHeader: "FOOD",
          secondHeader: "BUTTERMILK CHICKEN JIBARITOS",
          content:
            "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
        },
        {
          firstHeader: "FOOD",
          secondHeader: "CHICKEN CHIMICHURRI CROQUETTES",
          content:
            "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
        },
      ],
    };
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
