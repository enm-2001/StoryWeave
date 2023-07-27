<template>
  <div v-if="this.completedStories.length == 0" class="spinner-border" role="status">
  <span class="visually-hidden"></span>
</div>
  <ReadComponent1 v-else :completedStories = "this.completedStories" style="width: 100%;"/>
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
  mounted() {
    // console.log("oooooooooooooooo");
    axios
      .get("http://localhost:5000/api/story/completed/readstory")
      .then((res) => {
        // console.log(res.data);
        this.completedStories = res.data
        // this.completedStories = res.data.map((item) => item.value);

        // console.log("commm",this.completedStories);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.spinner-border{
    display: flex;
    margin: auto;
    height: 5rem;
    width: 5rem;
    color: #537188;
}
</style>
