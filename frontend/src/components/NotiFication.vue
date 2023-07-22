<template>
<div class="main">
    <div class="notification-heading">
        Notification
    </div>

    <div class="image-row" v-if="updated_stories.length == 0 && accepted_stories.length == 0">
    <div class="col-12">
        <img src="../assets/noti.png" alt="Company Logo" style="width:50%" class="center" />
    </div>

</div> 


    <div class="notification-sub" v-if="updated_stories.length != 0">
        Your stories
    </div>

    <!-- Notification for your stories -->
    <main>
        <ol class="gradient-list">
            <li v-for="story in updated_stories" :key="story.story_id">
                <div class="approval">
                    <div class="left-side">
                        <h3 style="text-transform: capitalize;">{{story.title}}</h3>
                        {{story.des}}
                    </div>
                    <div class="right-side">
                        <stronger><button @click="accept(story)"><i class="fa fa-check" style="font-size:35px;color:green;padding-right:15px;padding-top:10px;"></i></button></stronger>
                        <stronger> <button @click="reject(story.id)"><i class="fa fa-close" style="font-size:35px; color:red; padding-left:15px;padding-top:10px;"></i></button></stronger>
                    </div>
                </div>
            </li>
        </ol>
    </main>

    <div class="notification-sub" v-if="accepted_stories.length !=0">
        Your contributed Stories
    </div>

    <!-- Notification for contributed Story -->
    <div class="notifications-2">
        <ol class="gradient-list">
            <li v-for="notification in accepted_stories" :key="notification.contr_id">
                <div class="approval">
                    <div class="left-side">
                        Your contribution for story titled as "{{ notification.title }}" and you have been credited 5 coins for your contribution.
                    </div>
                </div>
            </li>
        </ol>
    </div>

</div>
</template>

<script>
import axios from 'axios';
import jwt_decode from 'jwt-decode'
export default {
    name: 'NotiFication',
    data() {
        return {
            updated_stories: [],
            accepted_stories: []
        }
    },
    methods: {
        accept(pstory) {

            axios.put("http://localhost:5000/api/story/update", {
                    story_id: pstory.story_id,
                    des: pstory.des,
                    completedstory: pstory.completedstory,
                    user_id: pstory.user_id,
                    pstory_id: pstory.id
                })
                .then(res => {
                    if (!res.error) {
                        this.updated_stories = this.updated_stories.filter(
                            story => story.id !== pstory.id
                        )
                    }
                })
                .catch(err => console.log(err))
        },
        reject(pstory_id) {
            axios.delete(`http://localhost:5000/api//story/${pstory_id}/delete`)
                .then(res => {
                    console.log(res.data);
                    this.updated_stories = this.updated_stories.filter(
                        story => story.id !== pstory_id
                    )
                })
                .catch(err => console.log(err))
        }
    },
    async mounted() {
        const token = localStorage.getItem("token")
        try{
           
        const user = jwt_decode(token)
        const user_id = user.user_id;
        await axios.get(`http://localhost:5000/api/story/pstory/${user_id}`)
            .then((res) => {
                console.log(res.data);
                this.updated_stories = res.data
            })
            .catch(err => console.log(err))
        await axios.get(`http://localhost:5000/api/story/acceptedStories/${user_id}`)
        .then((res1) => {
            console.log("res1",res1);
            this.accepted_stories = res1.data
        })
        .catch(err1 => console.log(err1))
        }
        catch (error) {
        if (error.name === 'Invalid token specified') {
          console.error('Invalid Token:', error.message);
          // Handle the error, e.g., show an error message to the user
          // or redirect to the login page if the token is invalid
        } else {
          console.error('Unexpected Error:', error);
          // Handle other unexpected errors here, if necessary
        }
      }
    },

}
</script>

<style lang="scss" scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  padding-top:20px;
}

@media only screen and (max-width: 767.98px) {
    .notification-heading {
        display: flex;
        align-items: center;
        font-size: 25px;
        font-family: Belanosima;
        font-weight: bolder;
        color: white;
        justify-content: center;

    }

    .notification-sub {
        display: flex;
        font-size: 10px;
        font-family: Belanosima;
        font-weight: bolder;
        color: white;
        justify-content: center;

    }
}

.notifications-2 {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    width: 60%;
    font-family: Belanosima;
}

.main {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;

}

.right-side {
    display: flex;
    margin: auto;
    justify-content: center;

}

button {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
}

.notification-heading {
    display: flex;
    align-items: center;
    font-size: 45px;
    font-family: Belanosima;
    font-weight: bolder;
    color: white;
    justify-content: center;
    padding-top: 10px;
}

.notification-sub {
    display: flex;
    font-size: 30px;
    font-family: Belanosima;
    font-weight: bolder;
    color: white;
    justify-content: center;

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
    height: 80px
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

$black: #1d1f20;
$blue: #83e4e2;
$green: #a2ed56;
$yellow: #fddc32;
$white: #fafafa;

%boxshadow {
    box-shadow: 0.15rem 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

main {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    width: 50%;
    font-family: Belanosima;

}

ol.gradient-list {
    counter-reset: gradient-counter;
    list-style: none;
    margin: 1.75rem 0;
    padding-left: 1rem;

    >li {
        background: white;
        border-radius: 0 0.5rem 0.5rem 0.5rem;
        @extend %boxshadow;
        counter-increment: gradient-counter;
        margin-top: 1rem;
        min-height: 3rem;
        padding: 1rem 1rem 1rem 3rem;
        position: relative;
        font-size: 14px;

        &::before,
        &::after {
            background: linear-gradient(135deg, $blue 0%, $green 100%);
            border-radius: 1rem 1rem 0 1rem;
            content: '';
            height: 3rem;
            left: -1rem;
            overflow: hidden;
            position: absolute;
            top: -1rem;
            width: 3rem;
        }

        &::before {
            align-items: flex-end;
            @extend %boxshadow;
            content: counter(gradient-counter);
            color: $black;
            display: flex;
            font: 900 1.5em/1 'Montserrat';
            justify-content: flex-end;
            padding: 0.125em 0.25em;
            z-index: 1;
        }

        @for $i from 1 through 5 {
            &:nth-child(10n+#{$i}):before {
                background: linear-gradient(135deg, rgba($green, $i * 0.2) 0%, rgba($yellow, $i * 0.2) 100%);
            }
        }

        @for $i from 6 through 10 {
            &:nth-child(10n+#{$i}):before {
                background: linear-gradient(135deg, rgba($green, 1 - (($i - 5) * 0.2)) 0%, rgba($yellow, 1 - (($i - 5) * 0.2)) 100%);
            }
        }

        +li {
            margin-top: 2rem;
        }
    }
}
</style>
