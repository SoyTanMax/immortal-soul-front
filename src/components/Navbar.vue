<template>
    <nav class="navbar is-transparent">
        <div class="navbar-item">
            <router-link class="navbar-item" :to="{name: 'Home'}">
                <p class="is-uppercase logo">Immortal Soul</p>
            </router-link>
        </div>
        <svg @click="showNav = !showNav" xmlns="http://www.w3.org/2000/svg" class="navbar-burger h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div class="navbar-end">
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="x-container block-mobile">
                    <svg v-if="showNav" @click="showNav = !showNav" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#FFFFFF">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <p>{{ route }}</p>
                <router-link class="navbar-item block-mobile" :to="{name: 'NFT'}">
                    NFT
                </router-link>
                <router-link class="navbar-item block-mobile" :to="{name: 'DAO'}">DAO</router-link>
                <div>
                    <router-link v-if="user" class="navbar-item block-mobile" :to="{name: 'Novel'}">NOVEL</router-link>
                    <router-link v-else class="navbar-item block-mobile" :to="{name: 'Novel'}">PREVIEW</router-link>
                </div>
                <router-link class="navbar-item block-mobile" :to="{name: 'Faq'}">FAQ</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import { computed, ref } from '@vue/reactivity'
    export default {
        name: 'Navbar',
        props: ['chapters'],
        setup(){

            const showNav = ref(false)

            const user = ref(true)

            return { showNav, user}
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
    font-family: 'Merriweather', serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: var(--navbar-height);
    position: absolute;
    top: 0;
    width: 100%;
    padding-left: var(--vertical-padding);
    padding-right: var(--vertical-padding);
}
a{
    display: flex;
    color: var(--grey-link);
    font-size: 18px;
    transition: 250ms;
}
a.router-link-exact-active, a.router-link-active{
    color: var(--gold) !important;
}
a:hover{
    color: white !important;
}
img{
    width: 70px;
    margin-right: 12px;
}
@media screen and (max-width: 1023px) {
    .logo{
        font-size: 24px;
    }
    .navbar{
        z-index: 99;
        width: 100%;
        padding-left: 0;
        padding-right: 0;
    }
    svg{
        width: 28px;
    }
    .navbar-menu{
        position: absolute;
        z-index: 99;
        top: 0;
        right: 0;
        height: 100vh;
        width: 90%;
        background: #191A1D;
        border-radius: 24px 0 0 24px;
        padding-top: 24px;
        padding-left: var(--vertical-padding-mobile);
        padding-right: var(--vertical-padding-mobile);
        overflow-y: scroll;
    }
    .navbar-burger{
        position: absolute;
        top: 9px;
        right: 24px;

    }
    .x-container{
        display: flex;
        justify-content: flex-end;
    }
    .navbar-menu a.router-link-exact-active, .navbar-menu a.router-link-active{
        color: var(--gold) !important;
        border-radius: 8px;
        background: #363123;
    }
    a:hover{
        color: var(--gold) !important;
        background: none !important;
    }
    
}
</style>