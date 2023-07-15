<template>
  <!-- Navbar -->

  <!-- -->
  <!-- <div class="card">
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
    </div> -->
    <div class="main-bg">
<div class="wrapper">
<h1>Start your story!!</h1>

  
  <form class="form__contact" @submit.prevent="postStory">
    <fieldset>
      <p>Title of the story is <input class="form__field field--name" placeholder="storytitle" tabindex="1" v-model="story.title" ></p>
      <p>Story starts like this -><textarea rows="8" cols="60" class="form__field field--story" placeholder="story" tabindex="3" v-model="story.description"></textarea>.</p>
      <button type="submit" class="button button--xlarge" tabindex="4">Post it! &#187;</button>
    </fieldset>
  </form>
</div>

    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
    >
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
import jwt_decode from "jwt-decode";

export default {
  name: "StartStory",
  data() {
    return {
      story: {
        title: "",
        description: "",
      },
      storyId: false,
      titleNotExist: false,
    };
  },

  methods: {
    postStory() {
      // console.log(this.story);
      if (this.story.title != "" || this.story.description != "") {
        console.log("----------");

        const token = localStorage.getItem("token");
        try {
          const user = jwt_decode(token);
        const user_id = user.user_id;
          console.log("Decoded token:", user);
          axios
          .post("http://localhost:5000/api/story/create", {
            story: this.story,
            user_id,
          })
          .then((res) => {
            console.log(res.data);
             
              console.log("Story posted..", res);
              router.push("/profile");
            
          })
          .catch((err) => {
            console.log("errrrrrr===", err)
            if (
              err.response.status == 401 ||
              err.response.status == 403
            ) {
              localStorage.clear("token")
              router.push("/login");
            }
          });
        } catch (error) {
          console.error("Failed to decode token:", error);
          localStorage.clear("token")
          router.push("/login")
        }
        
      } else {
        this.titleNotExist = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400");
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");

$line-height: 40px;

::selection {
  color: #fff;
  background: #9fbe5a;
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
  width: 200vh;
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
