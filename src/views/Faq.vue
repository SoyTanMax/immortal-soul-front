<template>
  <div class="faq">
    <FAQ />
    <Logo />
  </div>
</template>

<script>

import FAQ from '@/components/Faq.vue'
import Logo from '@/components/Logo.vue'
export default {
  name: 'Home',
  components: {
    FAQ,
    Logo
  }
}

</script>

