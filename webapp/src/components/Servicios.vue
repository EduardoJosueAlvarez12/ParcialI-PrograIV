<template>
<body class="bg-light" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://thumbs.dreamstime.com/b/modelo-m%C3%A9dico-del-garabato-incons%C3%BAtil-45520678.jpg');">
  <div>
    <p></p>
    <div class="d-flex align-items-center mb-3">
      <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem" id="wrapper">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>

      <b-button class="ml-3" @click="startLoading()">Reload</b-button>
    </div>

    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%" animation="fade"></b-skeleton>
          <b-skeleton width="55%" animation="fade"></b-skeleton>
          <b-skeleton width="70%" animation="fade"></b-skeleton>
        </b-card>
      </template>
    
    <!-- Lo que va adentro del skeleton (lo que se carga en la pagina) -->
    <div>
      <b-card-group deck>
        <b-card title="Supervisión las 24 horas" img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0ply7-7b06c41b-3c56-4516-b346-b41c7ad019ba.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcGx5Ny03YjA2YzQxYi0zYzU2LTQ1MTYtYjM0Ni1iNDFjN2FkMDE5YmEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qtbJF7VENZWz-vpYfqf_5jBBeUVv2Iy3bbFZnPxUTBg" img-alt="Image" img-top>
          <b-card-text>
            En cualquier momento que deseen visitar nuestro sitio, tenemos cobertura las 24 horas del día, los 7 dias de la semana, esperando
            serles de ayuda en su vida diaria.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Twenty-four hour supervision.</small>
          </template>
        </b-card>

        <b-card title="Menús saludables" img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0plz9-5e7324ed-9b1f-4622-b224-a25be498a719.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcGx6OS01ZTczMjRlZC05YjFmLTQ2MjItYjIyNC1hMjViZTQ5OGE3MTkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0l1g0bhneNYXB8hJcd-b5TeZhlFwpnfiVBSm9DW7Dp8" img-alt="Image" img-top>
          <b-card-text>
            Proporcionamos menús saludables, tres tiempos al día: desayuno, almuerzo y cena, indicando los valores nutricionales
            de cada plato, para que cuiden más su salud.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Healthy menus.</small>
          </template>
        </b-card>

        <b-card title="Registro de glucosa" img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0plzv-22be0405-9d7a-4895-b779-2da741b0b68b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcGx6di0yMmJlMDQwNS05ZDdhLTQ4OTUtYjc3OS0yZGE3NDFiMGI2OGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MN5KD_S5NaQh3iYHPy9Lm5k32S6H4AD6E6QSiX5Tu2I" img-alt="Image" img-top>
          <b-card-text>
            Ofrecemos un registro de glucosa sanguínea que le proporcionará información útil para el control de la diabetes, asi
            mismo, podrá descargar sus registros con nuestra función de pdf.
          </b-card-text>
          <template #footer>
            <small class="text-muted">Glucose log.</small>
          </template>
        </b-card>
      </b-card-group>
    </div>
    </b-skeleton-wrapper>    
  </div>
</body>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 3
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
            }, 1000)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true
        this.loadingTime = 0
      }
    }
  }
</script>

<style>

#wrapper{
  color: rgb(231, 58, 58);
}
</style>