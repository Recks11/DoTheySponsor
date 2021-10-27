<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Landing from '@/components/Landing.vue';
import useState from '@/state/useState';
// import useEvent from './state/useEvent';
import useMutation from './state/useMutation';

const { sponsorCount } = useState()
const { ping } = useMutation()
// const { on, emit } = useEvent()
ping()

function toggleTheme() {
  const bodyClass = document.getElementById('body')?.getAttribute('class');
  if (bodyClass != null && bodyClass != undefined) {
    const theme = bodyClass === 'light' ? 'dark' : 'light'
    document.getElementById('body')?.setAttribute('class', theme)
  }
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
    </div>
  </div>
</template>
