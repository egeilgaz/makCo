<template>
  <div
    class="bg-white font-serif flex flex-col text-left lg:mt-16 py-24 px-8 md:px-24"
  >
    <div class="lg:w-102 lg:mx-auto lg:mt-3">
      <div class="text-3xl mb-8 lg:text-6xl">
        <!-- {{ content.firstHeader }} -->
        The Restaurant
      </div>
      <div class="text-black text-md mb-8 leading-8 text-gray-500">
        <!-- {{ content.secondHeader }} -->
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </div>
      <div class="text-md mb-12 text-gray-500 leading-8">
        <!-- {{ content.content }} -->
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth.
      </div>
      <div>
        <!-- <img src="../../assets/makco-logo.png" alt="" /> -->
        <!-- <div class="carousel px-16 mx-auto relative w-full">
          <div class="carousel-item">
            <div class="red"></div>
          </div>
          <div class="carousel-item">
            <div class="green"></div>
          </div>
          <div class="carousel-item">
            <div class="yellow"></div>
          </div>
          <div class="carousel-item">
            <div class="violet"></div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    //this.sliderFonc();
  },
  methods: {
    sliderFonc() {
      var slides = document.getElementsByClassName("carousel-item"),
        addActive = function (slide) {
          slide.classList.add("active");
        },
        removeActive = function (slide) {
          slide.classList.remove("active");
        };
      addActive(slides[0]);

      setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
          if (i + 1 == slides.length) {
            addActive(slides[0]);
            slides[0].style.zIndex = 100;
            setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
            break;
          }
          if (slides[i].classList.contains("active")) {
            slides[i].removeAttribute("style");
            setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
            addActive(slides[i + 1]);
            break;
          }
        }
      }, 4000);
    },
  },
};
</script>

<style scoped>
.carousel {
  height: 270px;
  overflow: hidden;
}

.carousel-item {
  width: 100%;
  height: 270px;
  border: 1px solid #2e2e2e;
  top: 0;
  left: 100%;
}
.active {
  left: 0;
  transition: all 0.3s ease-out;
}

div {
  height: 100%;
}
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.violet {
  background-color: violet;
}
</style>
