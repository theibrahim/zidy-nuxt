<template>
    <div class="px-[20px] sm:px-[70px]">

        <div class="sm:pt-40 pt-20">
            <h1 class="sm:text-4xl text-gray-700 text-[34px] font-extrabold ">
                Pricing plans for teams of all sizes
            </h1>
            <p class="sm:text-lg text-[18px] sm:text-start text-center sm:pr-80 font-medium text-gray-400 pt-5 ">
                Choose an affordable plan that's packed with the best features that your
                business needs to succeed.
            </p>
        </div>

        <div class="mt-8">

        </div>

        <div class="sm:flex  ">

            <div class="border border-gray-200 w-full py-5 sm:px-14 px-4 rounded-3xl ">
                <div class="-mt-9"> <button class="bg-teal-500 py-1 px-2 sm:text-xs rounded-3xl text-white">Trial
                        Version</button>
                </div>
                <div class="mt-5">
                    <h1 class="text-3xl  font-bold ">
                        Base
                    </h1>
                    <p class="sm:text-xl text-[15px] pt-3   font-bold ">
                        The essentials to connect with your <br>
                        clients and boost your business.
                    </p>
                </div>
                <div class=" border-gray-500 border-[1px] mt-6"></div>

                <div class="my-5">
                    <h1>
                        <span class="text-2xl sm:text-5xl  font-bold ">
                            $249
                        </span>
                        <span class="text-gray-600 text-xl pt-3 -mx-3  font-sans ">
                            /month
                        </span>
                    </h1>
                </div>


                <ul class="list-disc py-1 sm:py-2" v-for="list in lists">
                    <div class="flex items-center ">
                        <div class="rounded-full h-4 w-4 border-2 border-black mr-4"></div>
                        <h1 class="sm:text-[17px] text-gray-500 text-[15px] ">{{ list }}</h1>
                    </div>



                </ul>

                <div class="mt-8">
                    <button
                        class="bg-teal-500 text-white sm:text-sm w-full h-10 items-end  font-semibold rounded-lg hover:text-black">Try
                        for
                        free
                    </button>

                </div>

            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            lists: [
                'Zidy business phone number',
                'Instant SMS messaging',
                'Collect leads via website Chatbot',
                'Google reviews with 1 click',
                'Simple and powerful CRM',
                'Simple to interpret analytics',
                'Zidy APP for Apple and Android'


            ]
        }
    }
}
</script>