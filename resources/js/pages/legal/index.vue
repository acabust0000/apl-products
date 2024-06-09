<script setup>
import Layout from '@/layouts/default.vue'
import VueMarkdown from 'vue-markdown-render'

defineProps({
    html: String
})
</script>
<template>
    <Layout>
        <vue-markdown :source="html" class="container"/>
    </Layout>
</template>
