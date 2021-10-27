<script setup lang="ts">

defineProps({
   text: {
      type: String,
      required: true
   }
})

function upperCase(str: string) {
   return str.toUpperCase()
}

</script>
<template>
   <button type="button">{{ upperCase(text) }}</button>
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
</style>