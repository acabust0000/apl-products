<script setup>
import { Link2Icon } from '@radix-icons/vue'
import { X, Facebook, WhatsApp } from '@/components/icons/'
import { useThrottleFn } from '@vueuse/core';
import { toast } from 'vue-sonner'

const props = defineProps({
    url: String
})

const copy = useThrottleFn(() => {
    navigator.clipboard.writeText(props.url)
    toast.success('Link copiat!', {
        description: 'Va multumim pentru interes.',
    })
}, 5000);

const platforms = {
    WhatsApp:   `whatsapp://send/?text=${props.url}`,
    Facebook:   `https://www.facebook.com/sharer.php?u=${props.url}`,
    X:          `https://twitter.com/intent/tweet?url=${props.url}`,
}

</script>
<template>
    <button class="btn-social" @click="copy">
        <Link2Icon />
    </button>
    <a target="_blank" :href="platforms.WhatsApp" class="btn-social">
        <WhatsApp />
    </a>
    <a target="_blank" :href="platforms.X" class="btn-social">
        <X />
    </a>
    <a target="_blank" :href="platforms.Facebook" class="btn-social">
        <Facebook />
    </a>
</template>