<script setup>
import { Toaster } from '@/components/ui/sonner'
import { Navbar } from '@/components/ui/navbar'
import { Footer } from '@/components/ui/footer'
import { onMounted } from 'vue';

defineProps({
    class: String
})

onMounted(() => {
    gsap
        .fromTo('main>div:first-child>svg:nth-child(odd)', 
            {
                xPercent: 20,
                opacity: 0,
            },
            {
                xPercent: 0,
                opacity: 1,
                duration: 3,
                ease: 'expo'
            }
        )

    gsap
        .fromTo('main>div:first-child>svg:nth-child(even)', 
            {
                xPercent: -20,
                opacity: 0,
            },
            {
                xPercent: 0,
                opacity: 1,
                duration: 3,
                ease: 'expo'
            }
        )
})

</script>
<template>
    <teleport to="body">
        <Toaster position="top-right" richColors duration="5000"/>
    </teleport>

    <Navbar />
    
    <main class="relative h-auto flex flex-col overflow-hidden text-input" :class="class">
        <div class="absolute mt-20 sm:mt-60 -z-10 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59.17 57.42" v-for="n in 20">
                <path d="M56.62,9.61c-1.99,4.53-4.5,7.71-8.8,11.65-7.84,6.93-6.37,21.26-2.16,29.78-9.47-5.69-3.21-23.86-12.25-33.1C29.29,11.82,13.33,6.61,7.13,0c9.85,21.21-3.2,29.25,23.03,45.94-15.33-6.6-14.63-.23-30.16,2.77,9.03,3.19,11.42,8.69,19.76,8.71,8.57.01,12.39-7.45,20.54-3.54-1.58-2.45-5.33-4.93-6.16-5.7,3.84,1.91,7.44,3.25,11.91,3.76.25.56.49.89.85,1.22-.31-7.87,2.97-8.68,6.71-12.6,6.89-7.81,6.33-13.38,3.93-22.31-.66-2.26-.79-5.68-.91-8.64ZM36.31,51.41c-13.46-5.42-16.39-1.53-30.82-2.34,15.17-.59,16.61-4.53,30.82,2.34ZM11.87,7.35c11.29,17.27,11.01,27.67,28.91,41.48C21.55,38.85,18.61,19.08,11.87,7.35ZM45.8,48.64c-2.58-16.35,4.67-20.86,9.03-32.1-2.43,10.95-9.9,15.69-9.03,32.1Z"/>
            </svg>
        </div>
        <div>
            <slot />
        </div>
        <Footer />
    </main>
</template>
<style scoped>
main>div:first-child>svg {
    @apply fill-primary w-screen h-screen relative -my-60
}

main>div:first-child>svg:nth-child(odd) {
    @apply left-1/3
}

main>div:first-child>svg:nth-child(even) {
    @apply rotate-180 -scale-y-100 right-1/3
}



</style>