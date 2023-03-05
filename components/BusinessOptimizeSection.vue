<template>
    <div class="bg-green-100 mt-10 py-20 sm:flex">

        <div class="sm:pt-20 pt-28 sm:mx-20 mx-6 sm:w-7/12">
            <h1 class="sm:text-4xl text-6xl font-bold ">
                <span class="text-gray-800 px-1 leading-[70px]">Your</span>
                <span class="text-sky-500 px-1">Google </span> <br>
                <span class="text-gray-800 px-1">Business profile!</span>
            </h1>
        </div>
        <div class="sm:w-5/12 flex items-center">
            <animation :animation-id="'gift-animation-1'" :file="file" />
        </div>
    </div>
</template>

<script>
import GiftAnimationlast from "../assets/animation/gift_animation.json";
export default {
    data() {
        return {
            file: GiftAnimationlast
        }
    }
}
</script>