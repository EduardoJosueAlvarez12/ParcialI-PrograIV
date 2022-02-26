<template>
  <div id="root" :style="{'background-image':'url(https://th.bing.com/th/id/OIP._t5vLZe0bnht0b3lN_0J-QHaHa?pid=ImgDet&rs=1)'}">
    <div class="container">
      <br>
                    <br>
      <!--Agregamos las cards de los integrantes del equipo-->
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

        <div class="col-sm-6" v-for="persona in personas" v-bind:key="persona">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ persona.name }}</h4>
                </div>
                
                <div class="card-body">
                    <img v-bind:src="persona.foto" width="300" height="300">

                    <p class="card-text">
                        {{ persona.description }}
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import nosotros from "../assets/nosotros.json";

export default {
  name: "about",
  data() {
    return {
      personas: nosotros,
    };
  },
 
};
</script>