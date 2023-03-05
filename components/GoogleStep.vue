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