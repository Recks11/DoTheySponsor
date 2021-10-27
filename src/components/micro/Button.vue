<script setup lang="ts">import { defineComponent } from '@vue/runtime-core';


defineProps({
   text: {
      type: String,
      required: true
   },
   disabled: {
      type: Boolean,
      default: false
   }
})

function upperCase(str: string) {
   return str.toUpperCase()
}

defineComponent({
   inheritAttrs: true
})
</script>
<template>
   <button v-bind="$attrs" :disabled="disabled" type="button">{{ upperCase(text) }}</button>
</template>

<style scoped>
button {
   background: var(--color-primary);
   padding: 8px;
   border: 1px solid var(--text-color);
   border-radius: 0;
   color: var(--text-color-alt);
   font-weight: 700;
}

button:hover {
   background: white;
   cursor: pointer;
   color: var(--text-color);
}

button:disabled,
button[disabled] {
   cursor: not-allowed !important;
   background: gray;
}

.disabled:hover {
   background: gray;
   color: var(--text-color-alt);
}
</style>