<template>
  <div id="app">
      <b-navbar type="light" variant="light">
        <b-navbar-nav>
          <b-nav-item>   </b-nav-item>
          <b-nav-item to="/">Inicio</b-nav-item>
          <b-nav-item to="/about">Acerca de nosotros</b-nav-item>
          <b-nav-item to="/servicios">Servicios</b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item to="/desayuno">Desayuno</b-dropdown-item>
            <b-dropdown-item to="/almuerzo">Almuerzo</b-dropdown-item>
            <b-dropdown-item to="/cena">Cena</b-dropdown-item>
          </b-nav-item-dropdown>
                
          <b-nav-item to="/">Registro de glucosa</b-nav-item>
        </b-navbar-nav>
      
        <!-- Apartado de Fecha y hora -->
        <div>
          <!-- Boton en la Navbar -->
          <b-button id="sidebar-11" v-b-toggle.sidebar-1 class="btn btn-light" type="light">Fecha y hora</b-button>

          <!-- Sidebar -->
          <b-sidebar id="sidebar-1" title="Fecha y hora" shadow>
            <div class="px-3 py-2">
              <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                  
                  <!-- Hora -->
                  <div>
                  <b-col col lg="2"><b-time v-model="value" show-seconds locale="en">
                    <div class="d-flex" dir="ltr">
                      <b-button
                        size="sm"
                        variant="outline-danger"
                        v-if="value"
                        @click="clearTime"
                      >
                        Limpiar
                      </b-button>
                      <b-button
                        size="sm"
                        variant="outline-primary"
                        class="ml-auto"
                        @click="setNow"
                      >
                        Fijar
                      </b-button>
                    </div>
                  </b-time></b-col>
                  </div>

                  <p></p>

                  <!-- Fecha -->
                  <b-col cols="14" md="auto"><b-calendar block locale="en-US"></b-calendar></b-col>
                </b-row>
              </b-container>

              <!-- Imagen -->
              <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
            </div>
          </b-sidebar>
        </div>
      </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: null
      }
    },
    methods: {
      setNow() {
        const now = new Date()
        // Grab the HH:mm:ss part of the time string
        this.value = now.toTimeString().slice(0, 8)
      },
      clearTime() {
        this.value = ''
      }
    }
  }
</script>

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
#sidebar-11{
  color: rgb(131, 128, 128);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
