<template>
        <div class="coin flip silver"></div>
</template>

<style scoped>
.coin {
  height: var(--coin-size);
  width: var(--coin-size);
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.coin::before {
  content: '';
  display: block;
  position: relative;
  width: var(--coin-size);
  border-radius: 50%;
  background-color: var(--face);
  animation: spin 2.5s linear infinite;
  background-image: var(--coin-face);
  background-size: 100% 100%;
  background-position: center;
  background-blend-mode: overlay;
}
.coin.flip::before {
  animation-name: flip;
}
.coin.silver::before {
  filter: saturate(0);
  animation-delay: -0.5s;
}
/* animation definitions */

@keyframes flip {
  0% {
    height: var(--coin-size);
    box-shadow:
      0 0 0 var(--side-dark);
    animation-timing-function: ease-in;
  }
  
  49.999% {
    height: 0.1rem;
    box-shadow:
      0 0.05rem 0 var(--side),
      0 0.1rem 0 var(--side),
      0 0.15rem 0 var(--side),
      0 0.2rem 0 var(--side),
      0 0.25rem 0 var(--side),
      0 0.3rem 0 var(--side),
      0 0.35rem 0 var(--side),
      0 0.4rem 0 var(--side),
      0 0.45rem 0 var(--side),
      0 0.5rem 0 var(--side),
      0 0.55rem 0 var(--side),
      0 0.6rem 0 var(--side),
      0 0.65rem 0 var(--side),
      0 0.7rem 0 var(--side),
      0 0.75rem 0 var(--side);
    transform: translateY(-0.375rem);
    background-color: var(--lowlight);
    animation-timing-function: linear;
  }
  
  50.001% {
    height: 0.1rem;
    box-shadow:
      0 -0.05rem 0 var(--side),
      0 -0.1rem 0 var(--side),
      0 -0.15rem 0 var(--side),
      0 -0.2rem 0 var(--side),
      0 -0.25rem 0 var(--side),
      0 -0.3rem 0 var(--side),
      0 -0.35rem 0 var(--side),
      0 -0.4rem 0 var(--side),
      0 -0.45rem 0 var(--side),
      0 -0.5rem 0 var(--side),
      0 -0.55rem 0 var(--side),
      0 -0.6rem 0 var(--side),
      0 -0.65rem 0 var(--side),
      0 -0.7rem 0 var(--side),
      0 -0.75rem 0 var(--side);
    transform: translateY(0.375rem);
    background-color: var(--lowlight);
    animation-timing-function: ease-out;
  }
  
  100% {
    height: var(--coin-size);
    box-shadow:
      0 0 0 var(--side-dark);
  }
}

@media screen and (max-width: 1023px) {

}
</style>