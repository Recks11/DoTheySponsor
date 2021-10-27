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
   background-color: var(--color-primary);
   border: 0;
   border-radius: 5px;
   box-shadow: var(--button-shadow);
   color: var(--card-detail-background-color);
   font-size: 0.8em;
   padding: 5px 10px;
   margin-left: 5px;
   letter-spacing: 1px;
   transition: transform ease-in 80ms;
}



button:hover {
   /* background: white; */
   cursor: pointer;
   /* color: var(--text-color); */
   transform: scale(1.05);
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

.button-large {
   padding: 0.6em 1em;
}

.button-sm {
   padding: 0.3em 0.8em;
}
</style>