<script setup>
import { useEventBus } from '@vueuse/core'
import { Separator } from '@/components/ui/separator'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

defineProps({
    gallery: Object
})
</script>
<template>
    <article :id="gallery.id" class="flex flex-col gap-4 sm:gap-14">
        <div>
            <span v-text="gallery.date" />
            <h2 v-text="gallery.title" />
        </div>
        <Carousel >
            <CarouselContent>
                <template v-for="(src, alt, index) in gallery.data">
                    <CarouselItem class="sm:basis-[content] sm:h-[30rem] py-6">
                        <img :src="src" :alt="alt" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md hover:scale-110 transition-all cursor-pointer"
                            @click="useEventBus('preview').emit({
                                data: gallery.data,
                                scrollTo: index,
                            })
                        "/>
                    </CarouselItem>
                </template>
            </CarouselContent>
            <div class="justify-end ml-auto flex gap-6 mt-12">
                <CarouselPrevious />
                <CarouselNext />
            </div>
            <!-- <Separator /> -->
        </Carousel>
    </article>
</template>
