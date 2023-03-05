<template>
    <div class="">
        <div class=" sm:py-10 px-4 sm:px-32">

            <div class="py-32">
                <div class="max-w-7xl mx-auto relative">

                    <Search />
                </div>
            </div>

            <div class="">
                <div data-aos="flip-left" class="max-w-7xl mx-auto relative" v-for="(list, key) in data" :key="key">
                    <BlogItem :title="list.title" :imageUrl="list.imageUrl" :imageLogo="list.imageLogo"
                        :company="list.company" :publishedDate="list.publishedDate"
                        :publishedTimeAgo="list.publishedTimeAgo" :tag="list.tag" :description="list.description" />
                </div>
            </div>


        </div>
    </div>
</template>


<script >
import file from "../assets/Resources_for_Realtors(1).webp";
import file2 from "../assets/zidy15.jpg";

export default {
    data() {
        return {
            data: [
                {
                    title: "5 Must-Have Resources for Realtors - Powered by Zidy", imageUrl: lottieFile, imageLogo: lottieFile2,
                    company: "Franc at Zidy", publishedDate: "02/17/2023 8:37am", publishedTimeAgo: "9 minute read", tag: " Tips", see: "more »",
                    description: "For realtors today, being able to access the right resources is imperative. As a real estate professional, your job is not just about selling properties..."

                }
            ]
        }
    }
}
const lottieFile = ref(file);
const lottieFile2 = ref(file2);
</script>