<template>
<div>
    <div class="readstory" v-if="this.startedStories.length != 0">
        <h2>READ</h2>
        <div class="storycards" v-for="story in startedStories" :key="story.story_id" @click="readStory(story.story_id)">
            <div class="cardc" v-if="story.completedstory == 1">
                <div id="write-section">
                    <div class="heading">
                        <p class="created-by">Created by @{{ story.username }}</p>
                        <div class="story-title">{{ story.title }}</div>
                    </div>
                    <hr class="horizontal-line" />
                    <div class="previous-line">
                        <p>{{ story.description }}</p>
                    </div>
                </div>
            </div>
            <div class="cardc" v-else>
                <div id="write-section">
                    <div class="heading">
                        <p class="created-by">Created by @{{ story.username }}</p>
                        <div class="story-title">{{ story.title }}</div>
                    </div>
                    <hr class="horizontal-line" />
                    <div class="previous-line">
                        <div class="pheading">
                            Previous line by @{{ story.last_line_contributor }}
                        </div>
                        <p>{{ story.description }}</p>
                    </div>
                    <hr class="horizontal-line" />
                    <button id="add-line-button" @click="continueStory(story.story_id)">
                        <i class="glyphicon glyphicon-plus"></i>
                        Add New Line
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import jwt_decode from "jwt-decode";
export default {
    name: "StartedStories",
    data() {
        return {
            startedStories: [],
        };
    },
    mounted() {
        const token = localStorage.getItem("token");
        try {

            const user = jwt_decode(token);
            const user_id = user.user_id;
            axios
                .get(`http://localhost:5000/api/users/startedstories/${user_id}`)
                .then((res) => {
                    this.startedStories = res.data;
                })
                .catch((err) => console.log(err));
        } catch (error) {
            const status = error.response.status
            if (status === 403) {
                alert("Invalid token...Please login again")
                localStorage.clear("token")
                router.push("/login")
            } else if (status === 401) {
                alert("No token provided... Please login")
                router.push("login")
            } else {
                console.error('Unexpected Error:', error);
                // Handle other unexpected errors here, if necessary
            }
        }
    },
};
</script>

<style scoped>
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
