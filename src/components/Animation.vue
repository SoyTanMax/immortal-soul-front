<template>
    <div class="name">
        <p class="bruce">bruce wayne</p>
        <p class="immortal">immortal soul</p>
    </div>
</template>

<script>
    export default {
        name: 'Animation'
    }
</script>

<style scoped>
.name{
    position: relative;
    z-index: 99;
    display: grid;
    place-items: center;
    min-width: 100%;
    animation: disappear 3s ease;
    animation-delay: 10s;
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
.bruce{
    animation: flip1 6s ease-out;
    transform: rotateX(90deg);
}
.immortal{
    animation: flip2 9s ease-in;
    transform: rotateX(0deg);
}





/* Animations */

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
@keyframes disappear {
    from{
        display: flex;
        opacity: 1;
    }
    to{
        display: none;
        opacity: 0;
    }
}
</style>