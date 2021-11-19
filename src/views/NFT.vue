<template>
  <div class="home">
    <NFT/>
  </div>
</template>

<script>
// @ is an alias to /src
import NFT from '@/components/Nft.vue'
export default {
  name: 'Home',
  components: {
    NFT
  }
}
</script>