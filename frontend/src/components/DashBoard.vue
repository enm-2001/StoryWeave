<template>
    <div class="header">
    
    <div class="header-image">
    <div class="solidc">
      <!-- <img src="../assets/3.png" alt="Background Image" style="height:100%;width:100%"/> -->
      </div>
      <div class="header-content">
        <div class="logo">
          <img src="../assets/logof.png" alt="Company Logo"/>
        </div>
        <div class="text">
          <h1>A collaborative creative writing app where stories are built line by line. </h1>
          <h4>Contribute to multiplayer stories, seeing only what the previous author wrote. Modeled on the game exquisite corpse, each creation is gloriously unique</h4>
          <button>Start Story</button>
        </div>
      </div>
    </div>
    <nav>
      <!-- Navbar content here -->
    </nav>

    </div>
</template>

<script>
    export default {
        name: 'DashBoard'
    }
</script>

<style scoped>

.header{
    width: 100%;
}
.solidc{
    background-color:#537188;
}


.header-image {
  position: relative;
  height: 60vh; /* Adjust the height to occupy more than half of the screen */
  overflow: hidden; 
}

.header-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
  font-weight: bolder
}

.logo {
  margin-bottom: 10px;
}
.logo img {
max-width:300px;
height:auto;
}

.text {
  margin-bottom: 20px;
  font-family: Belanosima;
  font-weight:bolder;
}

.text h1 {
  margin-bottom: 20px;
  font-family: Belanosima;
  font-weight:bolder;
  font-size: 30px;
}

.text h4{
  margin-bottom: 20px;
  font-family: Belanosima;
  font-weight:bold;
  font-weight:28px;
}

button {
  background-color: #6096B4;
  color: white;
  border: none;
  padding: 12px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 17px;
  border-radius: 5px;
  cursor: pointer;
  font-weight:light;
  border-radius: 10px;
}

.header-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>