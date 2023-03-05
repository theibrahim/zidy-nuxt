<template>
    <div class="overflow-hidden">
        <div class="sm:flex bg-[url('/assets/reviewWelcome.jpg')] bg-cover w-100% pt-20 pb-64">

            <div class="sm:my-24  max-w-7xl mx-auto relative ">
                <div class="sm:w-6/12 sm:mx-10 px-3 ">
                    <div class="   ">
                        <h1 data-aos="fade-right" class=" font-extrabold leading-[68px] text-6xl">
                            <span class=" text-gray-800 my-2">{{ titleBlackPart }}</span> <br>
                            <span class=" text-sky-600 my-2">{{ titleBluePart }}</span>
                        </h1>
                    </div>
                    <div class=" mt-10">
                        <p data-aos="fade-up" class="sm:text-[18px] text-[21px] text-gray-600 sm:text-gray-800 font-sans  ">
                            {{ description }}
                        </p>
                    </div>
                    <button data-aos="fade-down"
                        class="bg-teal-500 font-semibold text-white text-md mt-12  py-3 px-8 rounded-lg hover:text-black">
                        {{ buttonText }}
                    </button>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    props: {
        // titleBlackPart
        titleBlackPart: {
            type: String,
            default: 'Lorem ipsum dolar'
        },
        // titleBluePart
        titleBluePart: {
            type: String,
            default: 'Lorem ipsum dolar'
        },
        // buttonText
        buttonText: {
            type: String,
            default: 'Ibrahim'
        },
        description: {
            type: String,
            default: 'Lorem ipsum dolar'
        },
    },


}
</script>