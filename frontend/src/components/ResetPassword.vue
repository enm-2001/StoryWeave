<template>
<div class="mainbg">
    <div class="mainDiv">
        <div class="cardStyle">
            <form action="" method="post" name="signupForm" id="signupForm" @submit.prevent="reset">
                <img src="../assets/reset.png" id="signupLogo" style="width:60%;height:100px;"/>
                <h2 class="formTitle">
                    Reset Your Password
                </h2>
                <div class="inputDiv">
                    <label class="inputLabel" for="password">New Password</label>
                    <input type="password" id="password" name="password" v-model="password" required>
                </div>

                <div class="inputDiv">
                    <label class="inputLabel" for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" v-model="confirmPassword">
                </div>

                <div class="buttonWrapper">
                    <button type="submit" id="submitButton" class="submitButton pure-button pure-button-primary">
                        <span>Continue</span>
                       
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
</template>

<script>
import router from '@/router/routes';
import axios from 'axios';

export default {
    name: 'ResetPassword',
    data(){
      return{
        password: "",
        confirmPassword: ""
      }
    },
    methods:{
      reset(){
        if(this.password == this.confirmPassword){
          const token = this.$route.query.token
          axios.post("http://localhost:5000/api/resetPassword",{password: this.password, token: token})
          .then(res => {
            console.log(res);
            router.push("/login")
          })
          .catch(err => console.log(err))
        }
      }
    }
}
</script>

<style scoped>
.mainbg {
    background-image: url("../assets/back1.jpeg");
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    font-family: Belanosima;
}

label{
    font-size:20px;
}
.mainDiv {
    display: flex;
    min-height: 100%;
    align-items: center;
    justify-content: center;
  }

 .cardStyle {
    width: 500px;
    border-color: white;
    background: #fff;
    padding: 36px 0;
    border-radius: 4px;
    margin: 30px 0;
    box-shadow: 0px 0 2px 0 rgba(0,0,0,0.25);
  }
  
#signupLogo {
  max-height: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
}
.formTitle{
  font-weight: 600;
  margin-top: 20px;
  color: #2F2D3B;
  text-align: center;
  margin-bottom:20px;
}
.inputLabel {
  font-size: 16px;
  color: #555;
  margin-bottom: 6px;
  margin-top: 24px;
}
  .inputDiv {
    width: 70%;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
input {
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  border: solid 1px #ccc;
  padding: 0 11px;
}
input:disabled {
  cursor: not-allowed;
  border: solid 1px #eee;
}
.buttonWrapper {
  margin-top: 40px;
}
  .submitButton {
    width: 70%;
    height: 40px;
    margin: auto;
    display: block;
    color: #fff;
    background-color: #065492;
    border-color: #065492;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.035);
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
.submitButton:disabled,
button[disabled] {
  border: 1px solid #cccccc;
  background-color: #cccccc;
  color: #666666;
}


</style>
