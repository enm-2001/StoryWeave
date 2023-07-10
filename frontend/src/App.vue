<template>
<div>
<!-- <SignIn /> --> 
<DashBoard/>
<ReadComponent/>
<WriteComponent/>
</div>
</template>

<script>
// import SignIn from './components/SignIn.vue'  
import ReadComponent from './components/ReadComponent.vue'
import WriteComponent from './components/WriteComponent.vue'
import DashBoard from './components/DashBoard.vue'

export default {
    name: 'App',
    components: {
        // SignIn
        DashBoard,
        ReadComponent,
        WriteComponent
    }
}
</script>

<style>
 /*
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;*/
   /* background-image: url('/home/hritika/Downloads/StoryWeave/frontend/src/assets/background.jpg');
    background-size: cover;
    font-family: Tahoma;
    font-size: 1.6rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
}*/


</style>
