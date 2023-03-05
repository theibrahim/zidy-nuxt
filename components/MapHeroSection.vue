<template>
    <div class="sm:flex py-5">
        <div></div>
        <div data-aos="fade-left" class="sm:pt-40 pt-28 sm:mx-20 mx-6 sm:w-7/12">
            <h1 class="sm:text-[40px] text-4xl sm:text-6xl font-bold">
                <span class="text-gray-800 px-1 leading-[50px]">How to Add Your Business to</span>
                <span class="text-sky-500 px-1">Google </span>
                <span class="text-gray-800 px-1">maps</span>
            </h1>
            <p class="sm:text-lg sm:leading-[35px] text-[24px] pt-8 text-gray-600">
                If you already have a Google Business Profile, then you’re business should be listed in Google Maps. If it’s
                not showing up, then make sure you’ve verified your Google Business Profile and have entered the correct
                address for your business. If you don’t have a Google Business Profile, then you can set one up for free in
                just a few minutes with basic information. Currently, setting up a Google Business Profile is the only way
                to add your business to Google Maps.
            </p>
            <button class="bg-teal-500 font-semibold text-white text-md mt-8  py-3 px-7 rounded-lg hover:text-black">
                Learn How
            </button>

        </div>
        <div class="sm:w-5/12 flex items-center">
            <animation :animation-id="'gift-animation'" :file="file" />
        </div>
    </div>
</template>


<script>
import GiftAnimation from "../assets/animation/map.json";
export default {
    data() {
        return {
            file: GiftAnimation
        }
    }
}
</script>