<template>
    <div class="hero">
        <Navbar class="navbar"
            :chapters="chapters"
         />
        <router-view class="router" 
            :chapters="chapters">
        </router-view>
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import getChapters from '@/composables/getChapters'

    export default {
        name: 'Hero',
        components: {
            Navbar
        },
        setup(){
            const { chapters, error, load } = getChapters()
            load()

            return {chapters, error}
        }
    }
</script>

<style scoped>

.hero{
    background: #000000;
    width: 100vw;
    height: 100vh;    
    display: grid;
    place-items: center;
    position: relative;
}
.name{
    position: relative;
    display: grid;
    place-items: center;
    min-width: 100%;
}
p{
    position: absolute;
    font-family: Lora;
    font-size: 90px;
    background: -webkit-linear-gradient(#8d6627, #c0982a, #fae56b, #c0982a, #8d6627);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    z-index: 99;
}
.navbar{
  position: absolute;
  z-index: 99;
}
.router{
  position: relative;
  z-index: 98;
  width: 100vw;;
}
</style>