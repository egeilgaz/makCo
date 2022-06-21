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
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"3-mantar.png"
        },
        {
          id: 2,
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"noodle.png"
        },
        {
          id: 3,
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"ramen2.png"
        },
        {
          id: 4,
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"rabiatta.png"
        },
      ],
      dessert: [
        {
          id: 1,
          title: "Yemek Adı2",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"cake.png"
        },
        {
          id: 2,
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"dessert.png"
        },
        {
          id: 3,
          title: "Yemek Adı",
          content: "Yemek İçeriği, Yemek İçeriği",
          price: "40tl",
          image:"dessert2.png"
        },
      ]
    };
  },
  computed:{
    menuItems(){
      let menuItems
      if(this.id==1) menuItems = this.pastas
      else menuItems = this.dessert

      return menuItems
    }
    
  },
  mounted() {
    this.isActive(1);
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
