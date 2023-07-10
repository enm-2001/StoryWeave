<template>
    <SignIn />
</template>

<script>
import SignIn from './components/SignIn.vue'

export default {
    name: 'App',
    components: {
        SignIn
    }
}
</script>

<style>
#app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;*/
    background-image: url('./assets/background.jpg');
    background-size: cover;
    font-family: Tahoma;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}
</style>
