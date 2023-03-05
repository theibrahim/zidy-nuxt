<script setup lang="ts">
const props =
    defineProps({
        videoUrl: { type: String },
        videoId: { type: String },
        videoType: { type: String },
        poster: { type: String },
        autoplay: { type: Boolean }
    })


const headervideo = ref(null);

const isPlaying = ref(true);
const isMuted = ref(true);

const onPlay = () => {
    let videoElement: any = document.getElementById(props.videoId);
    videoElement[isPlaying.value ? "pause" : "play"]();
    isPlaying.value = !isPlaying.value;
};

const onMute = () => {
    let videoElement: any = document.getElementById(props.videoId);
    console.log(videoElement);
    videoElement.muted = !isMuted.value;
    isMuted.value = !isMuted.value;
};

const onReplay = () => {
    let videoElement: any = document.getElementById(props.videoId);
    videoElement.pause();
    videoElement.currentTime = "0";
    videoElement.play();
};

onMounted(() => {
    let videoElement: any = document.getElementById(props.videoId);
    requestAnimationFrame(() => {
        if (props.autoplay) {
            videoElement.play();
        }
    });
});
</script>

<template>
    <div class="container w-full mx-auto">
        <div class="relative  m-6">
            <div class="w-auto m-auto border-2 border-primary rounded-3xl bg-primary overflow-hidden">
                <video ref="headervideo" autoplay :id="props.videoId" playsinline :autoplay="autoplay" :poster="poster" loop
                    muted class="w-full">
                    <source :src="videoUrl" :type="videoType" />
                </video>
            </div>
            <div class="absolute right-2 bottom-2 flex justify-end">
                <div @click="onMute" class="bg-primary cursor-pointer hover:bg-white rounded-full p-3 mx-1">
                    <img v-if="isMuted" class="w-6" src="https://www.zidy.com/images/volume-mute.svg" />
                    <img v-else class="w-6" src="https://www.zidy.com/images/volume-up.svg" />
                </div>
                <div @click="onPlay" class="bg-primary cursor-pointer hover:bg-white rounded-full p-3 mx-1">
                    <img v-if="!isPlaying" class="w-6" src="https://www.zidy.com/images/play.svg" />
                    <img v-else class="w-6" src="https://www.zidy.com/images/pause.svg" />
                </div>
                <div @click="onReplay" class="bg-primary cursor-pointer hover:bg-white rounded-full p-3 mx-1">
                    <img class="w-6" src="https://www.zidy.com/images/replay.svg" />
                </div>
            </div>
        </div>
    </div>
</template>