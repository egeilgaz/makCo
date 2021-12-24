<template>
  <div class="bg-primary-100 px-5 mb-24 xl:justify-center">
    <tab-menu @isActive="isActive" :menuStatus="menuStatus" />
    <div class="2xl:mx-auto 2xl:w-128">
      <menu-item v-for="menuItem in menuItems" :key="menuItem.id" :menuItem="menuItem" />
    </div>
  </div>
</template>

<script>
import tabMenu from "../tabMenu";
import menuItem from "../menuItem";
export default {
  props: {
    menuStatus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    tabMenu,
    menuItem,
  },
  data() {
    return {
      isActiveStatus: false,
      id: null,
      pastas: [
        {
          id: 1,
          title: "burası yemeğin adı",
          content: "burası yemeğin içeriği",
          price: "40tl",
        },
      ],
      menuItems: [],
    };
  },
  mounted() {
    this.isActive(1);
    if(this.id == 1){
      this.menuItems = this.pastas

    }
  },
  methods: {
    isActive(id) {
      if (this.isActiveStatus) {
        var element = document.getElementById(this.id);
        element.classList.remove("border-green-600");
        element.classList.remove("text-green-600");

        element.classList.add("border-black");
        this.id = id;
      }
      var element2 = document.getElementById(id);
      element2.classList.remove("border-black");

      element2.classList.add("text-green-600");
      element2.classList.add("border-green-600");
      this.id = id;
      this.isActiveStatus = true;
    },
  },
};
</script>

<style></style>
