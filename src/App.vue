<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  setup() {
    
  },
}
</script>

<style>
.app{
  position: relative;
}

</style>
