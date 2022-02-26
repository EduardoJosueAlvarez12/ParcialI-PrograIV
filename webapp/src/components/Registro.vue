<template>
  <div ref="content">
    <!-- Esta tabla se mostrará en la página -->
    <table class="table table-striped table-hover">
      <thead>
        <th>Fecha</th>
        <th>Hora</th>
        <th>Comida</th>
        <th>Glucosa</th>
        <th>Insulina</th>
        <th>Carbohidratos</th>
        <th>Otros medicamentos</th>
      </thead>
      <!-- uso de v-for para recorrer el array obtenido de props -->
      <tbody>
        <tr v-for="(data, index) in rData" v-bind:key="index">
          <td>{{ data.fecha }}</td>
          <td>{{ data.hora }}</td>
          <td>{{ data.comida }}</td>
          <td>{{ data.glucosa }}</td>
          <td>{{ data.insulina }}</td>
          <td>{{ data.carbohidratos }}</td>
          <td>{{ data.meds }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Se necesita colocar nuevamente la tabla -->
    <!-- el código en la siguiente etiqueta se renderizara solamenta dentro del pdf-->
    <VueHtml2pdf
      :manual-pagination="true"
      :enable-download="true"
      ref="DownloadComp"
    >
      <section slot="pdf-content">
        <h2>Libro de control de glucosa</h2>
        <hr class="my-4" />
        <table class="table table-striped table-hover">
          <thead>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Comida</th>
            <th>Glucosa</th>
            <th>Insulina</th>
            <th>Carbohidratos</th>
            <th>Otros medicamentos</th>
          </thead>
          <tbody>
            <tr v-for="(data, index) in rData" v-bind:key="index">
              <td>{{ data.fecha }}</td>
              <td>{{ data.hora }}</td>
              <td>{{ data.comida }}</td>
              <td>{{ data.glucosa }}</td>
              <td>{{ data.insulina }}</td>
              <td>{{ data.carbohidratos }}</td>
              <td>{{ data.meds }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </VueHtml2pdf>

    <hr class="my-4" />
    
    <!-- Este botón permite descarga la tabla como pdf -->
    <button class="w-100 btn btn-danger btn-lg" style="width:50%;" @click="downloadPDF">
      Descargar registro en PDF
    </button>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "Registro",
  props: ["rData"], //uso de la comunicación entre componentes
  components: {
    VueHtml2pdf,
  },
  methods: {
    downloadPDF() {
      this.$refs.DownloadComp.generatePdf();
    },
  },
};
</script>