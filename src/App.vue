<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Landing from '@/components/Landing.vue';
import Modal from '@/components/micro/Modal.vue';
import useState from '@/state/useState';
import useMutation from '@/state/useMutation';
import { onMounted } from '@vue/runtime-core';
import { extractNameFromUrl } from '@/util/urlutils'

const { sponsorCount } = useState()
const { ping, findSponsor } = useMutation()
onMounted(() => ping()
  .then(() => parseUrl()))

function toggleTheme() {
  const bodyClass = document.getElementById('body')?.getAttribute('class');
  if (bodyClass != null && bodyClass != undefined) {
    const theme = bodyClass === 'light' ? 'dark' : 'light'
    document.getElementById('body')?.setAttribute('class', theme)
  }
}

async function parseUrl() {
  const name = extractNameFromUrl()
  await findSponsor(name)
}

</script>

<template>
  <div class="root">
    <div class="container center">
      <h1
        class="header center"
      >There are currently {{ sponsorCount }} Companies that provide Sponsorship</h1>
      <Landing msg="Do They Sponsor?" />
      <Footer />
      <Modal />
    </div>
  </div>
</template>
