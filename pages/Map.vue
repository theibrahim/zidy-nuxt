<template>
    <div class="max-w-7xl mx-auto relative">

        <div class=" sm:py-10 ">
            <MapHeroSection />

            <MapStep data-aos="zoom-out" title="1. Create a Business Google Account" para="Before you can create a Google local listing, you’ll need to create a Google Account. Google Accounts are available to everybody and are simple to use. You can either use an existing email to set up your Google Account or you can make a new one. Visit 'accounts.google.com' and select ‘Create an account’ to get started.
                                                                                " :image="lottieFile" />

            <GoogleStep data-aos="zoom-in" title="2. Visit the Google Business Profile Gateway" para="Once you have your new email address, head to google.com/business and click ‘Manage now’ to get started:
                                                                                " :image="lottieFile2" />


        </div>
    </div>
</template>
<script setup>
import file from "../assets/100.jpg";
import file2 from "../assets/2.png";

const lottieFile = ref(file);
const lottieFile2 = ref(file2);
</script>

