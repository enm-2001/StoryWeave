<template>
        <nav class="navbar">
      <div class="navbar-logo">
        StoryWeave
      </div>
      <ul class="nav-links">
      <div class="tool">
        <li>
         <router-link to="/notification"> <i class='fas fa-bell' style='font-size:25px'></i></router-link>
        </li>  
        </div>
        <li><a href="#">Hritika</a></li>
      
      </ul>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #537188;
   font-family: Belanosima;
  color: #fff;
  padding: 20px;
  font-size:18px;
  height: 80px;
  margin: 0px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);;
  /*justify-items:start;*/
}

.navbar-logo {
  left:20px;
  position: absolute;
  width: 60px;
  height: auto;
  margin-left: 0px;
  font-size:50px;
}

.nav-links {
    right: 20px;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size:20px;
}

.nav-links li {
  margin-left: 20px;
  padding:10px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}
</style>