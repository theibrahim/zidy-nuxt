<template>
  <div data-aos="zoom-in" class="border-2 border-teal-500 rounded-3xl">
    <animation :animation-id="animationId" :file="file" class="rounded-3xl overflow-hidden" />
  </div>
</template>

<script setup>
const props = defineProps({

  animationId: {
    type: String,
  },

  file: {},
});
</script>
