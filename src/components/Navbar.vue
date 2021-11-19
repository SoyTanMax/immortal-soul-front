<template>
    <nav class="navbar is-transparent">
        <div class="navbar-start">
            <div class="navbar-item">
                <p class="is-uppercase logo">Immortal Soul</p>
            </div>
        </div>
        <div class="navbar-end">
            <router-link class="navbar-item" :to="{name: 'Home'}">HOME</router-link>
            <router-link class="navbar-item" :to="{name: 'Nft'}">NFT</router-link>
            <router-link class="navbar-item" :to="{name: 'About'}">PREVIEW</router-link>
            <router-link class="navbar-item" :to="{name: 'About'}">ROADMAP</router-link>
            <router-link class="navbar-item" :to="{name: 'About'}">FAQ</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
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
</style>