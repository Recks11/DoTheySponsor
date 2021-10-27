<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/micro/Button.vue';
import useEvent from '@/state/useEvent';
import useMutation from '@/state/useMutation';
import { Events } from "@/state/events";
const { on } = useEvent()
const { findSponsor } = useMutation()

const entry = ref('')
const enableSearch = ref(true)
on(Events.SEARCH_ERROR, () => entry.value = '')
on(Events.LOADING, () => enableSearch.value = false)
on(Events.LOADED, () => enableSearch.value = true)

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
         class="input-action"
         :disabled="enableSearch"
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
   padding: 2px 4px;
   border-radius: 0;
   border: 1px solid var(--text-color);
}

.input-text:focus {
   outline: unset;
}
</style>