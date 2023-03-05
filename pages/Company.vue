<template>
    <div class="max-w-7xl mx-auto relative">

        <div class=" sm:py-10 ">

            <!-- AboutHeroSection -->
            <div class="sm:mx-20 mx-6 mt-20 sm:mt-40">
                <div class="max-w-7xl mx-auto relative">
                    <AboutHeroSection />
                </div>
            </div>
            <!-- AboutHeroSection -->

            <!-- AboutCoreValuesSections -->
            <div class="sm:my-20 sm:mt-40 mt-20 sm:mx-14 mx-3 my-6">

                <div data-aos="zoom-in-down" class="sm:my-16 flex justify-center items-center">
                    <img src="../assets/corevalues.png" alt="" class="w-24">
                    <h1 class="sm:text-5xl text-3xl font-extrabold">
                        <span class="text-black px-3">Core</span>
                        <span class="text-sky-500 ">values</span>
                    </h1>
                </div>
                <div class="sm:flex max-w-7xl mx-auto relative ">
                    <AboutCoreValuesSections data-aos="flip-right" tailwind="bg-purple-400" title="Product First"
                        description="Always be improving.Every aspect of every detail, if we can make it better we doOur team is passionate about building high impact high value products.We have learned that we thrive by pushing ourselves to execute on the cutting edge of whats technically possible."
                        :imageUrl="lottieFile" />
                    <AboutCoreValuesSections data-aos="flip-up" tailwind="bg-green-200" title="Customer focused"
                        description="Ordinary efforts, yield ordinary results and there is no product without customers.We set to design, build and deliver the absolute best experience our team is capable of because our customers expect excellence from us.Cutting corners is not in our dictionary of office slogans and every feature is designed.with ease of use in mind.We have learned from day, 1 that we win when our customers win."
                        :imageUrl="lottieFile2" />
                    <AboutCoreValuesSections data-aos="fade-left" tailwind="bg-amber-100" title="Inclusivity"
                        description="Simply put we believe that the magical mix of team members consists of people from all corners of the world, and,with a varied mix of backgrounds.We like different, we like unique, we celebrate and prioritize people who can bring something.new to the table and show us a different way of approaching technical puzzles.Our culture is a melting pot of ideas, nothing is out of reach and no idea is too big."
                        :imageUrl="lottieFile3" />
                </div>

                <div data-aos="zoom-out"
                    class=" mx-3 my-24 flex justify-center border border-black rounded-2xl p-5  text-gray-600">
                    <p class="text-lg text-center">
                        So how did we get here? When Zidy was first released as a beta trial to a select group of
                        preregistered clients,
                        it was an instant hit—and we’ve been scaling rapidly ever since. What started as an invite-only
                        communication
                        and
                        client management tool has quickly grown into a full-on team collaborative growth platform that
                        scales with
                        businesses ranging in size from 1 to 500 employees.
                    </p>
                </div>
            </div>
            <!-- AboutCoreValuesSections -->


            <!-- AboutUserControlFreedomSection -->
            <div class="bg-gray-900 p-2 sm:p-16">
                <div class="max-w-7xl mx-auto relative">
                    <AboutUserControlFreedomSection />
                </div>
            </div>
            <!-- AboutUserControlFreedomSection -->


            <!-- AboutEasiestBusinessPlatformSection -->
            <div class="sm:mx-16 mt-28 mx-4">
                <div>
                    <h1 data-aos="fade-left"
                        class="sm:text-[50px] text-4xl font-bold text-center mt-36 sm:leading-[60px] px-2 sm:px-20">
                        <span class="text-gray-800 px-3">The Easiest Business Platform To</span>
                        <span class="text-sky-500 ">Get Started On</span>
                    </h1>
                    <p data-aos="fade-right"
                        class="sm:text-lg text-[22px] text-gray-400 sm:text-gray-500 sm:px-40 px-3 text-center pt-10">
                        Zidy was recently voted the “easiest business platform to get started on” by users. And with over 50
                        new
                        feature sets in the pipeline to be released in 2022, many of which will define a new category, we’re
                        ready
                        to transform the business software industry moving forward. It’s been one heck of a ride, and we’d
                        love to
                        invite you along. Let’s do this.
                    </p>
                </div>


                <div class="max-w-7xl mx-auto relative sm:flex sm:justify-center ">
                    <AboutEasiestBusinessPlatformSection data-aos="flip-up" Title="Speed and Ease of use"
                        Para="Zidy powers thousands of companies to make customer experience seamless"
                        :Image="lottieFile4" />
                    <AboutEasiestBusinessPlatformSection data-aos="flip-right" Title="Product Impact"
                        Para="9 out if 10 business owners say Zidy has transformed the way they communicate and manage clients"
                        :Image="lottieFile5" />
                    <AboutEasiestBusinessPlatformSection data-aos="flip-down" Title="Customer Trust"
                        Para="Voted “The easiest business platform to get started on”" :Image="lottieFile6" />
                </div>
            </div>
            <!-- AboutEasiestBusinessPlatformSection -->

            <!-- AboutTeamSection -->
            <div class="max-w-7xl mx-auto relative">
                <AboutTeamSection />
            </div>
            <!-- AboutTeamSection -->





        </div>
    </div>
</template>



<script setup>
import file from "../assets/product-first2.svg";
import file2 from "../assets/customerfocused2.svg";
import file3 from "../assets/inclusivity.svg";
import file4 from "../assets/rocket.svg";
import file5 from "../assets/chart.svg";
import file6 from "../assets/personal-info.svg";

const lottieFile = ref(file);
const lottieFile2 = ref(file2);
const lottieFile3 = ref(file3);

const lottieFile4 = ref(file4);
const lottieFile5 = ref(file5);
const lottieFile6 = ref(file6);
</script>