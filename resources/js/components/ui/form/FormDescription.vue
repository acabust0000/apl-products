<script setup>
import { useFormField } from "./useFormField";
import { cn } from "@/lib";

const props = defineProps({
  class: { type: null, required: false },
});

const { formDescriptionId } = useFormField();
</script>

<template>
  <p
    :id="formDescriptionId"
    :class="cn('inline text-sm font-medium', props.class)"
  >
    (<slot />)
  </p>
</template>
