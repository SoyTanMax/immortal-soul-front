<template>
    <div class="novel">
        <Sidebar
            @updateChapter="changeChapter($event)"
            :chapters="chapters"
            :selectedChapter="selectedChapter"
            class="is-hidden-touch"    
        />
        <Chapter 
            :chapters="chapters"
            :selectedChapter="selectedChapter"
        />  
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import Chapter from '@/components/Chapter.vue'
    export default {
        props: ['chapters', 'selectedChapter'],
        components: {
            Sidebar,
            Chapter
        },
        data(){
            return {
                selectedChapter: this.selectedChapter
            }
        },
        methods: {
            changeChapter(updatedChapter){
                this.selectedChapter = updatedChapter
            }
        }
    }
</script>

<style scoped>
.novel{
    display: flex;
    width: 100vw;

    padding-right: var(--vertical-padding);
    padding-left: var(--vertical-padding);
}
@media screen and (max-width: 1023px) {
    .novel{
        padding-right: 12px;
        padding-left: 12px;
    }
}
</style>