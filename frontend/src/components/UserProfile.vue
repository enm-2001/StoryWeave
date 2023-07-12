<template>
  <div class="dashboard">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-logo">
        StoryWeave
      </div>
      <ul class="nav-links">
      <div class="tool">
        <li>
        <a href="#"><i class='fas fa-bell' style='font-size:25px'></i></a></li>  
        </div>
        <li><a href="#">Hritika</a></li>
      
      </ul>
    </nav>

    <!-- Main content -->
    <div class="main-content">
      <div class="card-row">
        <!-- Card 1 -->
        <div class="card">
          <div class="content-row">
            <h3 class="card-title">Coins</h3>
            <p class="card-description">  <i class='fas fa-coins' style='font-size:35px'></i></p>
          </div>
          <div class="card-data"> <p>50</p></div>
        </div>

        <!-- Card 2 -->
        <div class="card">
          <div class="content-row">
            <h3 class="card-title">Stories created</h3>
            <p class="card-description"> <i class='fas fa-edit' style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>5</p></div>
        </div>

        <!-- Card 3 -->
       <div class="card">
          <div class="content-row">
            <h3 class="card-title">Stories updated</h3>
            <p class="card-description"> <i class='fas fa-pen' style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>8</p></div>
        </div>

      <!-- Card 4 -->
       <div class="card">
          <div class="content-row">
            <h3 class="card-title">Pending request</h3>
            <p class="card-description"> <i class="fa-sharp fa-solid fa-pen-fancy" style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>1</p></div>
        </div>
      </div>

 <div class="Stories">

  <div class="row">
    <div class="col-6">
     <div class="col-text"> Stories Started</div>
    </div>
    <div class="col-6">
      <div class="col-text">Stories Contributed</div>
    </div>
  </div>

<div class="row">
    <div class="col-6" style="width:100%;">
     <div> <ReadComponent style="width:100%;"/></div>
    </div>
    <div class="col-6">
      <div><ReadComponent style="width:100%;"/></div>
    </div>
  </div>
</div>


<div class="row">
  <div class="col-8"><chart-data></chart-data></div>

  <div class="col-4">
  
  <!-- <img src="../assets/illus2.png" alt="Italian Trulli" class="fixed-size-image"> -->

  </div>
</div>
      


      <!-- List View Builder 1 -->
      <!-- <div class="list-view">
        <h2 class="list-title">List View Builder 1</h2>
        <ul class="list-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div> -->

      <!-- List View Builder 2 -->
      <!-- <div class="list-view">
        <h2 class="list-title">List View Builder 2</h2>
        <ul class="list-items">
          <li>Item A</li>
          <li>Item B</li>
          <li>Item C</li>
        </ul>
      </div> -->
    </div>
  </div> 
</template>

<script>
import ReadComponent from './ReadComponent.vue';
import ChartData from './ChartData.vue';
export default {
    name: 'UserProfile',
    components:{
      ReadComponent,
      ChartData,
    }
   
}
</script>

<style scoped>
 .fixed-size-image {
      width: 100%; /* Set the desired width */
      height: 100%; /* Set the desired height */
    }

.col-text{
   font-family: Belanosima;
   color:#537188;
   font-size:30px;
   font-weight:bolder;
}
.col-6{
  padding-left:40px;
}
.col-8{
background-color:#537188;

}

.col-4{
  background-color:#537188;


}

.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #537188;
   font-family: Belanosima;
  color: #fff;
  padding: 20px;
  font-size:18px;
  height: 80px
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

.main-content {
  flex: 1;
  padding: 20px;
}

.row{
  display:flex;
  justify-content:space-between;
  width:100%;
  
}
.card-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  
}
.content-row  {
  display: flex;
  flex-wrap: wrap; 
justify-content: center;
 
  align-items:center;
 
/*   flex-direction: row;*/
padding:10px;

}

.card {
  width: calc(23% - 20px);
  height:200px;
  background-color: #537188;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  overflow: hidden;
  vertical-align:center;
  justify-items:center;
  padding:20px;
  font-family: Belanosima;
  color:white;
  display:flex;
}

.card-data{
font-size:55px;
display: flex;
margin: auto;
font-weight:bolder;
align-items:center;
justify-items:center;

}
.card:hover {
  transform: translateY(-5px);
}

.card-content {
  padding: 20px;
  text-align: center;
 justify-content: center;
}


.card-title {
  font-size: 30px;
  margin-bottom: 5px;
  padding-right:25px;
 
}


.list-view {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.list-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.list-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-items li {
  font-size: 16px;
  color: #666;
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
}

.list-items li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #333;
}

</style>
