<template>
  <div>
    <head>

    </head>
    <!-- El body cuenta con una imagen de fondo -->
    <body class="bg-light" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://www.nicepng.com/png/full/829-8298123_hd-pattern-design-background-images-hd-medical.png');">
      <div class="container">
        <main>
          <div class="py-5 text-center">
            <h2>Formulario de registro de glucosa</h2>
            <p class="lead">
              Llene el siguiente formulario para registrar su control de glucosa
            </p>
          </div>

          <div class="row g-5">
            <center>
              <div class="col-6">
                <h4 class="mb-3">Información a registrar</h4>
                <!-- Aquí empieza el formulario -->
                <form class="needs-validation">
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <label for="fecha" class="form-label">Fecha</label>
                      <!-- uso del v-model para obtener datos del form -->
                      <input
                        type="date"
                        v-model="fecha" 
                        class="form-control"
                        id="fecha"
                        placeholder="Fecha de la medición"
                        value=""
                        required
                      />
                      <div class="invalid-feedback">Fecha del registro</div>
                    </div>

                    <div class="col-sm-6">
                      <label for="hora" class="form-label">Hora</label>
                      <input
                        type="text"
                        v-model="hora"
                        class="form-control"
                        id="hora"
                        placeholder="Hora de la medición"
                        value=""
                        required
                      />
                      <div class="invalid-feedback">Hora</div>
                    </div>

                    <div class="col-12">
                      <label for="comida" class="form-label">Comida</label>
                      <input
                        type="email"
                        v-model="comida"
                        class="form-control"
                        id="comida"
                        placeholder="Ingrese la comida (Desayuno, Almuerzo o Cena)"
                        value=""
                        required
                      />
                      <div class="invalid-feedback">
                        Ingrese la comida
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="glucosa" class="form-label">Glucosa</label>
                      <input
                        type="text"
                        v-model="glucosa"
                        class="form-control"
                        id="glucosa"
                        placeholder="Ej: 98 mg/dL"
                        required
                      />
                      <div class="invalid-feedback">
                        Ingrese la medida de glucosa
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="insulina" class="form-label">Insulina</label>
                      <input
                        type="text"
                        v-model="insulina"
                        class="form-control"
                        id="insulina"
                        placeholder="Insulina"
                        required
                      />
                      <div class="invalid-feedback">Ingrese la insulina</div>
                    </div>

                    <div class="col-12">
                      <label for="carbohidratos" class="form-label"
                        >Carbohidratos</label
                      >
                      <input
                        type="text"
                        v-model="carbohidratos"
                        class="form-control"
                        id="carbohidratos"
                        placeholder="Ingrese los carbohidratos"
                        required
                      />
                      <div class="invalid-feedback">
                        Ingrese los carbohidratos
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="medicamentos" class="form-label"
                        >Otros medicamentos
                        <span class="text-muted">(Opcional)</span></label
                      >
                      <input
                        type="text"
                        v-model="meds"
                        class="form-control"
                        id="medicamentos"
                        placeholder="Otros medicamentos"
                      />
                      <div class="invalid-feedback">
                        Ingrese medicamentos adicionales
                      </div>
                    </div>
                  </div>

                  <hr class="my-4" />

                  <!-- butón que realiza el registro -->
                  <button
                    class="w-100 btn btn-primary btn-lg"
                    v-on:click="registrar()"
                  >
                    Ingresar el registro
                  </button>
                </form>
                <!-- final del formulario -->
                <hr class="my-4" />
              </div>

              <!-- El componente para crear la tabla e imprimirla -->
              <registro :rData="rData" />
            </center>
          </div>
        </main>
      </div>
    </body>
  </div>
</template>

<script>
import Registro from "../components/Registro.vue";

export default {
  name: "RegistroView",
  components: {
    Registro,
  },
  data() {
    return {
      //array para elementos registrados por el botón
      rData: [], 
      //variables que se manipulan con v-model
      fecha: "",
      hora: "",
      comida: "",
      glucosa: "",
      insulina: "",
      carbohidratos: "",
      meds: "",
    };
  },
  methods: {
    registrar() {
      this.rData.push({
        fecha: this.fecha,
        hora: this.hora,
        comida: this.comida,
        glucosa: this.glucosa,
        insulina: this.insulina,
        carbohidratos: this.carbohidratos,
        meds: this.meds,
      });

      //limpiar los campos
      this.fecha= "",
      this.hora= "",
      this.comida= "",
      this.glucosa= "",
      this.insulina= "",
      this.carbohidratos= "",
      this.meds= ""
    },
  },
};
</script>