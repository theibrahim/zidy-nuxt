<template>
  <!-- HeroSection -->
  <div class="bg-green-100 pt-28 sm:pb-48 pb-80 sm:h-[700px]">
    <div class="sm:py-10 max-w-7xl mx-auto relative ">
      <HeroSection />
    </div>
  </div>
  <!-- HeroSection -->

  <!-- Video Animation -->
  <div class="sm:px-10 sm:-mt-40 -mt-[300px]">
    <VideoAnimation />
  </div>
  <!-- Video Animation -->


  <!--List Animation -->
  <div class="px-5 sm:px-16 py-8" data-aos="fade-up">
    <div class="max-w-7xl mx-auto relative">
      <ListImage class="" :animationId="'animationone'" :title="'The all-in-one'" :titleblue="'dashboard for your team'"
        :list="[
          'Zidy dash has your message history, call logs, recordings, and voicemails in one view.',
          'Easy to send and receive payments, just a click away.',
          'No more jumping between different apps to close a deal.',
        ]" :file="lottieFile2" position="right" />
    </div>
  </div>

  <div class="px-5 sm:px-16">
    <div class="max-w-7xl mx-auto relative">
      <ListImage class="" :animationId="'animationtwo'" :title="'Start making the most of'" :titleblue="'every lead'"
        :list="[
          'Fully customizable chat greeting screens is a game changer.',
          'Convert 300%+ more leads into real revenue.',
          'Run promotional campaigns to your past clients.',
        ]" :file="lottieFile" position="left" />
    </div>
  </div>
  <!--List Animation -->


  <!-- Mobile App -->
  <div class="px-5 mb-32 sm:px-16 ">
    <div class="max-w-7xl mx-auto relative">
      <MobileApp />
    </div>
  </div>
  <!-- Mobile App -->

  <!-- TestimanialSection -->
  <div class="bg-black sm:py-10 px-5 my-20 sm:px-20">
    <div class="max-w-7xl mx-auto relative">
      <TestimanialSection />
    </div>
  </div>
  <!-- TestimanialSection -->

  <!-- List Image -->
  <div class="px-5 sm:px-16">
    <div class="max-w-7xl mx-auto relative">
      <ListImage class="" :animationId="'animationthree'" :title="'Grow your reviews'" :isDescription="true"
        :titleblue="'at lightning speed'"
        description="Zidy uses text to collect reviews from your happy customers across multiple platforms. Constant review flow will make your business stand out to your customers online. Make reviews easy with automation."
        :file="lottieFile3" position="left" />
    </div>
  </div>

  <div class="px-5 sm:px-16">
    <div class="max-w-7xl mx-auto relative">
      <ListImage class="" :animationId="'animationfour'" :title="'Turn Conversation'" :titleblue="'into customers'" :list="[
        'Create seamless experiences that boost brand loyalty and set you apart from the competition',
        'Talk to your customers at exactly the right time.',
        'Instant communication, happier customers, more deals.',
      ]" :file="lottieFile4" position="right" />
    </div>
  </div>
  <!-- List Image -->

  <!--PersonalizeContactsSection -->
  <div class="bg-sky-100 my-10">
    <div class="max-w-7xl mx-auto relative">
      <PersonalizeContactsSection />
    </div>
  </div>
  <!-- PersonalizeContactsSection -->

  <!--TrackPerformanceHeading -->
  <div class="max-w-7xl mx-auto relative">
    <TrackPerformanceHeading />
  </div>
  <!-- TrackPerformanceHeading -->

  <!-- TrackPerformanceSection -->
  <div class="flex justify-center flex-wrap max-w-7xl mx-auto relative sm:px-8 w-full">
    <TrackPerformanceSection tailwid="text-yellow-500 border-yellow-500 border" title="Review Invites Sent"
      description="Month to date" number="+7" heading="34" total="Total" :image="lottieFile5" />
    <TrackPerformanceSection tailwid="text-sky-500 border-sky-500 border" title="Conversations"
      description="Month to date" number="+15" heading="58" total="Total" :image="lottieFile6" />
    <TrackPerformanceSection tailwid="text-pink-500 border-pink-500 border" title="Contacts" description="Month to date"
      number="+7" heading="95" total="Total" :image="lottieFile7" />
  </div>
  <!-- TrackPerformanceSection -->

  <!-- AllInOneSystemSectione -->
  <div class="pt-5">
    <div class="max-w-7xl mx-auto relative">
      <AllInOneSystemSection />
    </div>
  </div>
  <!-- AllInOneSystemSection -->

  <!-- WorkOnAllDevicesSection -->
  <div class="max-w-7xl mx-auto relative">
    <WorkOnAllDevicesSection />
  </div>
  <!-- WorkOnAllDevicesSection -->

  <!-- DesignToKeepSellingSection -->
  <div class="mt-5 bg-sky-100">
    <div class="max-w-7xl mx-auto relative">
      <DesignToKeepSellingSection />
    </div>
  </div>
  <!-- DesignToKeepSellingSection -->

  <!-- SpeedEaseZidySection -->
  <div class=" mt-28  px-3 sm:px-12">
    <div class="max-w-7xl mx-auto relative">
      <SpeedEaseZidySection />
    </div>
  </div>
  <!-- SpeedEaseZidySection -->

  <!-- PricingSection -->
  <div class="sm:px-16 px-3">
    <div class="max-w-7xl mx-auto relative">
      <PricingSection />
    </div>
  </div>
  <!-- PricingSection -->
</template>
<script setup>
import file from "../assets/animation/most_of_lead_animation.json";
import file2 from "../assets/animation/this_all_in_one_animation.json";
import file3 from "../assets/animation/grow_your_reviews_animation.json";
import file4 from "../assets/animation/start_making_most_of_lead_animation.json";
import file5 from "../assets/performance-1.png";
import file6 from "../assets/performance-2.png";
import file7 from "../assets/performance-3.png";

const lottieFile = ref(file);
const lottieFile2 = ref(file2);
const lottieFile3 = ref(file3);
const lottieFile4 = ref(file4);
const lottieFile5 = ref(file5);
const lottieFile6 = ref(file6);
const lottieFile7 = ref(file7);



</script>
