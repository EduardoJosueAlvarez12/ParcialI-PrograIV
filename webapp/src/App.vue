<template>
  <div id="app">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item>   </b-nav-item>
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/about">Acerca de nosotros</b-nav-item>
          <b-nav-item to="/">Servicios</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item to="/desayuno">Desayuno</b-dropdown-item>
            <b-dropdown-item to="/almuerzo">Almuerzo</b-dropdown-item>
            <b-dropdown-item to="/cena">Cena</b-dropdown-item>
          </b-nav-item-dropdown>
        
        <b-nav-item to="/">Registro de glucosa</b-nav-item>

        </b-navbar-nav>
      </b-navbar>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
