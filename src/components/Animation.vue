<template>
    <div class="name">
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
    animation-delay: 5s;
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
.immortal{
    animation: shrink 5s ease-in;
}
/* Animations */
@keyframes shrink {
    from{
        font-size: 140px;
    }
    to{
        font-size: 90px;
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