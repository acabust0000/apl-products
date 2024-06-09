<script setup>
import Layout from '@/layouts/default.vue'
import { Button } from '@/components/ui/button'
import { Announcement } from '@/components/ui/announcement';
import { Link } from "@inertiajs/vue3"

import Product from './components/Product.vue'
import { onMounted } from 'vue';

defineProps({
    products: Object
})

onMounted(() => {
    gsap.fromTo('#hero>div:first-child',
        {
            yPercent: 100,
            scale: 0.5,
            opacity: 0,
        },
        {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 3,
            ease: 'expo'
        }
    )
})

</script>
<template>
    <Layout>
        <section id="hero" class="px-responsive sm:gap-responsive flex-responsive-reverse items-center sm:py-0">
            <div class="w-full aspect-square sm:py-responsive">
                <img src="/products/all.webp" alt="Apl Products" width="256" height="256" loading="lazy" class="h-full w-auto object-scale-down rounded-md mx-auto sm:scale-150"/>
            </div>
            <div class="container-text">
                <div>
                    <span>
                        Apl Products
                    </span>
                    <h1>
                        Produsele care schimba lumea
                    </h1>
                </div>
                <p>
                    Acumullit SA (Tehnologia de acumulare a puterii) – Tehnologia noastră revoluţionară susţine şi întinereşte proprietăţile benefice ale ingredientelor naturale care facilitează absorbţia celulară.
                </p>
                <div class="flex flex-wrap sm:flex-nowrap gap-responsive-xs pt-4">
                    <Button size="lg" asChild >
                        <a :href="$page.props.apl" target="_blank" class="w-full sm:w-auto">
                            Magazin APL
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" class="grow sm:grow-0">
                        <Link :href="route('views.blog')">
                            Blog
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" class="grow sm:grow-0">
                        <Link :href="route('views.gallery')">
                            Galerie
                        </Link>
                    </Button>
                </div>
            </div>
        </section>

        <section id="products" class="
            p-responsive
            gap-responsive-xs
            flex flex-col
            container items-center
            relative
        ">
            <div class="container-text text-center">
                <div>
                    <span>
                        Calitatea
                    </span>
                    <h2>
                        Produsele seriei Acumullit SA
                    </h2>
                </div>
                <p>
                    Când spunem că produsul nostru va schimba lumea, suntem sinceri. Datorită tehnologiei noastre inovatoare Acumullit SA®, toată lumea de pe planetă are şansa de a încerca acest produs unic.
                    Această tehnologie ne oferă capacitatea de a folosi în produsele noastre puterea naturală a ierburilor, fructelor, fructelor de pădure şi a legumelor.
                    Fiecare drajeu Acumullit SA® este o mică torpillă, îndreptată direct către celulele dumneavoastră, care oferă organismului nutriţia şi mineralele atât de necesare.
                    Am avut mare grijă în alegerea fiecărei componente a drajeurilor noastre.
                </p>
            </div>

            <Product v-for="(product, identifier) in products"
                :url="product.url" 
                :identifier="identifier" 
                :span="product.span" 
                :img="product.img" 
                :title="product.title" 
                :description="product.description" 
            />

        </section>

        <Announcement 
            title="Inca nu esti convins?"
            description="Descopera mai multe informatii despre produsele Apl"
            :actions="{
                'Blog': route('views.blog'),
                'Galerie': route('views.gallery'),
            }"
        />
    </Layout>
</template>
<style>
#products>div:not(:first-child):nth-child(odd) {
    @apply sm:flex-row-reverse
}
</style>