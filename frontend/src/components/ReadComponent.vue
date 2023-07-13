<template>

<div class="cardc">
  <div id="write-section">
  <div class="heading">
   <p class="created-by">Created by @leyrelineasrectas</p>
   <div class="story-title">WHO'S ON LUNCH DUTY</div>
   </div>
    <hr class="horizontal-line">
    <div class="previous-line">
     <p> In the land of Astraladia, where dreams danced on moonbeams and stars whispered ancient secrets, a humble farm boy gazed at the night sky with wide-eyed wonder. A shooting star streaked across the heavens. The boy heard a faint, ethereal voice beckoning him to follow the star.
    </p></div>
    
 

  </div>
</div>

</template>

<script>

export default {
    name: 'ReadComponent',
    data: () => {
        return {
           
        }
    }
    
}
</script>

<style scoped>


.cardc {
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
   /* font-family: Avenir, Helvetica; */
        font-family: Belanosima;

  
}

.horizontal-line {
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0;
}


.previous-line p{
    font-family: Belanosima;
      font-size: 17px;
      padding:0px;
}




.created-by {
  margin-top: 5px;
  margin-bottom:5px;
  color: gray;
  font-weight: bolder

}

</style>
