<template>
  <nav class="navbar navbar-expand-lg " style="background-color: #0095ff;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="./assets/car-arrow-right.png" alt="Logo" width="30" height="30" >EasyPark</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item"> 
          <router-link class="nav-link custom-link" aria-current="page" to="/"><img src="./assets/home-circle.png" alt="home" width="25" height="25" class="home-icon"> Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-link" to="/about">about</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-link" to="/saidalist"> <img src="./assets/card-account-details-outline.png" alt="home" width="25" height="25" class="home-icon">Saida</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link custom-link" to="/marcalist">marca</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <router-view />
</template>

<style lang="scss">
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";
@import "../node_modules/bootstrap/scss/bootstrap";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      background-color: #ffffff;
    }
  }
}

.custom-link {
  display: flex;
  align-items: center;
  color:  #000000;
  font-weight: bold;
}

.home-icon {
  margin-right: 5px;
}
</style>
