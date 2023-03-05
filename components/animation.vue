<template>
    <div class="column wow fadeInRight" data-wow-duration="0.5s" data-wow-delay="0.5s" style="
                                                              visibility: visible;
                                                              animation-duration: 0.5s;
                                                              animation-delay: 0.5s;
                                                              animation-name: fadeInRight;
                                                            ">
        <div class="card_wrapper">
            <div :id="animationId"></div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({

    animationId: {
        type: String,
    },

    file: {},
});


onMounted(() => {
    setTimeout(() => {
        bodymovin.loadAnimation({
            container: document.getElementById(props.animationId),
            animationData: props.file,
            renderer: "svg",
            loop: true,
            autoplay: true,
            name: "Demo Animation",
        });
    });
});
</script>