<template>
  <div class="main">

    <div class="spinner-border" v-if="story_others.length == 0" role="status">
  <span class="visually-hidden"></span>
</div>
<div v-else>
    <div class="story-heading" >
      <p>{{ story_details.title }}</p>
    </div>
    <p class="started-by">Started by: {{ story_details.username }}</p>
    <!-- Story cards -->
    <div class="storycards" v-for="contribution in story_others" v-bind:key="contribution.contr_id">
        <div class="card">
            <div id="write-section">
                <div class="heading">
                    <div>
                        <p class="created-by">Line by @{{contribution.username}}</p>
                        <div class="date"> {{ contribution.date_contributed }}</div>
                    </div>
                    <div class="senti-badge">
                    <span class="badge" :style=" {'color': contribution.sentiment === 'POSITIVE' ? 'green' : '#cd4646' }">{{ contribution.sentiment  }}</span>
                </div>
                </div>
                <hr class="horizontal-line">
                <div class="storyline">
                    <p> {{ contribution.description }}
                    </p>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: 'ReadStory',
    data() {
        return {
            story_details: {},
            story_others: [],
        };
    },
    mounted() {

        const storyId = this.$route.params.storyId;
        // console.log(storyId);
        axios.get(`http://localhost:5000/api/readstory/${storyId}`)
            .then(res => {
                this.story_details = res.data.story_details;
                this.story_others = res.data.story_others;
            })
    }
}
</script>

<style scoped>
.senti-badge {
    margin-left: auto;
    margin-right: 0;
    float: right;
    font-size: 19px;
}

.badge {
    border-radius: 13px;
    padding: 9px;
    background: #5F7161;
}

.main {
    background-image: url("../assets/back1.jpeg");
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
}

.spinner-border{
    display: flex;
    margin: auto;
    height: 5rem;
    width: 5rem;
    color: #537188;
}
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
 background: #ccc;
}
.details {
  display: flex;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  background-color: #dbdfea;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
}

.story-heading,
.started-by {
  color: #537188;
  font-size: 25px;
  font-family: Belanosima;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
}

.story-heading {
  text-transform: uppercase;
  padding: 20px 20px 0px 20px;
}

.started-by {
  padding: 0px 20px 0px 20px;
}

.logo {
  width: 120px;
  height: 50px;
}

.icon {
  top: 20px;
  size: 20px;
}

.storycards {
  display: flex;
  align-items: center;
  justify-items: center;
}



.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ddd;
  margin: 17px;
  padding: 0px;
  align-items: right;
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
  padding: 0px;
}

.heading .story-title {
  color: #537188;
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

.date {
  font-size: 14px;
  color: gray;
  width: 6.5rem;
}

.storyline p {
  font-family: Belanosima;
  font-size: 17px;
  padding: 0px;
}

.created-by {
  margin-top: 5px;
  margin-bottom: 5px;
  color: gray;
  font-weight: bolder;
  font-size: 16px;
}
</style>
