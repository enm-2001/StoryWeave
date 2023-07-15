<template>
  <nav class="navbar">
    <div class="navbar-logo">
      StoryWeave
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/notification">
          <i class="fas fa-bell"></i>
        </router-link>
      </li>
      <li><a href="#">Hritika</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #537188;
    font-family: Belanosima;
    color: #fff;
    padding: 20px;
    font-size: 18px;
    margin: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  }

  .navbar-logo {
    flex: 1;
    font-size: 24px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
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

  /* Media Query */
  @media only screen and (max-width: 768px) {
    .navbar {
      flex-wrap: wrap;
      height: auto;
      padding: 10px;
      font-size: 14px;
    }

    .navbar-logo {
      flex-basis: 100%;
      text-align: center;
      margin-bottom: 10px;
    }

    .nav-links {
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }

    .nav-links li {
      margin-left: 10px;
      padding: 10px;
    }
  }

  @media only screen and (max-width: 480px) {
    .navbar {
      flex-wrap: wrap;
      height: auto;
      padding: 10px;
      font-size: 14px;
    }

    .navbar-logo {
      flex-basis: 100%;
      text-align: center;
      margin-bottom: 10px;
    }

    .nav-links {
      flex-basis: 100%;
      justify-content: center;
      margin-top: 10px;
    }

    .nav-links li {
      margin-left: 10px;
      padding: 10px;
    }
  }
</style>
