<template>
  <div>
      <br>
    <h1>Opciones de Desayunos</h1>
    <br>
    <desayuno/>
  </div>
</template>
<script>
import Desayuno from "../components/Desayuno.vue";
export default {
  name: "DesayunoView",
  components: { Desayuno },
};
</script>