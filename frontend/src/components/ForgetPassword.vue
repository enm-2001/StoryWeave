<template>

<div class="mainbg">
<div class="form-gap"></div>
<div class="container">
	<div class="row">
		<div class="col-md-6 col-md-offset-2">
            <div class="panel panel-default  ">  
            <!-- -->
              <div class="panel-body">
                <div class="text-center">
                  <h3><i class="fa fa-lock fa-2x"></i></h3>
                  <h2 class="text-center">Forgot Password?</h2>
                  <p>You can reset your password here.</p>
                  <div class="panel-body">
    
                    <form id="register-form" role="form" autocomplete="off" class="form" method="post">
    
                      <div class="form-group">
                        <div class="input-group">
                          <span class="input-group-addon" style="padding-right:25px;"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
       
                          <input id="email" name="email" placeholder="email address" class="form-control"  type="email" style="width:30px;">
                        </div>
                      </div>
                      <div class="form-group">
                          <button type="submit">Reset Password</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
	</div>
</div>
</div>
</template>

<script>
export default {
    name: 'ForgetPassword',
    
}
</script>

<style scoped>

input{
  height: 40px;
}
.panel-body{
  border-radius: 28px;
  padding-top:20px;
  

}

button{
  background-color: #6096B4;
        color: white;
        border: none;
        padding: 10px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: light;
        border-radius: 8px;
      margin-top:20px;
}
.form-gap {
    padding-top: 70px;
}

.mainbg{
       background-image: url("../assets/back1.jpeg");
      background-repeat: no-repeat, repeat;
       background-position: center; /* Center the image */
  background-size: cover;
  height:100vh;
   font-family: Belanosima;
}

.container{
  margin: auto;
  width: 50%;
  padding-top: 50px;
  margin-top:50px;
  height:50%;
   
}

h2{
  font-size:25px;
}

p{
  font-size:15px;
}
</style>