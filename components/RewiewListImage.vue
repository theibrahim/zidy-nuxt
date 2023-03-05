<template>
    <div>
        <div class="sm:flex sm:my-6 my-20" :class="position == 'left' ? 'flex-row-reverse' : ''">
            <div data-aos="fade-down" class="sm:w-6/12 sm:mx-8 mx-3" :class="position == 'left' ? 'sm:ml-16' : 'sm:mr-16'">
                <div class="bg-white rounded-2xl p-3 ">
                    <h1 class="text-[37px] sm:text-[33px]  font-extrabold leading-[53px] sm:leading-[42px]">
                        <span class=" text-sky-500  px-1 my-2">{{ TextSky }}</span>
                        <span class=" text-black px-1 my-2">{{ TextBlack }}</span>
                    </h1>
                    <p class="sm:text-md text-[19px] pt-10  text-gray-800 font-sans ">
                        {{ Paragraph }}
                    </p>

                    <ul class=" list-disc mx-5  my-5">
                        <li class="font-sans text-[15px] sm:text-[14px] text-gray-700 p-2" v-for="(list, key) in list"
                            :key="key">
                            {{ list }}
                        </li>

                    </ul>
                </div>
            </div>

            <div data-aos="fade-up" class="sm:w-6/12 sm:mx-8 mx-3">
                <img :src="Image" alt="" class="w-full">
            </div>
        </div>


    </div>
</template>


<script>

export default {
    props: {
        TextSky: {
            type: String,

        },
        position: {
        type: String,
    },
        TextBlack: {
            type: String,

        },
        Paragraph: {
            type: String,

        },
        Li: {
            type: String,

        },
        list: {
            type: Array,
        },
        Image: {
            type: Array,
        },

    },
}
</script>