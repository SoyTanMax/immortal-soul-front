<template>
  <div class="home">
    <NFT />
    <Logo />
  </div>
</template>

<script>

import NFT from '@/components/Nft.vue'
import Logo from '@/components/Logo.vue'
export default {
  name: 'Home',
  props: ['chapters'],
  components: {
    NFT,
    Logo
  }
}

</script>