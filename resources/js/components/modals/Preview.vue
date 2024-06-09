<script setup>
import { useEventBus } from '@vueuse/core';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog'
import { ref } from 'vue';

const open      = ref(false)
const data      = ref({})
const carousel  = ref(null)


useEventBus('preview').on((payload) => {
    open.value      = true
    data.value      = payload.data
    setTimeout(()   => {
        carousel.value?.carouselApi.scrollTo(payload.scrollTo, true)
    }, 1)
})
</script>
<template>
    <Dialog v-model:open="open">
        <DialogContent class="bg-transparent border-none shadow-none" hideClose>
            <Carousel ref="carousel">
                <CarouselContent>
                    <template v-for="(src, alt) in data">
                        <CarouselItem class="aspect-square">
                            <img :src="src" :alt="alt" loading="lazy" class="h-full w-auto object-scale-down rounded-3xl" />
                        </CarouselItem>
                    </template>
                </CarouselContent>
                <div class="w-full flex justify-between">
                    <CarouselPrevious  class="sm:absolute"/>
                    <CarouselNext  class="sm:absolute" />
                </div>
            </Carousel>
        </DialogContent>
    </Dialog>
</template>