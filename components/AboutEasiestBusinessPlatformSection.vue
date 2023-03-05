<template>
    <div class="border w-full m-2 sm:my-0 my-5 sm:w-72 border-black rounded-3xl px-3 py-3">
        <img :src="Image" alt="" class="mx-auto">
        <h1 class="sm:text-xl text-2xl text-gray-800 text-center pt-6 font-bold">{{ Title }}</h1>
        <p class="text-center pt-3 text-gray-600 sm:text-sm text-lg px-3">
            {{ Para }}
        </p>
    </div>
</template>


<script>
export default {
    props: {
        Title: {
            type: String,
        },

        Para: {
            type: String,
        },

        Image: {
            type: String,
        },
    },
}
</script>