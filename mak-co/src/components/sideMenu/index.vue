<template>
  <div>
    <div class="fixed inset-0 flex z-40">
      <div class="absolute flex top-0 h-screen z-20 right-0 flex-row">
        <div
          class="transition-all duration-700 bg-white overflow-hidden flex items-center justify-center w-72"
          :class="[menuOpen ? 'max-w-lg' : 'max-w-0']"
        >
          <div class="flex flex-col">
            <div
              v-for="menuItem in menuItems"
              :key="menuItem.id"
              class="w-48 text-center font-semibold text-xl py-5"
            >
              <div @click="$emit('scrollMeTo',menuItem.link),$emit('toggle')" class="cursor-pointer">
                {{ menuItem.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="dimmer && menuOpen"
          @click="$emit('toggle')"
          class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
        />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dimmer: true,
      menuItems: [
        { id: 1, name: "Ana Sayfa" ,link:"home"},
        { id: 2, name: "Restaurant",link:"restaurant" },
        { id: 3, name: "Menu",link:"menu" },
        { id: 4, name: "İletişim",link:"contact" },
      ],
    };
  },
};
</script>

<style></style>
