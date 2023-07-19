<template>
  <ReadComponent1 :completedStories = "this.completedStories"/>
</template>


<script>
// import router from "@/router/routes";
import axios from "axios";
import ReadComponent1 from "./ReadComponent1.vue";
export default {
  name: "ReadComponent",
  data: () => {
    return {
      completedStories: [],
    };
  },
  components: {
    ReadComponent1
  },

//   props: ['username'],
//   methods: {
//     readStory(story_id) {
//       router.push(`/readstory/${story_id}`);
//     },
//   },
  async mounted() {
    await axios
      .get("http://localhost:5000/api/story/completed/readstory")
      .then((res) => {
        this.completedStories = res.data; 
        console.log("cccccccccommmmpppp",this.completedStories);
        // if(this.username != undefined){
        //     console.log("userrrrrrr",this.username);
        //     this.completedStories = this.completedStories.filter(story => story.username == this.username)
        // }
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
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
    color: #2c3e50;
    border-radius: 15px;
    padding: 0px;
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
