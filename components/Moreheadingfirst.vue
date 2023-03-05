<template>
    <div class="">
        <div class="pt-8">
            <img src="../assets/Resources_for_Realtors(1).webp" alt="" class="mx-auto py-6">
        </div>
        <div class="my-5">
            <h1 class="sm:text-6xl text-4xl text-gray-800  font-bold ">
                {{ title }}
            </h1>


            <div class=" pt-10 flex items-center  ">
                <img :src="img" alt="" class="rounded-t-full">
                <h1 class="text-gray-400 text-[10px] px-3 hover:underline cursor-pointer">{{ hone }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ htwo }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ hthree }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ hfour }}</h1>
            </div>

            <p class="pt-10 text-md">{{ para }}</p>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,

        },
        para: {
            type: String,

        },
        image: {
            type: String,

        },
        img: {
            type: String,

        },
        hone: {
            type: String,

        },
        htwo: {
            type: String,

        },
        hthree: {
            type: String,

        },
        hfour: {
            type: String,

        },
        see: {
            type: String,

        },

    },
}
</script>