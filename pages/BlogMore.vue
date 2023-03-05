<template>
    <div class="sm:mx-20 mx-2">

        <div class="pt-20 sm:pt-40">
            <div class="max-w-7xl mx-auto relative">
                <Moresearch />
            </div>
        </div>

        <div class="sm:mx-24 mx-1">
            <div class="max-w-7xl mx-auto relative ">
                <Moreheadingfirst :title="list.title" :image="list.image" :img="list.img" :hone="list.hone"
                    :htwo="list.htwo" :hthree="list.hthree" :hfour="list.hfour" :see="list.see" :para="list.para" />
            </div>
        </div>

    </div>
</template>

<script>
import file from "../assets/Resources_for_Realtors(1).webp";
import file2 from "../assets/zidy15.jpg";
export default
    {
        data() {
            return {

                list: {
                    title: "5 Must-Have Resources for Realtors - Powered by Zidy", image: lottieFile, img: lottieFile2,
                    hone: "Franc at Zidy", htwo: "02/17/2023 8:37am", hthree: "9 minute read", hfour: " Tips", see: "more »",
                    para: "For realtors today, being able to access the right resources is imperative. As a real estate professional, your job is not just about selling properties but building relationships with clients, staying ahead of the competition, and delivering exceptional customer service. In today's fast-paced world, where clients expect instant responses and easy access to information, relying solely on traditional methods is not enough. That's where Zidy comes in - a game-changing platform that can help you take your business to the next level."

                }

            }
        }
    }
const lottieFile = ref(file);
const lottieFile2 = ref(file2);
</script>