<template>
    <div>

        <div class=" sm:py-10">

            <div class="bg-sky-100 pb-40 sm:px-24 px-8  py-10 sm:pt-36 ">
                <div class="max-w-7xl mx-auto relative">
                    <ChatHeroSection />
                </div>
            </div>

            <div class="mx-3 sm:mx-16 -mt-20">
                <div class="max-w-7xl mx-auto relative">
                    <zanimation :file="lottieFile" animationId="one" />
                </div>
            </div>


            <div class="pt-32 ">
                <div class="max-w-7xl mx-auto relative">
                    <ZidyListImage />
                </div>
            </div>


            <div class="sm:mx-20 mx-2">
                <div class="max-w-7xl mx-auto relative">
                    <ChatFasterResponseSection />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import file from "../assets/animation/Zidychat.json";


const lottieFile = ref(file);


</script>

