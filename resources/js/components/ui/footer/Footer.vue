<script setup>
import { Link } from "@inertiajs/vue3"
import { Separator } from '@/components/ui/separator'
import { Youtube, Facebook, Instagram } from '@/components/icons/'
</script>
<template>
    <footer class="bg-background p-responsive flex flex-col gap-responsive">

        <div class="flex-responsive justify-between gap-10 [&>div]:w-full [&>div>span]:font-semibold [&>div>span]:mb-4">
            <div>
                <span>
                    Galerie
                </span>
                <Link :href="gallery.url" v-for="gallery in $page.props.links.gallery" v-text="gallery.title" />
            </div>

            <div>
                <span>
                    Articole
                </span>
                <Link :href="article.url" v-for="article in $page.props.links.blog" v-text="article.title" />
            </div>
        
            <div>
                <span>
                    Pagini
                </span>
                <a :href="$page.props.links.apl" target="_blank" >
                    Magazin APL
                </a>
                <Link :href="route('views.index')" >
                    Despre
                </Link>
                <Link :href="route('views.blog')" >
                    Blog
                </Link>
                <Link :href="route('views.gallery')" >
                    Galerie
                </Link>
                <Link :href="route('views.contact')" >
                    Contact
                </Link>
            </div>
        </div>

        <div class="flex flex-col gap-8">
            <Separator />
            <div class="flex-responsive-reverse justify-between text-sm gap-responsive-sm">
                <div class="flex-responsive-reverse gap-6">
                    <span>
                        Apl Products 2024 
                    </span>
                    <div class="flex-responsive-reverse gap-responsive-xs">
                        <Link :href="route('legal.privacy')">
                            Politica de confidentialitate
                        </Link>
                        <Link :href="route('legal.terms')">
                            Termeni si conditii
                        </Link>
                        <Link :href="route('legal.cookies')">
                            Politica Cookie
                        </Link>
                    </div>
                </div>
                <div class="flex flex-row gap-responsive-xs">
                    <a target="_blank" href="platforms.Facebook" class="btn-social">
                        <Facebook />
                    </a>
                    <a target="_blank" href="platforms.Facebook" class="btn-social">
                        <Instagram />
                    </a>
                    <a target="_blank" href="platforms.Facebook" class="btn-social">
                        <Youtube />
                    </a>
                </div>
            </div>
        </div>

    </footer>
</template>
<style scoped>
footer a {
    @apply hover:underline hover:text-primary transition-all w-fit
}
footer>div:first-child>div {
    @apply flex flex-col gap-2 sm:gap-6
}
footer>div:first-child>div:last-child {
    @apply sm:w-1/3
}
</style>