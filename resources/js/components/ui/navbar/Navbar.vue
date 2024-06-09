<script setup>
import { Link } from "@inertiajs/vue3"
import { useMediaQuery } from '@vueuse/core'
import { HamburgerMenuIcon } from '@radix-icons/vue'

import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/ui/logo'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ref } from "vue"

const isDesktop = useMediaQuery('(min-width: 640px)')
const open      = ref(false)
</script>
<template>
    <template v-if="isDesktop">
        <header class="text-input w-full flex flex-row justify-between px-24 py-12 text-nowrap">
            <!-- <Logo /> -->
            <div />

            <div class="flex w-min gap-responsive-sm">
                <a :href="$page.props.links.apl" target="_blank" class="font-semibold underline decoration-primary items-center inline-block whitespace-nowrap">
                    Magazin APL
                </a>

                <Separator  orientation="vertical" />

                <Link :href="route('views.index')" 
                    :class="{
                        '': route('views.index') == $page.props.links.active
                    }"
                >
                    Despre
                </Link>
                <Link :href="route('views.blog')" 
                    :class="{
                        '': route('views.blog') == $page.props.links.active
                    }"
                >
                    Blog
                </Link>
                <Link :href="route('views.gallery')" 
                    :class="{
                        '': route('views.gallery') == $page.props.links.active
                    }"
                >
                    Galerie
                </Link>
                <Link :href="route('views.contact')" 
                    :class="{
                        '': route('views.contact') == $page.props.links.active
                    }"
                >
                    Contact
                </Link>
                
            </div>

        </header>
    </template>
    
    <Collapsible v-model:open="open" as="header" class="relative bg-background text-input" v-else>
        <div class="w-full flex flex-row justify-between px-5 py-4 text-nowrap font-thin items-center">
            <!-- <Logo class="transition-all" :class="{
                'opacity-0': !open,
                'opacity-100': open,
            }"/> -->
            <div />

            <CollapsibleTrigger asChild>
                <HamburgerMenuIcon class="cursor-pointer stroke-black hover:stroke-primary transition-all"/>
            </CollapsibleTrigger>
        </div>

        <CollapsibleContent class="bg-background w-full fixed z-10">
            <div class="bg-background flex flex-col-reverse gap-6 px-5 py-8">
                <a :href="$page.props.links.apl" target="_blank" class="font-semibold underline decoration-primary items-center">
                    Magazin APL
                </a>
                <Link :href="route('views.index')"
                    :class="{
                        '': route('views.index') == $page.props.links.active
                    }"
                >
                    Despre
                </Link>
                <Link :href="route('views.blog')"
                    :class="{
                        '': route('views.blog') == $page.props.links.active
                    }"
                >
                    Blog
                </Link>
                <Link :href="route('views.gallery')"
                    :class="{
                        '': route('views.gallery') == $page.props.links.active
                    }"
                >
                    Galerie
                </Link>
                <Link :href="route('views.contact')"
                    :class="{
                        '': route('views.contact') == $page.props.links.active
                    }"
                >
                    Contact
                </Link>
            </div>
        </CollapsibleContent>
    </Collapsible>
    
</template>
<style scoped>
header a {
    @apply hover:text-primary transition-all
}
</style>