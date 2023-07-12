<template>
    <div class="main-bg">
        <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <input type="text" class="card-title">
    <textarea class="card-text"></textarea>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>

<script>
    export default {
        name: 'StartStory'
    }
</script>

<style scoped>
.main-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  /* height: 100%;
  width: 100%; */
  background-repeat: no-repeat;
  /* opacity: 2;
    filter: blur(3px);
    -webkit-filter: blur(3px); */
  height: 100vh;
  width: 200vh;
}

.card{
    height: 500px;
    width: 600px;
    border-radius: 5px;
  margin: 20px auto;
  background-color: F9F5F6;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-family: Avenir, Helvetica;
    color: #2c3e50;
     border-radius: 15px;
   /*  margin:12px; */
     padding:0px;
}
</style>