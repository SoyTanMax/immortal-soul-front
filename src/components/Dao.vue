<template>
    <div class="hero is-transparent">
        <div class="columns">
            <div class="column one is-hidden-mobile">
                <img src="@/assets/necklace.png" alt="">
            </div>
            <div class="column two has-text-white">
                <p class="has-font-weight-light title has-text-white block has-text-centered-mobile">{{ text.dao.title }}</p>
                <div v-for="phase in text.dao.phases" :key="phase.number">
                    <p class="phase"><span class="has-text-weight-bold">{{ phase.percentage }} %</span> - {{ phase.text }}</p> <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import text from '@/lang/texts'
    export default {
        name: 'Dao',
        setup(){
            return { text }
        }
    }
</script>

<style scoped>

.hero{
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100vh;     
    display: grid;
    place-items: center;
    padding-right: var(--vertical-padding);
    padding-left: var(--vertical-padding);
} 
.columns{
    z-index: 99;
    animation: appear 1s ease-in;
}
.one, .two{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title{
    font-family: 'Merriweather', serif;
    font-size: 32px;
    font-weight: 300;
}
.phase{
    font-family: 'Merriweather', serif;
}
span{
    color: var(--gold);
}

@media screen and (max-width: 1023px) {
    .hero{
        padding-right: var(--vertical-padding-mobile);
        padding-left: var(--vertical-padding-mobile);
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