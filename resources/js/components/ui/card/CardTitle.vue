<script setup>
import { cn } from "@/lib";
import { Primitive } from "radix-vue";

const props = defineProps({
  class: { type: null, required: false },
  as: { type: null, required: false, default: "h3" },
});
</script>

<template>
    <Primitive
        :as="as"
        :class="
            cn('text-start ', props.class)
        "
    >
        <slot />
    </Primitive>
</template>
