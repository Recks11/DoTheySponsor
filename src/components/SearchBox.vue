<script setup lang="ts">
import Button from '@/components/micro/Button.vue';
import useEvent from '@/state/useEvent';
import useMutation from '@/state/useMutation';
import { Events } from "@/state/events";
const { on } = useEvent()
import { ref } from 'vue';
const { findSponsor } = useMutation()

const entry = ref('')
on(Events.SEARCH_ERROR, () => entry.value = '')

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
      <Button class="input-action" text="search" @click.prevent="findSponsor(entry)" />
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