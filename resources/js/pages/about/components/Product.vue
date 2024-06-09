<script setup>
import { Button } from '@/components/ui/button'
import { onMounted } from "vue";
import { useMediaQuery } from "@vueuse/core";

const props = defineProps({
    url: String,
    img: String,
    span: String,
    title: String,
    description: String,
    identifier: String,
})

const isDesktop = useMediaQuery('(min-width: 640px)');

onMounted(() => {
    gsap
        .timeline({
            scrollTrigger: {
                trigger:    `#${props.identifier}`,
                // @todo fix mobile
                start:      isDesktop.value ? 'center 150%' : 'center 150%',
                end:        isDesktop.value ? 'center center' : 'center center',
                scrub:      1,
            },
        })
        .add('start')
        .fromTo(`#${props.identifier}:nth-child(even)`, 
            {
                xPercent: -20,
                opacity: 0,
            },
            {
                xPercent: 0,
                opacity: 1,
            }
            , 'start'
        )
        .fromTo(`#${props.identifier}:nth-child(odd)`, 
            {
                xPercent: 20,
                opacity: 0,
            },
            {
                xPercent: 0,
                opacity: 1,
            }
            , 'start'
        )
})
</script>
<template>
    <div :id="identifier" class="flex-responsive w-full items-center">
        <div class="flex flex-col gap-4 sm:gap-8 w-full">
            <div class="p-8 sm:p-12 flex flex-col gap-5 sm:gap-6">
                <div>
                    <span v-text="span" />
                    <h3 v-text="title" />
                </div>
                <p v-text="description" />
                <div class="items-center flex gap-4 pt-4">
                    <Button>
                        <a target="_blank" :href="url">
                            Descopera produs
                        </a>
                    </Button>
                </div>
            </div>
        </div>
        <div class="w-full ">
            <img :src="img" :alt="title" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"/>
        </div>
    </div>
</template>