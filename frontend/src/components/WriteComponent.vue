<template>
    <!-- <div class="img-container">
        <img src="../assets/logof.png"  class="logo-img"/>
    </div> -->
<!-- <h2>WRITE</h2>
<p>Stories in need of a line</p> -->

<div class="card">
  <div id="write-section">
  <div class="heading">

   <p class="created-by">Created by @leyrelineasrectas</p>


   <div class="story-title">LIFE IS A LIE </div>

   </div>
    <hr class="horizontal-line">
    <div class="previous-line">
      <div class ="pheading">Previous line by @Cyndallager</div>
      <p>In the land of Astraladia, where dreams danced on moonbeams and stars whispered ancient secrets, a humble farm boy gazed at the night sky with wide-eyed wonder. A shooting star streaked across the heavens. The boy heard a faint, ethereal voice beckoning him to follow the star.</p>
    </div>
    <hr class="horizontal-line">
    
      <button id="add-line-button">
      <i class="glyphicon glyphicon-plus"></i>

      Add New Line
      </button>

  </div>
</div>

</template>

<script>

export default {
    data: () => {
        return {
            signUp: false
        }
    }
}
</script>

<style>

.card {
  width: 43%;
  margin: 20px auto;
  background-color: F9F5F6;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-family: Avenir, Helvetica;
    color: #2c3e50;
     border-radius: 15px;
     padding:0px
}

.date{
    text-align:right;
}
.heading .story-title{
    color:#537188;
    font-weight: bolder;
    font-size: 19px;
}

#write-section {
  padding: 15px;
    font-family: Belanosima;;

  
}

.horizontal-line {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}

.previous-line .pheading{
  margin-top: 0;
  margin-bottom:0;
  color: gray;
}

.previous-line p{
    font-family: Belanosima;
      font-size: 17px;
}

button#add-line-button {
  background-color: #6096B4;
  color: white;
  border: none;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  font-weight:bold;
  border-radius: 10px;
}

button#add-line-button:hover {
  background-color: #537188;
}

.created-by {
  margin-top: 5px;
  margin-bottom:5px;
  color: gray;
  font-weight: bolder

}


</style>
