<template>
    <div class="bg-green-100 sm:flex  py-5">
        <div></div>
        <div class="sm:pt-40  sm:mx-20 mx-6 sm:w-7/12">
            <h1 data-aos="fade-right" class="sm:text-4xl text-5xl leading-[53px] font-bold">
                <span class="text-gray-800 px-1">How to set-up your</span>
                <span class="text-sky-500 px-1">Google </span>
                <span class="text-gray-800 px-1">Business profile</span>
            </h1>
            <p data-aos="fade-left" class="sm:text-[20px] text-[23px] pt-8 text-gray-700">
                Google Business Profile (formerly known as Google My Business) is one of the most effective tools for
                marketers to use when working with local businesses. Without GBP, businesses are unable to feature in the
                Local Pack or Local Finder, which should be a key goal for businesses of this nature. Creating a Google
                Business Profile for your business, or the local businesses that you’re working with, is an essential first
                step towards SEO success. Setting this up properly is critical, so this comprehensive guide will show you
                the best way to set up a Google Business Profile.
            </p>
            <button data-aos="zoom-out"
                class="bg-teal-500 font-semibold text-white text-md mt-8  py-2 px-7 rounded-lg hover:text-black">
                Learn How
            </button>


        </div>
        <div class="sm:w-5/12 flex items-center">
            <animation :animation-id="'gift-animation'" :file="file" />
        </div>
    </div>
</template>

<script>
import GiftAnimation from "../assets/animation/gift_animation.json";
export default {
    data() {
        return {
            file: GiftAnimation
        }
    }
}
</script>