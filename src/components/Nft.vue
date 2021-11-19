<template>
    <div class="hero">
        <div class="columns">
            <div class="column coin">
                <Coin />
            </div>
            <div class="column two has-text-white">
                <p class="has-font-weight-light title has-text-white block">{{ text.nft.title }}</p>
                <p class="description block">{{ text.nft.description }}</p>
                <p class="description block">{{ text.nft.description2 }}</p>
                <div class="line"></div>
                <button class="button is-large block">{{ text.nft.button }}</button>
            </div>
        </div>
        <img class="logo" src="@/assets/logo.svg" alt="">
    </div>
</template>

<script>
import text from '@/lang/texts'
import Coin from '@/components/Coin.vue'
    export default {
        name: 'NFT',
        components:{
            Coin
        },
        setup(){
            return { text}
        }
    }
</script>

<style scoped>

.hero{
    background: #000000;
    width: 100%;
    height: 100vh;    
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: var(--vertical-padding);
    padding-right: var(--vertical-padding);
}
.logo{
    position: absolute;
    z-index: 98;
    max-height: 100vh;
    animation: appear 6s ease-in;
}
.columns{
    z-index: 99;
    animation: appear 1s ease-in;
}
.two{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.coin{
    display: flex;
    justify-content: center;
    align-items: center;
}
.title{
    font-family: 'Merriweather', serif;
    font-size: 32px;
    font-weight: 300;
}
.description{
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
}
.line{
    height: 2px;
    width: 100px;
    background: var(--gold);
    margin-bottom: 32px;
}
.button{
    border: 2px solid #DA9628;
    background: transparent;
    border-radius: 0;
    font-family: 'Merriweather', serif;
    color: white;
    max-width: 300px;
    min-height: 72px;
    transition: 250ms;
}
.button:hover{
    border: 2px solid #DA9628;
    background: transparent;
    color: white;
    transform: scale(1.03);
}
@keyframes appear {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>