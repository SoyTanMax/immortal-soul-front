<template>
    <div class="sidebar">
        <div v-for="chapter in chapters" :key="chapter.id">
            <div class="chapter-name" @click="selectedChapter = chapter.id; updateChapter()">
                <p v-if="selectedChapter == chapter.id" class="is-uppercase name has-text-white">{{ chapter.roman }} {{ chapter.name }}</p> 
                <p v-else class="is-uppercase name">{{ chapter.roman }} {{ chapter.name }}</p> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['chapters', 'selectedChapter'],
        methods: {
            updateChapter(){
                console.log(this.selectedChapter)
                this.$emit('updateChapter', this.selectedChapter);
            }
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