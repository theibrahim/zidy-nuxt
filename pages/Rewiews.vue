<template>
    <div class="">

        <div class=" sm:py-9 ">


            <!-- ProductHeroSection -->
            <div class="">
                <ProductHeroSection titleBlackPart="Business" titleBluePart="Reviews"
                    description="Gather google business reviews in just a click and stay on top of the search results."
                    buttonText="Start your Free Trial" />
            </div>
            <!-- ProductHeroSection -->

            <!-- ProductTrackReviewsSection -->
            <div class=" sm:px-8 -mt-40 sm:-mt-14">
                <div class="max-w-7xl mx-auto relative">
                    <ProductTrackReviewsSection titleSkyPart="Keep Track of your" titleBlackPart="Reviews"
                        description="Stay on top of customer satisfaction by getting easy access to their feedback." :list="[
                            'Easy to gather reviews with one click',
                            'View all existing reviews in one convenient place',
                            'Track the flow of reviews and ratings',
                            'Access the feedback that matters to grow!'
                        ]" :imageUrl="lottieFile" />
                </div>
            </div>
            <!-- ProductTrackReviewsSection -->

            <!-- RewiewListImage -->
            <div class="sm:px-8 pt-14">
                <div class="max-w-7xl mx-auto relative">
                    <RewiewListImage :position="'right'" TextSky="Track specifics using" TextBlack="Powerful filters"
                        Paragraph="Zoom in on exact reviews and ratings using filtering tools from Zidy!" :list="[
                            'Numerous sorting options',
                            'View all existing reviews in one convenient place',
                            'Track the flow of reviews and ratings',
                            'Access the feedback that matters to grow!'
                        ]" :Image="lottieFile1" />

                    <RewiewListImage :position="'left'" TextSky="Sending invites in" TextBlack="only a few clicks"
                        Paragraph="Our send review invite tool allows to send review invite to single or multiple contacts in just a few clicks."
                        :list="[
                            'Automated review links',
                            'Easy to send using autosend features',
                            'Track the flow of reviews and ratings',
                            'Access the feedback that matters to grow!'
                        ]" :Image="lottieFile2" />
                </div>
            </div>
            <!-- RewiewListImage -->


            <!-- ProductFreeTrialSection -->
            <div class="max-w-7xl mx-auto relative">
                <ProductFreeTrialSection />
            </div>
            <!-- ProductFreeTrialSection -->

            <!-- ProductFaqsSection -->
            <div class="max-w-7xl mx-auto relative">
                <ProductFaqsSection />
            </div>
            <!-- ProductFaqsSection -->

            <!-- ProductDesignToKeepSellingSection -->
            <div class="max-w-7xl mx-auto relative">
                <ProductDesignToKeepSellingSection />
            </div>
            <!-- ProductDesignToKeepSellingSection -->

        </div>
    </div>
</template>


<script setup>
import file from "./../assets/zidychattexts.svg";
import file1 from "./../assets/reviewFilter.png";
import file2 from "./../assets/reviewChat.png";


const lottieFile = ref(file);
const lottieFile1 = ref(file1);
const lottieFile2 = ref(file2);




</script>


