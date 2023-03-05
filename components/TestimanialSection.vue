<template>
    <div>
        <div class="">
            <div class=" pt-8 ">
                <h1 class="text-2xl sm:py-10 sm:pt-0 pt-10 text-white font-bold m-2">Engaging your leads instantly has
                    never been this
                    easy.
                </h1>
                <carousel :items-to-show="1">
                    <slide v-for="slide in data" :key="slide">
                        <div class="sm:flex my-5 w-full">
                            <div class="sm:w-6/12 ">
                                <img v-if="slide.isimage == true" :src="slide.imageurl" alt="" class="rounded-3xl">
                                <Video v-if="slide.isimage == false" class=" sm:pb-0 pb-10" :video-id="slide.videoId"
                                    :video-url="slide.videoUrl" />
                            </div>

                            <div class="sm:w-6/12 sm:ml-6 sm:px-5 ">
                                <p class="sm:text-[21px] text-[25px] sm:mt-0 mt-4 text-start  text-white   my-2">
                                    “{{ slide.text }}”
                                </p>
                                <hr class="my-3 ">
                                <h1 class="sm:text-lg text-xl font-semibold text-start text-white my-1 sm:my-2">{{ slide.one
                                }}
                                </h1>
                                <h1 class="sm:text-xs text-lg text-start text-white my-1 sm:my-2">{{ slide.two }}</h1>
                                <h1 class="sm:text-xs text-lg text-start text-white my-1 sm:my-2">{{ slide.three }}</h1>
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation />
                        <pagination />
                    </template>
                </carousel>


            </div>
        </div>

    </div>
</template>


<script>

import 'vue3-carousel/dist/carousel.css'
import image from '../assets/1.jpg'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
    components: {
        Carousel, Slide, Pagination, Navigation
    },
    data() {
        return {
            data: [
                {
                    text: `Never again will you lose a sale. Zidy funnels all incoming leads into a powerful dashboard that
                      allows all of your team to view the customer flow in real time, keeping your team on track.`,
                    videoUrl: 'https://www.zidy.com/videos/zidy_vsl.mp4',
                    videoId: 'one',
                    one: 'Rick Darit',
                    two: 'Head of Marketing',
                    three: 'Bartell Brew',
                    imageurl: image,
                    isimage: true
                },
                {
                    text: `Today more than ever a steady flow of online reviews is a must for any business looking to stay
                      relevant
                    `,
                    videoUrl: 'https://www.zidy.com/videos/zidy_testimonial_2.mp4',
                    videoId: 'two',
                    one: 'Domaine Roy',
                    two: 'Head of Marketing',
                    three: 'Winery and tasting room',
                    isimage: false
                },
                {
                    text: `
                      We have been using Zidy for 2 months now and we have <doubled our Google reviews. It's a very simple 
                       product to use and we use it on a daily basis to communicate with our clients  and track our incoming new
                        reviews that we can organize inside of Zidy. Zidy definitely saves us a lot of time and keeps our whole team organized.
                  
                    `,
                    videoUrl: 'https://www.zidy.com/videos/zidy_testimonial_2.mp4',
                    videoId: 'three',
                    one: 'Ryan',
                    two: 'Owner',
                    three: 'Extreme Detailing',
                    isimage: false
                },

            ]
        }
    }
}
</script>                      

<style>
.carousel__slide {
    align-items: start;
}
</style>