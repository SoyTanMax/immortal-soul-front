<template>
    <div class="novel">
        <Sidebar
            :chapters="chapters"
            class="is-hidden-touch"    
        />
        <Chapter 
            :chapters="chapters"
        />  
    </div>
</template>

<script>
    import Sidebar from '@/components/Sidebar.vue'
    import Chapter from '@/components/Chapter.vue'
    export default {
        props: ['chapters'],
        components: {
            Sidebar,
            Chapter
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