<template>
     <div class="sm:px-20 px-2 pt-48">
        <h1 v-if="title" class="sm:text-4xl text-5xl text-center text-black font-bold">
            {{ title }}
        </h1>
        <p v-if="para" class="text-[19px] pt-8 text-center text-gray-600">
            {{ para }}
        </p>

        <img v-if="image" :src="image" alt="" class="pt-16 w-full">

    </div>
   
</template>

<script>

export default {
    props: {
        title: {
            type: String,
        },
        image: {
            type: String,
        },
        para: {
            type: String
        }
    },
}
</script>
<!-- <template>
    <div class="sm:px-20 px-2 pt-48">
        <h1 class="sm:text-4xl text-5xl text-center text-black font-bold">
            1. Log into Google Business Profile
        </h1>
        <p class="text-[19px] pt-8 text-center text-gray-600">
            Google Maps links to Google Business Profile. Consider Google Business Profile your go-to portal to add your
            business to Google Maps and/or edit your information. If you don’t have a Google Business Profile, you’ll need
            to set one up in order to get your business listed on Google Maps.
        </p>

        <img src="../assets/maps1.png" alt="" class="pt-16">

    </div>
</template> -->