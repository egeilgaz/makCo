<template>
  <div class="flex py-5 px-6 mx-auto justify-center bg-primary-100">
    <!-- :class="isActive ? ' : null" -->
    <div
      v-for="header in headers"
      :key="header"
      class="mx-1 cursor-pointer"
      :class="menuStatus ? 'z-0' : 'z-40'"
      @click="$emit('isActive', header.id)"
    >
      <div
        :id="header.id"
        class="p-3 font-semibold uppercase border-b-4 border-solid border-black"
      >
        {{ header.header }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      headers: [
        { id: 1, header: "Makarna" },
        { id: 2, header: "Dolgulu Makarna" },
        { id: 3, header: "Tatlı" },
      ],
    };
  },
  methods: {},
};
</script>

<style></style>
