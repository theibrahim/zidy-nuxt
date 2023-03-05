<template>
    <div class="">
        <h1 data-aos="fade-up" class="sm:text-[25px] text-3xl font-bold mt-40 text-center max-w-6xl !leading-[3rem]">
            <span class="text-gray-800 px-1">Faster response times and happier</span>
            <span class="text-sky-500 px-1">customers are just the beginning </span>
        </h1>

        <p data-aos="fade-left" class="sm:mt-4 mt-7 px-3 text-lg text-center text-gray-700">Zidy Chat allows you to engage
            new leads and
            keep
            existing
            conversations going.</p>
    </div>
    <div data-aos="zoom-out" class="sm:flex sm:justify-center mt-20 grid grid-cols-3 gap-3">
        <div v-for="(list, number) in lists" :key="number">
            <div class="border border-black rounded-3xl h-64 sm:w-72 py-6 px-5 my-10">
                <img :src="list.Image" alt="" class="w-32 mx-auto">
                <h1 class="text-gray-800 text-2xl sm:text-xl font-bold text-center">
                    {{ list.Paragraph }}
                </h1>
            </div>
        </div>
    </div>
</template>  

<script>
import file1 from "../assets/zidy-chat1.svg";
import file2 from "../assets/zidy-chat2.svg";
import file3 from "../assets/zidy-chat3.svg";
export default {
    data() {
        return {
            lists: [
                {
                    Paragraph: 'Supercharge your website conversion rate',
                    Image: file1
                },
                {
                    Paragraph: 'More customer actions equal unmatched revenue growth',
                    Image: file2
                },
                {
                    Paragraph: 'Create a Smart lead funnel with custom lead tags and labels',
                    Image: file3
                }
            ]
        }
    }
}
</script>