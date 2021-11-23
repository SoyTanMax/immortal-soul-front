<template>
    <nav class="navbar is-transparent">
        <div class="navbar-start">
            <div class="navbar-item">
                <router-link class="navbar-item" :to="{name: 'Home'}">
                    <p class="is-uppercase logo">Immortal Soul</p>
                </router-link>
            </div>
        </div>
        <div class="navbar-burger" v-if="showNav == false" @click="changeState">
            <span class="has-text-white"></span>
            <span class="has-text-white"></span>
            <span class="has-text-white"></span>
        </div>
        <div class="navbar-end" >
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <router-link class="navbar-item" :to="{name: 'Nft'}">NFT</router-link>
                <router-link class="navbar-item" :to="{name: 'About'}">PREVIEW</router-link>
                <router-link class="navbar-item" :to="{name: 'About'}">ROADMAP</router-link>
                <router-link class="navbar-item" :to="{name: 'About'}">FAQ</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                showNav: false
            }
        },
        methods: {
            changeState(){
                this.showNav = !this.showNav
                this.$emit('changeState', this.showNav)
            }
        }
    }
</script>

<style scoped>
.logo{
    font-family: Lora;
    font-weight: 500;
    font-size: 32px;
    background: -webkit-linear-gradient(#C4C7CC 25%, #57585A 52.6%, #C4C7CC 80.21%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.navbar{
    font-family: Souvenir;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
    position: absolute;
    top: 0;
    width: 100%;
    background: black;
    padding-left: var(--vertical-padding);
    padding-right: var(--vertical-padding);
}
a{
    color: var(--grey-link);
    font-size: 16px;
    transition: 250ms;
}
a.router-link-exact-active, a.router-link-active{
    color: var(--gold) !important;
}
a:hover{
    color: white !important;
}

@media screen and (max-width: 1023px) {
    .logo{
        font-size: 24px;
    }
    .navbar{
        z-index: 99;
        padding-left: var(--vertical-padding-mobile);
        padding-right: var(--vertical-padding-mobile);
    }
    .navbar-burger{
        position: relative;
        z-index: 99;
    }
    .navbar-menu{
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
        height: 100vh;
        width: 90%;
        background: #191A1D;
        border-radius: 24px 0 0 24px ;
        padding-left: var(--vertical-padding-mobile);
        padding-right: var(--vertical-padding-mobile);
        padding-top: 72px;
    }
}
</style>