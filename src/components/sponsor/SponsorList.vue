<script setup lang=ts>
import { defineComponent, defineProps, PropType } from '@vue/runtime-core';
import { Sponsor } from '@/types';
import SponsorListItem from "@/components/sponsor/SponsorListItem.vue"

defineProps({
   sponsors: {
      type: Object as PropType<readonly Sponsor[]>,
      default: () => []
   }
})

defineComponent({
   components: {
      SponsorListItem
   }
})

</script>

<template>
   <br />
   <div class="result-total" v-if="sponsors.length > 0">Found {{ sponsors.length }} Sponsors</div>
   <br />
   <div
      class="sponsor-container"
      v-for="(sponsor, idx) in sponsors"
      :key="`${sponsor.name}-${idx}`"
   >
      <SponsorListItem :sponsor="sponsor" />
   </div>
</template>

<style scoped>
.sponsor-container {
   display: flex;
   flex-direction: row;
   justify-content: center;
   text-align: left;
}
</style>