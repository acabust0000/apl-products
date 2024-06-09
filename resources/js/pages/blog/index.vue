<script setup>
import { ArrowRightIcon } from '@radix-icons/vue'
import { Link } from '@inertiajs/vue3';
import { Separator } from '@/components/ui/separator'

import Layout from '@/layouts/default.vue'

import { Announcement }     from '@/components/ui/announcement'
import Socials     from './components/Socials.vue'

const props         = defineProps({
    title: String,
    url: String,
    content: String,
    published_at: String,
    img: String,
})

</script>
<template>
    <Layout class="relative">

        <div class="!hidden sm:flex px-responsive py-responsive sm:py-0 flex-responsive gap-responsive-xs sm:items-center">
            <Link :href="route('views.blog')" class="flex items-center gap-2 sm:hover:underline" >
                Toate articolele
            </Link>
            <ArrowRightIcon class="size-6"/>
            <p v-text="title" class=" sm:text-nowrap"/>
        </div>

        <section class="flex-responsive-reverse gap-responsive-sm px-responsive items-center">
            
            <div class="flex flex-col gap-responsive-xs sm:w-1/2">
                <h1 v-text="title" />
                <span v-text="published_at" />
            </div>
            <div class="sm:w-1/2 aspect-square sm:py-responsive">
                <img :src="img" :alt="title" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto"/>
            </div>
        </section>

        <section class="container p-responsive flex flex-col gap-responsive">
            
            <p v-html="content"/>

            <div class="w-full flex flex-col items-center gap-5">
                <div class="flex justify-center items-center gap-6">
                    <span>Articol publicat de Apl Products</span>
                </div>
                <div class="flex gap-responsive-sm justify-center">
                    <Socials :url="url" />
                </div>
            </div>
            
        </section>
        
        <Announcement 
            title="Descopera mai multe despre Apl Products"
            description="title titletitletitletitletitletitletitletitletitletitletitletitletitletitletitle"
            :actions="{
                'Blog': route('views.blog'),
                'Galerie': route('views.gallery'),
            }"
        />

    </Layout>
</template>
