<template>
  <div class="sm:flex justify-between w-full">
    <div :class="tailwind" class="border border-black text-gray-900 rounded-2xl w-full  p-5  sm:my-0 my-5 sm:m-3">
      <img :src="imageUrl" alt="" class="mx-auto">
      <h1 class="text-center text-gray-900 text-2xl font-bold pt-5">{{ title }}</h1>
      <p class="sm:text-sm text-base text-gray-800 font-light leading-[23px] sm:leading-[22px] pt-10">
        {{ description }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    // title
    title: {
      type: String,
    },
    // description
    description: {
      type: String,
    },
    // imageUrl
    imageUrl: {
      type: String,
    },
    // tailwind
    tailwind: {
      type: String,
    },

  },
}
</script>