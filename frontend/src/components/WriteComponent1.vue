
<template>
<div class="writestory" v-if="this.incompleteStories.length != 0">
    <div class="storycards" v-for="story in incompleteStories" :key="story.story_id">
        <div class="cardc" v-if="story.completedstory != 0">
            <div id="write-section">
                <div class="heading">
                    <p class="created-by">Created by @{{ story.creator }}</p>
                    <div class="story-title">{{ story.title }}</div>
                </div>
                <hr class="horizontal-line" />
                <div class="previous-line">
                    <p>{{ story.des }}</p>
                </div>


                <hr class="horizontal-line"> <button id="add-line-button" @click="continueStory(story.story_id)">
                    <i class="glyphicon glyphicon-plus"></i> Add New Line
                </button>

            </div>
        </div>
    </div>
</div>
</template>

 
<script>
import router from "@/router/routes";
export default {
    name: "WriteComponent1",
     props: ['incompleteStories', 'profile'],
    methods: {
     continueStory(story_id) {
            router.push(`/continuestory/${story_id}`)
        }
    },
};
</script>  

<style scoped>
  .writestory {
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







<!-- old code -->


<!-- <template>
<div class="writestory" v-if="this.incompleteStories.length != 0">

    <div class="storycards" v-for="story in incompleteStories" :key="story.story_id">
        <div class="card" v-if="story.completedstory != 1">
            <div id="write-section">
                <div class="heading">
                    <p class="created-by">Created by @{{story.creator}}</p>
                    <div class="story-title">{{ story.title }}</div>
                </div>
                <hr class="horizontal-line">
                <div class="previous-line">
                    <div class="pheading" v-if="this.profile == undefined">Previous line by @{{ story.last_line_contributor }}</div>
                    <p>{{ story.des }}</p>
                </div>
                <hr class="horizontal-line"> <button id="add-line-button" @click="continueStory(story.story_id)">
                    <i class="glyphicon glyphicon-plus"></i> Add New Line
                </button>
            </div>
        </div>
    </div>
</div>
</template> -->

<!--
<script>
import router from '@/router/routes';
export default {
    props: ['incompleteStories', 'profile'],
    methods: {
        continueStory(story_id) {
            router.push(`/continuestory/${story_id}`)
        }
    },
}
</script>



<style>
.writestory {
    width: 100vh;
}

.card {
    width: 80%;
    margin: 20px auto;
    background-color: F9F5F6;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    font-family: Avenir, Helvetica;
    color: #2C3E50;
    border-radius: 15px;
    padding: 0px
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

.date {
    text-align: right;
}

.heading .story-title {
    color: #537188;
    font-weight: bolder;
    font-size: 19px;
    text-transform: uppercase;
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

.previous-line .pheading {
    margin-top: 0;
    margin-bottom: 0;
    color: gray;
}

.previous-line p {
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
    font-weight: bold;
    border-radius: 10px;
}

button#add-line-button:hover {
    background-color: #537188;
}

.created-by {
    margin-top: 5px;
    margin-bottom: 5px;
    color: gray;
    font-weight: bolder
}
</style>
-->