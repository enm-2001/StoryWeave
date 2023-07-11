<template>

 <header>
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
  </header>

<!--      
        Navigation
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ms-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        Masthead-->
      <!--  <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To Our Studio!</div>
                <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
            </div>
        </header>-->
        <!-- Services
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Commerce</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Responsive Design</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Web Security</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section> -->

   
    



</template>

<script>

export default {
    name: 'DashBoard',
    data: () => {
        return {
           
        }
    }
    
}
</script>

<style>
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

