<template>
    <div @click="arrow" class="border m-2 sm:mt-3 sm:m-5 border-black rounded-3xl hover:text-[#34d399]
                                             hover:border-[#34d399] cursor-pointer px-6 py-6 sm:py-4 bg-slate-50 sm:w-96">
        <div class="flex items-center justify-between">
            <h1 class=" font-bold text-md sm:text-lg">{{ title }}</h1>
            <svg v-if="open == false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-6 cursor-pointer h-6">
                <path fill-rule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clip-rule="evenodd" />
            </svg>

            <svg v-if="open == true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class=" cursor-pointer w-6 h-6">
                <path fill-rule="evenodd"
                    d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
                    clip-rule="evenodd" />
            </svg>
        </div>

        <h3 v-if="open == true" class="mt-3 text-md text-gray-600">
            {{ description }}
        </h3>


    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Ibrahim'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolar'
        },
    },
    data() {
        return {
            open: false
        }
    },
    methods:
    {
        arrow() {
            this.open == true ? this.open = false : this.open = true
        },

    }
}
</script>