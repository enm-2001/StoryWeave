<template>
<div class="main-bg">
    <div class="container" :class="{ 'sign-up-active': signUp }">
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-left">
                    <h2>Welcome Back!</h2>
                    <p>Please login with your personal info</p>
                    <button class="invert" id="signIn" @click="signUp = !signUp">
                        Sign In
                    </button>
                </div>
                <div class="overlay-right">
                    <h2>Hello, Friend!</h2>
                    <p>Please enter your personal details</p>
                    <button class="invert" id="signUp" @click="signUp = !signUp">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>

      <form class="sign-up" @submit.prevent="validatePassword(formData.password)">
        <h2>Create Login</h2>
        <div>Use your account</div>
        <input
          type="text"
          placeholder="Name"
          v-model="formData.name"
          required
        />
        <input
          type="text"
          placeholder="Username"
          v-model="formData.username"
          v-on:blur="checkUserforSignup(formData.username)"
          required
        />
        <span v-if="userExists">Username already exists</span>
        <input
          type="email"
          placeholder="Email"
          v-model="formData.email"
          v-on:blur="validateEmail(formData.email)"
          required
        />
        <span v-if="!validEmail">Enter a valid email</span>
        <input
          type="password"
          placeholder="Password"
          v-model="formData.password"
        />
        <span v-if="containsSpecial">Password should not contain special characters</span>
        <span v-if="passwordNot8">Password should be at least 8 characters long</span>
        <span v-if="containsSpace">Password should not contain space</span>
        <button type="submit">Sign Up</button>
      </form>
      <form class="sign-in" @submit.prevent="checkUserforLogin">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <span v-if="!userExistsforLogin">User does not exist</span>
        <span v-if="incorrect">Incorrect Password</span>
        <input
          type="text"
          placeholder="Username"
          v-model="loginData.username"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="loginData.password"
        />
        <button class="forgotpass" @click="forgotPassword(loginData.username)">
          <a href="#">Forgot your password?</a>
        </button>
        <button type="submit">Sign In</button>
        or
      </form>
      <div class="glogin">
        <GoogleLogin :callback="callback" />
      </div>
    </div>
</div>
</template>

<script>
import router from "@/router/routes";
import axios from "axios";
import jwt_decode from "jwt-decode";

