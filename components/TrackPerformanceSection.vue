<template>
    <div class="bg-white sm:w-[270px] w-full">


        <div class="px-3 sm:px-3 py-3">


            <div data-aos="fade-down" class="shadow-lg  rounded-2xl   sm:my-0 my-3 sm:p-5 p-3">
                <div class="flex justify-between">
                    <div>
                        <h1 class="sm:text-sm   text-xl font-semibold text-gray-700">{{ title }}</h1>
                        <h1 class="text-slate-300 sm:text-xs text-md pt-1">{{ description }}</h1>
                    </div>
                    <div :class="tailwid" class="rounded-lg flex justify-center items-center sm:py-2 sm:w-[46px] w-[52px]">
                        <h1 class=" text-xl">{{ number }}</h1>
                    </div>
                </div>


                <div class="flex justify-between mt-4">
                    <div>
                        <h1 class="text-4xl text-gray-800 pt-2 sm:text-3xl font-extrabold">{{ heading }}</h1>
                        <h1 class="pt-3 text-slate-300 text-xs">{{ total }}</h1>
                    </div>

                    <div><img :src="image" alt="" class="w-[130px] m-3 mt-4"></div>

                </div>
            </div>






        </div>

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
        number: {
            type: String,

        },
        heading: {
            type: String,

        },
        total: {
            type: String,

        },
        image: {
            type: String,

        },

        tailwid: {
            type: String
        }
    },
}
</script>