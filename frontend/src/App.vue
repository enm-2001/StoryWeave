<template>
<div id="app">
    <!-- <NavBar /> -->
    <router-view></router-view>
  </div>
 
<!-- <SignIn />  -->
<!-- <DashBoard/>
<hr style="width:90%">
<DashboardBottom/> -->
<!-- <ReadStory/> -->
</template>

<script>
 
// import SignIn from './components/SignIn.vue'  
// import ReadStory from './components/ReadStory.vue'
// import DashBoard from './components/DashBoard.vue'
// import DashboardBottom from './components/DashboardBottom.vue'
// import NavBar from './components/NavBar.vue'

export default {
    name: 'App',
    data(){
        return{
            userLogged: false
        }
    },
    components: {
        // SideBar,
        // ReadStory,
        // SignIn
    //     DashBoard,
    //    DashboardBottom,
    // NavBar
    },
  
}
</script>

<style>
.rwcomp{
    display:flex;
}
 
 #app {
   /*font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
   /*background-image: url('/home/hritika/Downloads/StoryWeave/frontend/src/assets/background.jpg');
    background-size: cover;
    font-size: 1.6rem;
    height: 100vh;
  
    margin: 0;
    padding: 0; */
}


</style>
