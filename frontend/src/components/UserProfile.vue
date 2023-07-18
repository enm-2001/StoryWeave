<template>
  <div class="dashboard">

    <!-- Main content -->
    <div class="main-content">
      <div class="card-row" style="padding-bottom:0px">
        <!-- Card 1 -->
        <div class="card">
          <div class="content-row">
            <h3 class="card-title">Coins</h3>
            <p class="card-description">  <i class='fas fa-coins' style='font-size:35px'></i></p>
          </div>
          <div class="card-data"> <p>{{ details.coins }}</p></div>
        </div>

        <!-- Card 2 -->
        <div class="card">
          <div class="content-row">
            <h3 class="card-title">Stories created</h3>
            <p class="card-description"> <i class='fas fa-edit' style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>{{details.stories_created}}</p></div>
        </div>

        <!-- Card 3 -->
       <div class="card">
          <div class="content-row">
            <h3 class="card-title">Stories updated</h3>
            <p class="card-description"> <i class='fas fa-pen' style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>{{ details.stories_updated }}</p></div>
        </div>

      <!-- Card 4 -->
       <div class="card">
          <div class="content-row">
            <h3 class="card-title">Pending request</h3>
            <p class="card-description"> <i class="fa-sharp fa-solid fa-pen-fancy" style='font-size:35px'></i></p>
          </div>
                  <div class="card-data"> <p>{{ details.pending_requests }}</p></div>
        </div>
      </div>
     

 <div class="stories">


    <div class="col-6">
     <div class="col-text"> Stories Started</div>
    </div>
    <div class="col-6">
      <div class="col-text">Stories Contributed</div>
 
  </div>


    <div class="col-6" v-for="story in startedStories" :key="story.story_id">
     <div v-if="story.completedstory == 1"> <ReadComponent :username="username" style="width:100%;"/></div>
     <div v-else><WriteComponent :username="username" style="width:100%;"/></div>
    </div>
    <div class="col-6" v-for="story in contributedStories" :key="story.story_id">
      <div v-if="story.completedstory == 1"> <ReadComponent :username="username" style="width:100%;"/></div>
     <div v-else><WriteComponent :username="username" style="width:100%;"/></div>
  </div>
</div>


</div>
  </div> 
</template>

<script>
import axios from 'axios';
import ReadComponent from './ReadComponent.vue';
import WriteComponent from './WriteComponent.vue';
import jwt_decode from 'jwt-decode'
// import ChartData from './ChartData.vue';
export default {
    name: 'UserProfile',
    data(){
      return{
        details: {},
        startedStories : [],
        contributedStories: [],
        username : ""
      }
    },
    components:{
    ReadComponent,
    WriteComponent
},
    async mounted(){
      const token = localStorage.getItem("token")
      const user = jwt_decode(token)
      const user_id = user.user_id
      this.username = user.username
      console.log(user);

      const res = await axios.get(`http://localhost:5000/api/users/${user_id}`)
      this.details = res.data
      const res2 = await axios.get(`http://localhost:5000/api/users/startedstories/${user_id}`)
      this.startedStories = res2.data
      const res3 = await axios.get(`http://localhost:5000/api/users/contributedstories/${user_id}`)
      this.contributedStories = res3.data
    }
   
}
</script>

<style scoped>


@media only screen and (max-width: 600px) {
  .card {
    width: 100%;
  }

  .story-card{
    width:100%;
  }
}

.stories{
    display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

 .fixed-size-image {
      width: 100%; 
      height: 100%; 
    }

.col-text{
   font-family: Belanosima;
   color:#537188;
   font-size:30px;
   font-weight:bolder;
    display: flex;
    align-items: center;
    justify-content:center;

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

.main-content {
  flex: 1;
  padding: 20px;
  padding-bottom:0px;
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
  font-size: 25px;
  margin-bottom: 2px;
  padding-right:10px;
 
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

@media only screen and (min-width: 992px) {
.card {
  width:35vh;
  height:200px;
  background-color: #537188;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 20px;
  
  vertical-align:center;
  justify-items:center;
 
  font-family: Belanosima;
  color:white;
  display:flex;
}

.story-card{
    display:flex;
  justify-content:space-between;
  width:100%;
}
}





</style>
