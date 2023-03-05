<template>
    <div>
        <div class="sm:flex">
            <div data-aos="fade-right" class="sm:w-7/12  ">
                <img :src="imageUrl" alt="" class="w-full sm:px-8 px-3">
            </div>
            <div data-aos="fade-left" class="sm:w-5/12 sm:mx-5 mx-3 sm:mt-0 mt-6 w-full ">
                <div class="bg-white rounded-2xl py-4 px-4">
                    <h1 class="text-5xl sm:text-[35px] leading-[53px] sm:leading-[42px]">
                        <span class=" text-sky-500 font-bold my-2">{{ titleSkyPart }}</span> <br>
                        <span class=" text-black font-bold my-2">{{ titleBlackPart }}</span>
                    </h1>
                    <p class="sm:text-md text-[19px] pt-10 text-gray-500 sm:text-gray-700 font-sans ">
                        {{ description }}
                    </p>

                    <ul class=" list-disc mx-5  my-5">
                        <li class="font-sans text-[15px] sm:text-[14px] text-gray-700 p-2" v-for="(list, key) in list"
                            :key="key">
                            {{ list }}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    props: {
        // titleSkyPart
        titleSkyPart: {
            type: String,

        },
        TextBlack: {
            type: String,

        },
        description: {
            type: String,

        },
        list: {
            type: Array,
        },
        imageUrl: {
            type: Array,
        },

    },
}
</script>