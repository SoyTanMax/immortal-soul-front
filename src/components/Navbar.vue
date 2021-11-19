<template>
    <nav class="navbar is-info">
        <div class="navbar-start">
            <div class="navbar-item">
                <p>Immortal Soul</p>
            </div>
        </div>
        <div class="navbar-end">
            <router-link class="navbar-item" :to="{name: 'Home'}">Home</router-link>
            <router-link class="navbar-item" :to="{name: 'About'}">About</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
}
.navbar-end{

}
</style>