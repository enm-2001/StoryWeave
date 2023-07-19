<template>

    <div class="main-bg">
<div class="wrapper">

<h1>Continue this story</h1>
  
  <form class="form__contact" @submit.prevent="postStory">
    <fieldset>
      <p>Title of the story is <textarea cols="40"  class="form__field field--name" placeholder="storytitle" tabindex="1" v-model="story.title" readonly></textarea></p>
      <p>Story starts like this -><textarea rows="4" cols="40" class="form__field field--story" placeholder="story" tabindex="3" v-model="story.description" readonly>.</textarea></p>
      <p>Continue the story -><textarea rows="4" cols="40" class="form__field field--story" placeholder="story" tabindex="3" v-model="des">.</textarea></p>
         <span v-if="titleNotExist" style="color: red;">Please enter the details of your story..</span>
      <!-- <button type="submit" class="button button--xlarge" tabindex="4">Post it! &#187;</button> -->
         <input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
    <label for="modal-btn" style="align-items:right">Post it <i class="uil uil-expand-arrows"></i></label>
    <div class="modal">
        <div class="modal-wrap">
            <p>Do you want to also end this story ?</p>
            <button @click="postStory(1)" style="padding-right:50px" > Yes </button>
            <button @click="postStory(0)" style="padding-right:50px"> No </button>
        </div>
    </div>
    </fieldset>
  </form>
</div>

<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
  <defs>
    <filter id="blur0">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
    </filter>
    <filter id="blur1">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 5" />
    </filter>
    <filter id="blur2">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 10" />
    </filter>
    <filter id="blur3">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 15" />
    </filter>
    <filter id="blur4">
      <feGaussianBlur in="SourceGraphic" stdDeviation="0 20" />
    </filter>
  </defs>
</svg>

</div>
</template>

<script>
import router from "@/router/routes";
import axios from "axios";
import jwt_decode from 'jwt-decode';

export default {
  name: "ContinueStory",
  data() {
    return {
      story: {},
      storyId: false,
      titleNotExist: false,
      des: ""
    };
  },
  methods: {
    postStory(completed) {
      console.log(completed);
        console.log(this.story);
        const token = localStorage.getItem("token")
        const user = jwt_decode(token)
        const user_id = user.user_id;
        axios
          .post("http://localhost:5000/api/story/add", {
            story_id: this.story.story_id,
            des:this.des,
            user_id,
            completedstory : completed
          })
          .then((res) => {
            console.log("Story posted..", res);
            router.push("/profile");
          })
          .catch((err) => console.log(err));
    
    },
  },
  mounted(){
      const story_id = this.$route.params.story_id;
    axios
      .get(`http://localhost:5000/api/story/${story_id}`)
      .then((res) => (this.story = res.data));
    
  }
};
</script>

<style lang ="scss" scoped>


@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");


*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 1.7;
    color: #1f2029;
    background-color: #fff;
    overflow: hidden;
    background-image: url('https://assets.codepen.io/1462889/back-page.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 101%;
}

p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
    color: #1f2029;
}

.section {
    position: relative;
    width: 100%;
    display: block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
}

.full-height {
    min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

.modal-btn:checked+label,
.modal-btn:not(:checked)+label {
    position: relative;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 2;
    height: 50px;
    transition: all 200ms linear;
    border-radius: 4px;
    width: 240px;
    letter-spacing: 1px;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -ms-flex-pack: center;
    text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
    border: none;
    cursor: pointer;
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 12px 35px 0 rgba(16, 39, 112, .25);
}

.modal-btn:not(:checked)+label:hover {
    background-color: #ffeba7;
    color: #102770;
}

.modal-btn:checked+label .uil,
.modal-btn:not(:checked)+label .uil {
    margin-left: 10px;
    font-size: 18px;
}

.modal-btn:checked+label:after,
.modal-btn:not(:checked)+label:after {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 110;
    width: 40px;
    border-radius: 3px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    background-color: #ffeba7;
    color: #102770;
    content: "X";
    box-shadow: 0 12px 25px 0 rgba(16, 39, 112, .25);
    transition: all 200ms linear;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px);
}

.modal-btn:checked+label:hover:after,
.modal-btn:not(:checked)+label:hover:after {
    background-color: #102770;
    color: #ffeba7;
}

.modal-btn:checked+label:after {
    transition: opacity 300ms 300ms ease, transform 300ms 300ms ease, background-color 250ms linear, color 250ms linear;
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
}

.modal {
    position: fixed;
    display: block;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    overflow-x: hidden;
    background-color: rgba(31, 32, 41, .75);
    pointer-events: none;
    opacity: 0;
    transition: opacity 250ms 700ms ease;
}

.modal-btn:checked~.modal {
    pointer-events: auto;
    opacity: 1;
    transition: all 300ms ease-in-out;
}

.modal-wrap {
    position: relative;
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 4px;
    overflow: hidden;
    padding-bottom: 20px;
    background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199, 175, 189, .25);
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
}

.modal-wrap img {
    display: block;
    width: 100%;
    height: auto;
}

.modal-wrap p {
    padding: 20px 30px 0 30px;
}

.modal-btn:checked~.modal .modal-wrap {
    opacity: 1;
    transform: scale(1);
    transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
}

