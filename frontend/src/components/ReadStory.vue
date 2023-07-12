<template>
<div class="main">


<!-- navbar -->
  <header class="header">
    <div > <img class="logo" src="../assets/title.png" alt="Logo" /></div>
      <nav class="details">
        <div class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg></div>
          <img src="../assets/4.png" alt="Avatar" class="avatar">
        
      </nav>
    </header>

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
