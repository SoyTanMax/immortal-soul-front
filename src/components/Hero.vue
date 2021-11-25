<template>
    <div class="hero is-transparent">
        <Animation v-if="animation"/>
        <div v-else class="columns">
            <div class="column coin">
                <Coin />
            </div>
            <div class="column two has-text-white">
                <p class="has-font-weight-light title has-text-white block">{{ text.home.title }}</p>
                <p class="description block">{{ text.home.description }}</p>
                <div class="line"></div>
                <button class="button is-large block">{{ text.home.button }}</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Animation from '@/components/Animation.vue'
    import Coin from '@/components/Coin.vue'
    import text from '@/lang/texts'
import { ref } from '@vue/reactivity'
    export default {
        name: 'Hero',
        components: {
            Animation,
            Coin
        },
        setup(){
            const animation = ref(true);
            setTimeout(
                function(){
                    animation.value = false
                }, 8000
            )
            return { animation, text}
        }
    }
</script>

<style scoped>

.hero{
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100vh;    
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: var(--vertical-padding);
    padding-left: var(--vertical-padding);
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
    font-family: Souvenir;
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

@media screen and (max-width: 1023px) {
    .hero{
        padding-right: var(--vertical-padding-mobile);
        padding-left: var(--vertical-padding-mobile);
    }
    .coin{
        min-height: 320px;
    }
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