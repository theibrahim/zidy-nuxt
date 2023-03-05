<template>
    <div>
        <h1 class=" text-4xl sm:text-5xl font-extrabold mx-auto max-w-6xl !leading-[3rem]">
            <span :class="colorReverse && 'text-primaryblue'" class="text-black px-1">
                {{ title }}
            </span>
            <span :class="!colorReverse && 'text-primaryblue'" class="text-sky-500 px-1">
                {{ titleblue }}
            </span>
        </h1>
        <p class="text-base font-normal mx-auto max-w-6xl mt-6" v-if="isDescription == true">
            {{ description }}
        </p>
        <ul v-if="list && list.length !== 0"
            class="ml-6 sm:ml-12 list text-lg font-semibold text-gray-800 mx-auto max-w-6xl mt-6">
            <li class="py-3" v-for="(list, key) in list" :key="key">

            </li>
        </ul>
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
    isDescription: {
        type: Boolean,
        default: false,
    },
    colorReverse: {
        type: Boolean,
        default: false,
    },
    pos: {
        type: String,
    },
    list: {
        type: Array,
    },
});
</script>

<style>
.list li:before {
    margin-top: 10px;
    content: "\2022";
    color: rgb(73 174 233);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
    content: "\2022";
    color: rgb(73 174 233);
    margin-right: 6px;
}
</style>