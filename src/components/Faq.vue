<template>
    <div class="hero is-transparent">
        <div class="columns">
            <div class="column one is-hidden-mobile">
                <img src="@/assets/candles.png" alt="">
            </div>
            <div class="column"></div>
            <div class="column two has-text-white is-6">
                <p class="has-font-weight-light title has-text-white block has-text-centered-mobile">{{ text.faq.title }}</p>
                <div class="question block" v-for="question in text.faq.questions" :key="question.id">
                    <p class="is-size-5 flex block" @click="handleClick(question.id)">
                        {{ question.question }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import text from '@/lang/texts'
    import { ref } from '@vue/reactivity'
    export default {
        name: 'Dao',
        setup(){

            const answers = ref([false, false, false, false])

            const handleClick = (id) => {
                answers.value[id] = !answers.value[id]
            }

            return { text, answers, handleClick }
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
svg{
    max-width: 28px;
    margin-right: 8px;
}
.question{
    font-family: 'Merriweather', serif;
    
}
.flex{
    display: flex;
    align-items: center;
}
.answer{
    border-left: 2px solid var(--gold);
    padding-left: 24px;
    margin-left: 12px;
}
img{
    max-width: 600px;
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