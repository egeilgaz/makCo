<template>
  <div class="flex flex-col bg-white px-2 mb-8">
    <div class="text-3xl lg:text-4xl pt-24 pb-4">Other Service</div>
    <div class="text-gray-400 text-xl pt-5 mb-24">
      Free Website Template For Restaurants Made by Colorlib
    </div>
    <div
      class="md:grid md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:w-256 lg:mx-auto xl:w-257"
    >
      <serviceComp
        v-for="content in contents"
        :key="content.id"
        :content="content"
      />
    </div>
  </div>
</template>

<script>
import serviceComp from "../serviceComp";
export default {
  components: {
    serviceComp,
  },
  data() {
    return {
      contents: [
        {
          id: 1,
          icon: "vegetables",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 2,
          icon: "pasta",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 3,
          icon: "noodle",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 4,
          icon: "dessert",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 5,
          icon: "icon1",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
        {
          id: 6,
          icon: "salad",
          header: "Burası başlık",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        },
      ],
    };
  },
};
</script>

<style></style>
