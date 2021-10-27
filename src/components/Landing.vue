<script setup lang=ts>
import { defineComponent, computed } from '@vue/runtime-core';
import SearchBox from '@/components/SearchBox.vue'
import SponsorList from '@/components/sponsor/SponsorList.vue'
import useState from '@/state/useState';

const { sponsors } = useState()

defineProps({
  msg: String
})

defineComponent({
  components: {
    SearchBox,
    SponsorList
  }
})

</script>

<template>
  <h3 class="header center">{{ msg }}</h3>
  <section class="search">
    <SearchBox placeholder="Enter a company name" />
  </section>
  <SponsorList :sponsors="sponsors" />
</template>

<style scoped>
.search {
  margin: 12px 0;
}
</style>
