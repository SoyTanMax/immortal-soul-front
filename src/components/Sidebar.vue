<template>
    <div class="sidebar">
        <div v-for="chapter in chapters" :key="chapter.id">
            <div class="chapter-name" @click="changeChapter(chapter.id)" :class="{'is-disabled': !$store.state.user && chapter.id > 1}">
                <p v-if="$store.state.currentChapter == chapter.id" class="is-uppercase name is-active has-text-white">{{ chapter.roman }} {{ chapter.name }}</p>
                <div class="is-flex" v-else>
                    <svg v-if="!$store.state.user && chapter.id > 1" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                    <p class="is-uppercase name">{{ chapter.roman }} {{ chapter.name }}</p> 
                </div>
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
        padding: 8px 12px;
    }
    .name.is-active{
        background: #4A4E54;
        
        border-radius: 8px;
    }
    svg{
        max-width: 20px;
    }
    .is-disabled{
        pointer-events: none;
    }
</style>