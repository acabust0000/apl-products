<script setup>
import { Link } from "@inertiajs/vue3"
import { DoubleArrowRightIcon } from '@radix-icons/vue'
import { Separator } from '@/components/ui/separator'

defineProps({
    article: Object
})
</script>
<template>
    <article class="flex-responsive sm:gap-responsive items-center">
        <div class="w-full aspect-square ">
            <img :src="article.img" :alt="article.title" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"/>
        </div>
        <div class="container-text py-4">
            <h5 v-text="article.title" class="text-4xl"/>
            <p v-text="article.description" />
            <Link :href="article.url" class="items-center underline sm:no-underline hover:underline text-xl">
                Citeste mai mult
                <DoubleArrowRightIcon class="inline" />
            </Link>
            <!-- <Separator /> -->
        </div>
    </article>
</template>
