<template>
    <div data-aos="fade-right" class="sm:flex" :class="position == 'left' ? 'flex-row-reverse' : ''">
        <div class="sm:w-7/12 pt-10" :class="position == 'left' ? 'sm:ml-16' : 'sm:mr-16'">
            <h1 class="text-[37px]  sm:text-[36px] sm:px-5 font-extrabold mx-auto max-w-6xl !leading-[3rem]">
                <span :class="colorReverse && 'text-primaryblue'" class="text-black px-1">
                    {{ title }}

                </span>
                <span :class="!colorReverse && 'text-primaryblue'" class="text-sky-500 px-1">
                    {{ titleblue }}
                </span>
            </h1>
            <p class=" px-5  list text-[17px] sm:text-[15px] sm:font-medium text-black sm:text-gray-700 mx-auto mt-6"
                v-if="isDescription == true">
                {{ description }}
            </p>
            <ul v-if="list && list.length !== 0"
                class="ml-6 px-5 sm:ml-12 list text-[17px] sm:text-[15px] sm:font-medium list-disc text-black sm:text-gray-700 mx-auto max-w-6xl mt-6">
                <li class="py-3 " v-for="(list, key) in list" :key="key">
                    {{ list }}
                </li>
            </ul>

        </div>
        <div data-aos="fade-left" class="sm:w-5/12">
            <animation :animation-id="animationId" :file="file" class="pt-6" />

        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    titleblue: {
        type: String,
    },
    description: {
        type: String,
    },
    position: {
        type: String,
    },
    animationId: {
        type: String,
    },
    list: {
        type: Array,
    },
    isDescription: {
        type: Boolean,
        default: false,
    },
    colorReverse: {
        type: Boolean,
        default: false,
    },
    file: {},
});



</script>