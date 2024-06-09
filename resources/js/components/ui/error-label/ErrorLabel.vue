<script setup>
defineProps({
    text: String,
});
</script>

<template>
    <span v-show="text" class="text-sm font-medium text-destructive mb-0.5" v-text="text" />
</template>
