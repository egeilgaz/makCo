<template>
    <div class="flex flex-col bg-white px-2">
    <div class="text-3xl pt-24 pb-4">Other Service</div>
    <div class="text-gray-400 text-xl pt-5 mb-24">Free Website Template For Restaurants Made by Colorlib</div>
    <serviceComp v-for="index in 4" :key="index" />
  </div>
</template>

<script>
import serviceComp from "../serviceComp"
export default {
    components: {
        serviceComp
    }

}
</script>

<style>

</style>