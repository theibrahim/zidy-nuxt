<template>
    <div class="">

        <div class=" sm:py-1 ">

            <div class="bg-green-100">
                <div class="max-w-7xl mx-auto relative">
                    <!-- BusinessHeroSection -->
                    <BusinessHeroSection />
                    <!-- BusinessHeroSection -->
                </div>
            </div>

            <div class="max-w-7xl mx-auto relative">
                <GoogleStep data-aos="zoom-out" title="1. Create a Business Google Account" para="Before you can create a Google local listing, you’ll need to create a Google Account. Google Accounts are available to everybody and are simple to use. You can either use an existing email to set up your Google Account or you can make a new one. Visit 'accounts.google.com' and select ‘Create an account’ to get started.
                                                                            " :image="lottieFile" />
                <GoogleStep data-aos="zoom-in" title="2. Visit the Google Business Profile Gateway" para="Once you have your new email address, head to google.com/business and click ‘Manage now’ to get started:
                                                                            " :image="lottieFile2" />
                <GoogleStep data-aos="zoom-in" :title="null" para="If you select ‘Yes’ then you’ll need to enter the areas that the business serves or delivers to. You’ll be able to come back and edit this information later, and you’ll be able to add new locations any time the business expands."
                                                                             :image="lottieFile2" />
                <GoogleStep data-aos="zoom-in" title="Postcard Verification" para="This type of verification is available to all businesses. A postcard will be sent to the business address and will usually arrive within five days."
                                                                             :image="null" />

            </div>

            <div class="max-w-7xl mx-auto relative">
                <TitleDescription data-aos="fade-left" />
            </div>

            <div class="bg-green-100">
                <div class="max-w-7xl mx-auto relative">
                    <BusinessOptimizeSection />
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import file from "../assets/100.jpg";
import file2 from "../assets/2.png";

const lottieFile = ref(file);
const lottieFile2 = ref(file2);
</script>