export default {
  data: () => {
    return {
      signUp: false,
      formData: {
        name: "",
        username: "",
        email: "",
        password: "",
      },
      loginData: {
        username: "",
        password: "",
      },
      incorrect: false,
      userExists: false,
      userExistsforLogin: true,
      validEmail: true,
      containsSpecial: false,
      passwordNot8: false,
      containsSpace: false
    };
  },
  methods: {
    validateEmail(email) {
      if (/^[^@]+@\w+(\.\w+)+\w$/.test(email)) {
        this.validEmail = true;
      } else {
        this.validEmail = false;
      }
    },
    validatePassword(password){
      console.log(password);
      var specialCharacters = "!#$%^&*()_+{}[]:;<>,.?~\\/`|-=";
      for(let i=0; i< password.length; i++){
        var char = password.charAt(i);
        if (specialCharacters.indexOf(char) !== -1 && char !== "@") {
          this.containsSpecial = true;
        }
      }
      if(password.length < 8){
        this.passwordNot8 = true
      }
      else if(password.includes(' ') != -1){
        this.containsSpace = true
      }
      console.log(this.containsSpecial, this.passwordNot8, this.containsSpace);
      this.signup();
    },
    signup() {
      // console.log(this.formData);
      console.log(this.containsSpecial, this.passwordNot8, this.containsSpace);
      if (!this.userExists && this.validEmail && !this.containsSpecial && !this.passwordNot8 && !this.containsSpace) {
        axios
          .post("http://localhost:5000/api/signup", this.formData)
          .then((res) => {
            // console.log(res);
            localStorage.setItem("token", res.data.token);
            router.push("/dashboard");
          })
          .catch((err) => console.log(err));
      }
    },
    
    checkUserforSignup(username) {
      axios
        .post("http://localhost:5000/api/checkUser", {
          username,
        })
        .then((response) => {
          if (response.data.exists) {
            this.userExists = true;
          } else {
            this.userExists = response.data.exists;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkUserforLogin() {
      axios
        .post("http://localhost:5000/api/checkUser", {
          username: this.loginData.username,
        })
        .then((response) => {
          if (response.data.exists) {
            this.userExistsforLogin = response.data.exists;
            this.checkPassword();
          } else {
            this.userExistsforLogin = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checkPassword() {
      axios
        .post("http://localhost:5000/api/login", this.loginData)
        .then((res) => {
          // console.log(res.data);
          if (!res.data.pcheck) {
            this.incorrect = res.data.pcheck;
            localStorage.setItem("token", res.data.token);
            router.push("/dashboard");
          } else {
            // console.log("incoreeer");
            this.incorrect = true;
          }
        })
        .catch((err) => console.log(err));
    },
    callback: (response) => {
      const token = jwt_decode(response.credential);

            const data = {
                name: token.given_name + " " + token.family_name,
                username: token.given_name + token.family_name,
                email: token.email,
            };
            axios
                .post("http://localhost:5000/api/googleLogin", data)
                .then((res) => {
                    localStorage.setItem("token", res.data.token);
                    router.push("/dashboard");
                })
                .catch((err) => console.log(err));
        },
        async forgotPassword(username) {
            if (username) {
                const response = await axios.post(
                    "http://localhost:5000/api/forgotpassword", {
                        username: username,
                    }
                );
                console.log(response);
            } else {
                alert("Enter username");
            }
        },
    },
    created() {
        const token = localStorage.getItem("token");
        if (token != null) {
            router.push("/dashboard");
        }
    },
};
</script>

<style lang="scss" scoped>
.glogin {
    z-index: 2;
    text-align: center;
    position: relative;
    width: 350px;
    top: 400px;
    border-radius: 15px;
    transition: all 0.5s ease-in-out;
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

.forgotpass {
    border: none;
    outline: none;
    background: none;
    padding: 0;
    margin: 0;
    text-transform: none;
    width: 200px;
}

.container {
    position: relative;
    width: 768px;
    height: 480px;
    border-radius: 10px;
    overflow: hidden;
    justify-content: center;
    box-shadow: 0 35px 60px rgba(0, 0, 0, 0.2), 0 35px 50px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to bottom, #efefef, #ccc);

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.5s ease-in-out;
        z-index: 100;
    }

    .overlay {
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        background: linear-gradient(to bottom right, #d2e9e9, #316b83);
        color: #fff;
        transform: translateX(0);
        transition: transform 0.5s ease-in-out;
    }

    @mixin overlays($property) {
        position: absolute;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        padding: 70px 40px;
        width: calc(50% - 80px);
        height: calc(100% - 140px);
        text-align: center;
        transform: translateX($property);
        transition: transform 0.5s ease-in-out;
    }

    .overlay-left {
        @include overlays(-20%);
        height: 100%;
        width: 50%;
    }

    .overlay-right {
        @include overlays(0);
        right: 0;
        height: 100%;
        width: 50%;
    }
}

h2 {
    margin: 0;
    font-size: 35px;
}

p {
    margin: 20px 0 30px;
    font-size: 25px;
}

a {
    color: blue;
    text-decoration: underline;
    margin: 15px 0;
    font-size: 1.5rem;
}

button {
    border-radius: 20px;
    border: 1px solid #316b83;
    background-color: #316b83;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 40px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.1s ease-in;

    &:active {
        transform: scale(0.9);
    }

    &:focus {
        outline: none;
    }
}

button.invert {
    background-color: transparent;
    border-color: #fff;
}

form {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 90px 60px;
    width: calc(50% - 120px);
    height: calc(100% - 180px);
    text-align: center;
    background: linear-gradient(to bottom, #efefef, #ccc);
    transition: all 0.5s ease-in-out;

    div {
        font-size: 1.5rem;
    }

    input {
        background-color: #eee;
        border: none;
        padding: 8px 15px;
        margin: 6px 0;
        width: calc(100% - 30px);
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
            0 1px 0 #fff;
        overflow: hidden;

        &:focus {
            outline: none;
            background-color: #fff;
        }
    }
}

.sign-in {
    left: 0;
    z-index: 2;
    height: 100%;
    width: 50%;
}

.sign-up {
    left: 0;
    z-index: 1;
    opacity: 0;
    height: 100%;
    width: 50%;
}

.sign-up-active {
    .sign-in {
        transform: translateX(100%);
    }

    .sign-up {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.5s;
    }

    .glogin {
        transform: translateX(100%);
    }

    .overlay-container {
        transform: translateX(-100%);
    }

    .overlay {
        transform: translateX(50%);
    }

    .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        transform: translateX(20%);
    }
}

@keyframes show {
    0% {
        opacity: 0;
        z-index: 1;
    }

    49% {
        opacity: 0;
        z-index: 1;
    }

    50% {
        opacity: 1;
        z-index: 10;
    }
}

@media (max-width: 998rem) {
    html {
        font-size: 55%;
    }
}

@media only screen and (max-width: 768rem) {
    input {
        background-color: #eee;
        border: none;
        margin: 6px 0;
        width: 10rem;
        border-radius: 15px;
        border-bottom: 1px solid #ddd;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
            0 1px 0 #fff;
        overflow: hidden;
    }

    button {
        border-radius: 20px;
        border: 1px solid #316b83;
        background-color: #316b83;
        color: #fff;
        font-size: 1rem;
        font-weight: bold;
        padding: 5px 10px;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        transition: transform 0.1s ease-in;
        width: 10rem;

        &:focus {
            outline: none;
        }
    }

    p {
        margin: 20px 0 30px;
        font-size: 20px;
    }

    a {
        color: #222;
        text-decoration: none;
        margin: 15px 0;
        font-size: 1rem;
    }

    h2 {
        margin: 0;
        font-size: 25px;
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

    container {
        position: absolute;
        width: 100vh;
        height: 480px;
        border-radius: 10px;
        overflow: hidden;
        justify-content: center;
        box-shadow: 0 35px 60px rgba(0, 0, 0, 0.2), 0 35px 50px rgba(0, 0, 0, 0.2);
        background: linear-gradient(to bottom, #efefef, #ccc);

        .overlay-container {
            position: relative;
            top: 0;
            left: 50%;
            width: 50%;
            height: 100%;
            overflow: hidden;
            transition: transform 0.5s ease-in-out;
            z-index: 100;
        }

        .overlay {
            position: relative;
            left: -100%;
            height: 100%;
            width: 200%;
            background: linear-gradient(to bottom right, #d2e9e9, #316b83);
            color: #fff;
            transform: translateX(0);
            transition: transform 0.5s ease-in-out;
            padding-left: 100px;
            margin-left: 100px;
        }

        @mixin overlays($property) {
            position: absolute;
            top: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            padding: 70px 40px;
            width: calc(50% - 80px);
            height: calc(100% - 140px);
            text-align: center;
            transform: translateX($property);
            transition: transform 0.5s ease-in-out;
        }

        .overlay-left {
            @include overlays(-20%);
            height: 100%;
            width: 50%;
        }

        .overlay-right {
            @include overlays(0);
            right: 0;
            height: 100%;
            width: 50%;
        }
    }
}
</style>
