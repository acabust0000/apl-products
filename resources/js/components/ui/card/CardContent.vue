<script setup>
import { Primitive } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps({
  class: { type: null, required: false },
  asChild: { type: Boolean, required: false },
});
</script>

<template>
    <Primitive
        :as-child="asChild"
        :class="cn('', props.class)"
    >
        <slot />
    </Primitive>
</template>
