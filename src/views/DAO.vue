<template>
  <div class="dao">
    <DAO />
    <Logo />
  </div>
</template>

<script>

import DAO from '@/components/Dao.vue'
import Logo from '@/components/Logo.vue'
export default {
  name: 'Home',
  props: ['chapters'],
  components: {
    DAO,
    Logo
  }
}
</script>

<style scoped>
.dao{
  overflow: hidden;
}
</style>