<template>
    <div class="sidebar">
        <div v-for="chapter in chapters" :key="chapter.id">
            <div class="chapter-name" @click="changeChapter(chapter.id)">
                <p v-if="$store.state.currentChapter == chapter.id" class="is-uppercase name has-text-white">{{ chapter.roman }} {{ chapter.name }}</p> 
                <p v-else class="is-uppercase name">{{ chapter.roman }} {{ chapter.name }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    export default {
        props: ['chapters'],
        setup(){

            const store = useStore()

            function changeChapter(id){
                store.commit('CHANGE_CHAPTER', id)
            }

            return { changeChapter }
        }
        
    }
</script>

<style scoped>
    .sidebar{
        font-family: Lora;
        font-size: 16px;
        background: #171B20;
        max-height: 75vh;
        overflow-y: scroll;
        padding: 24px;
        -ms-overflow-style: none;
        scrollbar-width: none;
        border-radius: 12px;
    }
    .sidebar::-webkit-scrollbar {
        display: none;
    }
    .name{
        padding: 8px;
    }
</style>