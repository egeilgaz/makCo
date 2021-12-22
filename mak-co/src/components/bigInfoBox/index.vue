<template>
  <div class="w-256 xl:w-258 px-4 mx-auto">
    <div class="grid grid-cols-3">
      <div class="flex flex-col bg-white px-8 py-4">
        <div class="text-green-400 text-lg pt-3 mb-4 tracking-widest">
          {{ firstContent.firstHeader }}
        </div>
        <div class="text-black text-xl mb-8">
          {{ firstContent.secondHeader }}
        </div>
        <div class="text-xl mb-12 text-gray-400 leading-8">
          {{ firstContent.content }}
        </div>
      </div>
      <div class="w-full mx-auto">
        <img src="../../assets/food-1.jpg" alt="" />
      </div>
      <div class="flex flex-col bg-white px-8 py-4">
        <div class="text-green-400 text-lg pt-3 mb-4 tracking-widest">
          {{ secondContent.firstHeader }}
        </div>
        <div class="text-black text-xl mb-8">
          {{ secondContent.secondHeader }}
        </div>
        <div class="text-xl mb-12 text-gray-400 leading-8">
          {{ secondContent.content }}
        </div>
      </div>
      <div class="w-full mx-auto">
        <img src="../../assets/food-1.jpg" alt="" />
      </div>
      <div class="flex flex-col bg-white px-8 py-4">
        <div class="text-green-400 text-lg pt-3 mb-4 tracking-widest">
          {{ thirdContent.firstHeader }}
        </div>
        <div class="text-black text-xl mb-8">
          {{ thirdContent.secondHeader }}
        </div>
        <div class="text-xl mb-12 text-gray-400 leading-8">
          {{ thirdContent.content }}
        </div>
      </div>
      <div class="w-full mx-auto">
        <img src="../../assets/food-1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstContent: {
        firstHeader: "VEGIES",
        secondHeader: "BEEF EMPANADAS",
        content:
          "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      },
      secondContent: {
        firstHeader: "FOOD",
        secondHeader: "BUTTERMILK CHICKEN JIBARITOS",
        content:
          "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      },
      thirdContent: {
        firstHeader: "FOOD",
        secondHeader: "CHICKEN CHIMICHURRI CROQUETTES",
        content:
          "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
      },
    };
  },
};
</script>

<style></style>
