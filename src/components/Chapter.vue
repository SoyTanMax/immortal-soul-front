<template>
    <div class="chapter">
        <div v-for="chapter in chapters" :key="chapter.id">
            <div class="has-text-white" v-if="chapter.id == $store.state.currentChapter">
                <p class="has-text-centered is-capitalized is-size-4 block">{{ chapter.name }}</p>
                <div class="text">
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                    <p>{{ chapter.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['chapters']
    }
</script>

<style scoped>
    .chapter{
        position: relative;
        font-family: 'Merriweather', serif;
        font-size: 16px;
        background: #171B20;
        text-align: justify;
        height: 75vh;
        overflow-y: scroll;
        padding: 32px 72px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        border-radius: 12px;
        width: 100%;
        margin-left: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .chapter::-webkit-scrollbar {
        display: none;
    }
    .name{
        padding: 8px;
    }
    @media screen and (max-width: 1023px) {
        .chapter{
            margin-left: 0;
            padding: 32px 12px;
            height: 80vh;
            font-size: 14px;
            background: black;
            -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
        p{
            line-height: 32px;
        }
    }
</style>