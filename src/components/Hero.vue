<template>
    <div class="hero">
        <div class="name">
            <p class="bruce">bruce wayne</p>
            <p class="immortal">immortal soul</p>
        </div>
        <img class="logo" src="@/assets/logo.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Hero',
        data() {
            
        },
    }
</script>

<style scoped>

.hero{
    background: #000000;
    width: 100%;
    height: 100vh;    
    display: grid;
    place-items: center;
    position: relative;
}
.name{
    position: relative;
    display: grid;
    place-items: center;
    min-width: 100%;
}
p{
    position: absolute;
    font-family: Lora;
    font-size: 90px;
    background: -webkit-linear-gradient(#8d6627, #c0982a, #fae56b, #c0982a, #8d6627);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    z-index: 99;
}


.logo{
    position: absolute;
    z-index: 98;
    max-height: 100vh;
    animation: appear 6s ease-in;
}
.bruce{
    animation: flip1 6s ease-out;
    transform: rotateX(90deg);
}
.immortal{
    animation: flip2 9s ease-in;
    transform: rotateX(0deg);
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
@keyframes flip1 {
    from{
        font-size: 200px;
        transform: rotateX(0deg);
    }
    50%{
        font-size: 90px;
        transform: rotateX(0deg);
    }
    to{
        transform: rotateX(90deg);
    }
}
@keyframes flip2 {
    from{
        transform: rotateX(90deg);
    }
    60%{
        transform: rotateX(90deg);
    }
    to{
        transform: rotateX(0deg);
    }
}
</style>