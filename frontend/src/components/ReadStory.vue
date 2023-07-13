<template>
<div class="main">




    <!-- Story Title -->
<div class="story-heading">
<p>WHO'S ON LUNCH DUTY</p>
</div>
<!-- Story cards -->
<div class="storycards">
  <div class="card">
  <div id="write-section">
  <div class="heading">
  <div>
   <p class="created-by">Line by @leyrelineasrectas</p>
  <div class="date"> 12/10/23</div>
  </div>
   <div class="avatar"></div> 
   </div>
    <hr class="horizontal-line">
    <div class="storyline">
     <p> In the land of Astraladia, where dreams danced on moonbeams and stars whispered ancient secrets, a humble farm boy gazed at the night sky with wide-eyed wonder. A shooting star streaked across the heavens. The boy heard a faint, ethereal voice beckoning him to follow the star.
    </p></div>
    
 

  </div>
</div>
</div>

</div>
</template>

<script>
export default {
  name: 'ReadStory',
  data() {
    return {
      
    };
  }
}
</script>

<style scoped>


.details{
    display:flex;
    align-items: center;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #DBDFEA;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}
.story-heading{
    color:#537188;
    font-size: 25px;
    font-family: Belanosima;
    display: flex;
    padding:20px;
    align-items: center;
    justify-content:center;
    font-weight:bolder;
    
}
.logo {
  width: 120px;
  height:50px;
}
.icon{
    top: 20px;
    size: 20px;
}

.storycards {
  display: flex;
  align-items: center;
  justify-items:center;
}

.heading{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd; 
  margin: 17px;
  padding: 0px;
    
    /*width:auto;*/
    align-items:right
}

.card {
  width: 43%;
  margin: 20px auto;
  background-color: F9F5F6;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-family: Avenir, Helvetica;
    color: #2c3e50;
     border-radius: 15px;
   /*  margin:12px; */
     padding:0px;
}


.heading .story-title{
    color:#537188;
    font-weight: bolder;
    font-size: 19px;
}

#write-section {
  padding: 15px;
        font-family: Belanosima;

}

.horizontal-line {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.date{
 font-size:14px;
 color:gray;
}
.storyline p{
    font-family: Belanosima;
      font-size: 17px;
      padding:0px;
}

.created-by {
  margin-top: 5px;
  margin-bottom:5px;
  color: gray;
  font-weight: bolder;
  font-size:16px;

}

</style>
