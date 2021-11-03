<template>
  <div class="connect">
    <button @click="connectWallet" v-if="!currAccount" class="button has-text-weight-medium">Connect Wallet</button>
    <h1 v-else class="has-text-white">Wallet Connected</h1>
  </div>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core'
import connectWallet from '@/composables/connectWallet'
import { getWallet, currAccount } from '@/composables/getWallet'
  export default {
    name: 'Connect',
    setup(){
      onBeforeMount(()=>{
        getWallet()
      })
      return {connectWallet, currAccount}
    }
  }
</script>

<style scoped>
.connect{
  height: 100vh;
  background: black;
  display: grid;
  place-items: center;
}
h1{
  color: white;
}
</style>
