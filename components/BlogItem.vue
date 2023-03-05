<template>
    <div class="">
        <h1 class="hover:text-red-500 text-5xl sm:text-4xl font-bold ">
            {{ title }}
        </h1>
    </div>

    <div class="sm:flex ">
        <div class="sm:w-6/12 my-14">
            <div class="flex items-center">
                <img :src="imageLogo" alt="" class="rounded-full w-7">
                <h1 class="text-gray-400 text-[10px] px-3">{{ company }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ publishedDate }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ publishedTimeAgo }}</h1>
                <h1 class="text-gray-400 text-[10px] px-2">{{ tag }}</h1>
            </div>
            <div>
                <p class="pt-3 sm:text-base text-xl">
                    <span class="">
                        {{ description }}
                    </span>
                    <NuxtLink to="/BlogMore">
                        <span class=" hover:underline cursor-pointer px-1">more »</span>
                    </NuxtLink>

                </p>

            </div>
        </div>

        <div class="sm:w-6/12 mx-1 my-6"><img :src="imageUrl" alt=""></div>
    </div>
</template>

<script>

export default {
    props: {
        title: {
            type: String,

        },
        description: {
            type: String,

        },
        imageUrl: {
            type: String,

        },
        // logoUrl
        imageLogo: {
            type: String,

        },
        // company
        company: {
            type: String,

        },
        // publishedDate
        publishedDate: {
            type: String,

        },
        // publishedTimeAgo
        publishedTimeAgo: {
            type: String,

        },
        // tag
        tag: {
            type: String,

        },


    },
}
</script>