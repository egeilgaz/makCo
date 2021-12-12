<template>
  <div id="app">
    <header-comp />
    <head-lines
      :firstLine="firstObject.firstLine"
      :secondLine="firstObject.secondLine"
    />
    <info-box v-for="content in contents" :content="content" :key="content" />
  </div>
</template>

<script>
import headerComp from "../src/components/header";
import headLines from "../src/components/headlines";
import infoBox from "../src/components/infoBox";

export default {
  name: "App",
  components: {
    headerComp,
    headLines,
    infoBox,
  },
  data() {
    return {
      firstObject: {
        firstLine: "Find your best food",
        secondLine: "Free Website Template For Restaurants Made by Colorlib",
      },
      contents:[
        {firstHeader:"Başlık Bir",secondHeader:"ikinci başlık 1",content:"burası da contenttttt"},
        {firstHeader:"Başlık iki",secondHeader:"ikinci başlık 2",content:"burası da contenttttt"},
        {firstHeader:"Başlık üç",secondHeader:"ikinci başlık 3",content:"burası da contenttttt"}
      ]
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
