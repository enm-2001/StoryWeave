<template>
<WriteComponent1 :incompleteStories="this.incompleteStories" />
</template>

<script>
// import router from '@/router/routes';
import axios from 'axios';
import WriteComponent1 from './WriteComponent1.vue';
export default {
    data: () => {
        return {
            signUp: false,
            incompleteStories: []
        };
    },
    components: {
        WriteComponent1
    },
    // props: ["username", "contributor"],
    // methods: {
    //     continueStory(story_id) {
    //         router.push(`/continuestory/${story_id}`);
    //     }
    // },    
    async mounted() {
        await axios.get("http://localhost:5000/api/story/uncompleted/writestory")
            .then(res => {
                this.incompleteStories = res.data;
            })
            .catch(err => console.log(err));
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
    ;
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
