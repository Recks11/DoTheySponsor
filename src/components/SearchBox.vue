<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Button from '@/components/micro/Button.vue';
import useEvent from '@/state/useEvent';
import useMutation from '@/state/useMutation';
import Events from "@/events";
const { on } = useEvent()
const { findSponsor } = useMutation()

const entry = ref('')
const enableSearch = ref(true)
onMounted(() => {
   on(Events.SEARCH_ERROR, () => entry.value = '')
   on(Events.LOADING, () => enableSearch.value = false)
   on(Events.LOADED, () => enableSearch.value = true)
})

</script>

<template>
   <div class="input-group">
      <input
         class="input-text"
         v-bind="$attrs"
         type="text"
         v-model="entry"
         @keyup.enter="findSponsor(entry)"
      />
      <Button
         class="input-action button-large"
         :disabled="!enableSearch"
         text="search"
         @click.prevent="findSponsor(entry)"
      />
   </div>
</template>

<style scoped>
.input-group {
   display: flex;
   flex-direction: row;
   justify-content: center;
}

.input-text {
   margin-right: 5px;
   width: 500px;
   padding: 1px 0.5em;
   border-radius: 5px;
   border: 0px solid var(--text-color);
   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
   font-weight: 500;
}

.input-text:focus {
   outline: unset;
}
</style>