.logo {
    position: absolute;
    top: 25px;
    left: 25px;
    display: block;
    z-index: 1000;
    transition: all 250ms linear;
}

.logo img {
    height: 26px;
    width: auto;
    display: block;
    filter: brightness(10%);
    transition: filter 250ms 700ms linear;
}

.modal-btn:checked~.logo img {
    filter: brightness(100%);
    transition: all 250ms linear;
}

@media screen and (max-width: 500px) {
    .modal-wrap {
        width: calc(100% - 40px);
        padding-bottom: 15px;
    }

    .modal-wrap p {
        padding: 15px 20px 0 20px;
    }
}

@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400");
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");

$line-height: 40px;

::selection {
  color: #fff;
  background: #9fbe5a;
}

@media (max-width: 600px) {
  /* Adjust the max-width and padding for smaller screens */
  form__contact {
    max-width: 100%;
    padding: 0 10px; 
  }

 
  form__contact fieldset {
    font-size: 18px;
  }

 
}

@media only screen and (min-width: 600px) {
  form__contact {
    
    padding: 0 10px;
    width:100%; 
  }

  
  form__contact fieldset {
    font-size: 18px;
  }
}


@media only screen and (min-width: 768px) {
form__contact {
    max-width: 200px;
    width: 100px;
    display:flex;
  }


  form__contact fieldset {
    font-size: 18px;
  }

  svg {
  display: none;
}

}
.main-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;

  background-repeat: no-repeat;

  height: 100vh;

}

h1 {
  margin-bottom: 75px;
  padding: 0 20vw;
  font-family: Belanosima;
  font-size: 56px;
  text-align: center;
  color: #fff;
}

.form__contact {
  max-width: 800px;
  margin: 0 auto;
  border-left: 30px solid white;
  border-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI0MS44NnB4IiBoZWlnaHQ9IjUyLjMyNnB4IiB2aWV3Qm94PSIwIDAgNDEuODYgNTIuMzI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0MS44NiA1Mi4zMjYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDB2MjUuMTYzaDcuMDk3YzAuNTAxLTQuOTg5LDQuNzEyLTguODg0LDkuODMzLTguODg0YzUuNDU4LDAsOS44ODQsNC40MjUsOS44ODQsOS44ODRzLTQuNDI1LDkuODg0LTkuODg0LDkuODg0Yy01LjEyMSwwLTkuMzMyLTMuODk1LTkuODMzLTguODg0SDB2MjUuMTYzaDQxLjg2VjBIMHoiLz48L3N2Zz4=)
    5% 100% repeat;
  border-image-width: 0px 0px 0px 30px;
  transform: translateY(100%);
  animation: init 1s ease-in-out forwards;

  fieldset {
    position: relative;
    margin: 0;
    padding: 30px 30px $line-height 80px;
    border: none;
    border-radius: 0 20px 20px 0;
    font: 24px "Shadows Into Light", cursive;
    background: #fff linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 0) 0
      20px / 100% $line-height;

    &:after {
      position: absolute;
      top: 0;
      left: 50px;
      content: "";
      height: 100%;
      width: 1px;
      border-left: double #e08183;
    }
  } 
  
	p {
    margin: 0 0 $line-height 0;
    line-height: $line-height;
    color: #333;
  }

input,textarea{
  position: relative;
		line-height: $line-height;
    border: none;
  outline: none;
  background: none;
  padding: 0;
  margin: 0;
  color: #7DB665;
}

textarea{
 /* height: 50%;
  width: 100%;
  overflow-y: scroll; */
   resize: vertical; 
      overflow: auto;
  
}
	/*span {
		position: relative;
		line-height: $line-height;
	}*/

  button {
    margin-top: $line-height;
    float: right;
    border: none;
    font-family: "Shadows Into Light", cursive;
    color: #e08183;
    background: transparent;
    cursor: pointer;
    transition: transform 0.25s ease;

    &:hover {
      transform: translateX(10px);
    }
  }
}

.form__field::placeholder {
  color: silver; /* Replace with your desired color */
}

.form__field {
  display: inline;
  color: #7db665;
  outline: none;

  &:empty {
    display: inline-block;
    color: #7db665;
  }

  // Use a data-attr to replicate a placeholder
  &:empty,
  &:empty:focus {
    &:before {
      content: attr(placeholder);
    }
  }
}

/*Hide blur defs*/
svg {
  display: none;
}

@keyframes init {
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes do-blur {
  0% {
    filter: url(#blur4);
  }

  25% {
    filter: url(#blur3);
  }

  50% {
    filter: url(#blur2);
  }

  75% {
    filter: url(#blur1);
  }

  100% {
    filter: url(#blur0);
  }
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #537188;
  font-family: Belanosima;
  color: #fff;
  padding: 20px;
  font-size: 18px;
  height: 80px;
  margin: 0px;
  /*justify-items:start;*/
}

.navbar-logo {
  left: 20px;
  position: absolute;
  width: 60px;
  height: auto;
  margin-left: 0px;
  font-size: 50px;
}

.nav-links {
  right: 20px;
  position: absolute;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 20px;
}

.nav-links li {
  margin-left: 20px;
  padding: 10px;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}




</style>
