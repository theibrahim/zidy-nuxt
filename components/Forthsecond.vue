<template>
    <ListImage class="" :animationId="'animationfour'" :title="'Turn Conversation'" :titleblue="'into customers'" :list="[
        'Create seamless experiences that boost brand loyalty and set you apart from the competition',
        'Talk to your customers at exactly the right time.',
        'Instant communication, happier customers, more deals.',
    ]" :file="lottieFile4" position="right" />
</template>
<script setup>
import file from "../assets/animation/most_of_lead_animation.json";
import file2 from "../assets/animation/this_all_in_one_animation.json";
import file3 from "../assets/animation/grow_your_reviews_animation.json";
import file4 from "../assets/animation/start_making_most_of_lead_animation.json";

const lottieFile = ref(file);
const lottieFile2 = ref(file2);
const lottieFile3 = ref(file3);
const lottieFile4 = ref(file4);
</script>