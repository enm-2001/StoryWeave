<template>
<div class="readstory" v-if="this.completedStories.length != 0">
    <!-- <h2>READ</h2> -->
    <div class="storycards" v-for="story in completedStories" :key="story.story_id" @click="readStory(story.story_id)">
        <div class="cardc" v-if="story.completedstory != 0">
            <div id="write-section">
                <div class="heading">
                    <div>
                    <p class="created-by">Created by @{{ story.creator }}</p>
                           
                    <div class="story-title">{{ story.title }}</div> 
                </div>
                    <div class="senti-badge">

<span class="badge ">{{ story.sentiment }}</span>


</div>
                </div>
             
                <hr class="horizontal-line" />
                <div class="previous-line">
                    <p>{{ story.des }}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

 
<script>
import router from "@/router/routes";
export default {
    name: "ReadComponent1",
    props: ['completedStories'],
    methods: {
        readStory(story_id) {
            router.push(`/readstory/${story_id}`);
        },
    },
     data(){
return{
    sentiment: true
}
        },

        // mounted(){
        //     const storyId= 
        // }
};
</script>  
<style scoped>
.heading {
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
}
.senti-badge{
margin: auto;
margin-right: 0;
 float: right;
 font-size:19px;
}
.badge{
 border-radius: 13px;
 padding:9px;
 background: #5F7161;
}
  .readstory {
    width: 100vh;
  }

  .cardc {
      width: 80%;
      margin: 20px auto;
      background-color: F9F5F6;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      font-family: Avenir, Helvetica;
      color: #2C3E50;
      border-radius: 15px;
      /*  margin:12px; */
      padding: 0px;
      cursor: pointer;
  }

  h2 {
      margin-top: 20px;
      color: #537188;
      font-size: 25px;
      font-family: Belanosima;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bolder;
  }

  .storycards {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  .heading .story-title {
      color: #537188;
      font-weight: bolder;
      font-size: 19px;
      text-transform: uppercase;
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

  .previous-line p {
      font-family: Belanosima;
      font-size: 17px;
      padding: 0px;
  }

  .created-by {
      margin-top: 5px;
      margin-bottom: 5px;
      color: gray;
      font-weight: bolder;
  }
</style>
