<template>
  <div class="main-bg">
    <div class="card">
      <div class="card-header">Start your Story</div>
      <div class="card-body">
        <input
          type="text"
          placeholder="Title of Story"
          class="card-title"
          v-model="story.title"
          required
        /><br />
        <span v-if="titleNotExist" style="color: red;">Please enter the details of your story..</span>
        <textarea
          class="card-text"
          placeholder="Start you story...."
          v-model="story.description"
          required
        ></textarea
        ><br />
        <button @click="postStory()">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router/routes";
import axios from "axios";

export default {
  name: "StartStory",
  data() {
    return {
      story: {
        title: "",
        description: "",
      },
      titleNotExist: false
    };
  },
  methods: {
    postStory() {
      if (this.story.title != "" || this.story.description != "") {
        const user_id = JSON.parse(localStorage.getItem("user")).user_id;
        axios
          .post("http://localhost:5000/api/story/create", {
            story: this.story,
            user_id,
          })
          .then((res) => {
            console.log("Story posted..", res);
            router.push("/dashboard");
          })
          .catch((err) => console.log(err));
      } else {
        this.titleNotExist = true;
      }
    },
  },
  mounted(){
    if(this.$route.params.id != null){
      const story_id = this.$route.params.id;
    axios
      .get(`http://localhost:5000/api/story/${story_id}`)
      .then((res) => (this.story = res.data));
    }
  }
};
</script>

<style scoped>
.main-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  /* height: 100%;
  width: 100%; */
  background-repeat: no-repeat;
  /* opacity: 2;
    filter: blur(3px);
    -webkit-filter: blur(3px); */
  height: 100vh;
  width: 200vh;
}

.card {
  height: 400px;
  width: 600px;
  border-radius: 5px;
  margin: 20px auto;
  /* background-color: rgba(96, 150, 180, 0.8); */
  background-color: rgba(255, 255, 255, 0.8);
  /* background-color: F9F5F6; */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-family: Avenir, Helvetica;
  color: #2c3e50;
  font-size: 20px;
  border-radius: 15px;
  /*  margin:12px; */
  padding: 0px;
}

.card-header{
  color: #223e4d;
}
.card-title {
  width: 100%;
}

.card-text {
  width: 100%;
  height: 60%;
  overflow-y: scroll;
}

button {
  background-color: #6096b4;
  color: white;
  border: none;
  padding: 12px 12px;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  border-radius: 10px;
  display: flex;
  margin: auto;
  width: 20%;
}
</style>
