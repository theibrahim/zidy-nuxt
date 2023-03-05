<template>
    <div class="max-w-7xl mx-auto relative">
        <Menu />
    </div>

    <NuxtPage />

    <div class="bg-[rgb(35,54,56)]">
        <div class="max-w-7xl mx-auto relative">
            <Footer />
        </div>
    </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    mounted() {
        AOS.init({})
    }
}
</script>