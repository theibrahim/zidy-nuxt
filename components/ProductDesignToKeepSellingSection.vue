<template>
    <div class="my-32">
        <h1 class="text-3xl sm:text-[38px] text-center text-gray-700 font-bold my-2">Designed to Keep You Selling</h1>
        <p class="text-2xl sm:text-lg text-gray-700 p-2 pt-10 text-center  px-5 sm:px-36">Zidy is accessible across
            multiple
            device
            types. Whether you are using a mobile device, tablet, or desktop computer we have you covered.</p>
    </div>


    <div data-aos="fade-up" class="sm:flex  justify-center sm:mx-5 mx-3 ">

        <div v-for="(list, number) in lists"
            class="border   sm:w-72 sm:m-5 sm:h-64  border-black my-5 rounded-3xl px-6 py-4">
            <img :src="list.ImageOne" alt="" class="mx-auto">
            <h1 class="text-xl text-gray-800 text-center py-4 font-bold">{{ list.Title }}</h1>
            <p class="text-center text-gray-500 font-normal text-sm">
                {{ list.Paragraph }}
            </p>
        </div>
    </div>
</template>

<script>
import One from '../assets/rocket.svg'
import Two from '../assets/chart.svg'
import Three from '../assets/personal-info.svg'
export default {
    data() {
        return {
            lists: [
                {
                    Title: ' Speed and Ease of use',
                    Paragraph: 'Zidy powers thousands of companies to make customer experience seamless',
                    ImageOne: One
                },
                {
                    Title: 'Product Impact',
                    Paragraph: '9 out if 10 business owners say Zidy has transformed the way they communicate and manage clients',
                    ImageOne: Two
                },
                {
                    Title: 'Customer Trust',
                    Paragraph: 'Voted “The easiest business platform to get started on”',
                    ImageOne: Three
                }
            ]
        }
    }
}
</script>