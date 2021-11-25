<template>
    <div>
        <img class="logo" src="@/assets/logo.svg" alt="">
    </div>
</template>

<style scoped>
.logo{
    position: absolute !important;
    z-index: 97;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: appear 6s ease-in;
}
/* Animations */
@keyframes appear {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>