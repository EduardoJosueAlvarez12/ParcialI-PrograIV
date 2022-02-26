<template>
<body class="bg-light" style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://thumbs.dreamstime.com/b/modelo-m%C3%A9dico-del-garabato-incons%C3%BAtil-45520678.jpg');">
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption="El mundo es eterno juntos"
        text="Mientras podamos seguir adelante con los demás"
        img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0pmq1-6fda8151-e409-4a38-b6fe-bfe0684e11d2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcG1xMS02ZmRhODE1MS1lNDA5LTRhMzgtYjZmZS1iZmUwNjg0ZTExZDIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GeBJRSJZesWYC3RzqZwdY0pSfpG9qCaLfZQ67NxyxvI"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0pmbz-ed307365-f1c4-4619-80ca-93d8c5f97515.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcG1iei1lZDMwNzM2NS1mMWM0LTQ2MTktODBjYS05M2Q4YzVmOTc1MTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RfnsKACmyI_DQ0obmDIcoh_wbYRMLDHQRncHUBkwDJY">
        <h1>Dios no nos ha abandonado aún</h1>
      </b-carousel-slide>

      <b-carousel-slide img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0pmd8-30204b98-539e-487b-8e2d-cc5ee8ac8585.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcG1kOC0zMDIwNGI5OC01MzllLTQ4N2ItOGUyZC1jYzVlZThhYzg1ODUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.H15Usf7uB_agkwIUF9mckB3xLuPO5muEutOwvjTnnP8"></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0pmec-dfee435c-b756-4fb1-8666-59ea4737e97c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcG1lYy1kZmVlNDM1Yy1iNzU2LTRmYjEtODY2Ni01OWVhNDczN2U5N2MucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.d2PUfbpqEeF_tHiXrRooEo_QHk2fSNoLyoIv0eqSHMI"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide caption="La vida suele ser dura" img-src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e6c8ebbf-54cd-405a-b6b2-507d0e1666e7/df0pmnp-0382c340-5a2c-466c-99d9-fa7496421ddd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2YzhlYmJmLTU0Y2QtNDA1YS1iNmIyLTUwN2QwZTE2NjZlN1wvZGYwcG1ucC0wMzgyYzM0MC01YTJjLTQ2NmMtOTlkOS1mYTc0OTY0MjFkZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iCr9ecXIEduVVwgM5pMjEmDwruvCyP6gDsqFhLe10tI">
        <p>
          Mientras no perdamos de vista el objetivo de la nuestra, podremos continuar sin problemas.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <!--espacio de la sección-->
    <section id="teSection">
      <br>
      <br>
      <br>
      <br>
      <h2>¡Bienvenidos a nuestro sitio!</h2>
      <p>Disfruten los servicios que ofrecemos para hacer de su vida un poco más fácil.</p>
      <br>
      <h5>¿Quieres conocer acerca de nosotros? Puedes ir al apartado Acerca de nosotros para conocer a los creadores del sitio.</h5>
      <h5>¿Te interesa nuestros servicios? En el apartado Servicios verán lo que ofrecemos como entidad y como sitio web.</h5>
      <br>
      <p>Recuerda fijar la hora y fecha de entrada para que quede registro de tu visita.</p>
      <br>
      <br>
      <br>
      <br>
    </section>

    <b-container fluid class="p-4 bg-dark">
    <b-row>
      <b-col>
        <b-img thumbnail fluid src="https://media.floresfrescasonline.com/c/category/flores-a-la-carta-250x250.jpg" alt="Image 1"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg/250px-Rosa_%27Ambiente%27%2C_Bad_W%C3%B6rishofen%2C_Alemania%2C_2019-06-20%2C_DD_25.jpg" alt="Image 2"></b-img>
      </b-col>
      <b-col>
        <b-img thumbnail fluid src="https://media.floresfrescasonline.com/c/category/flores-a-la-carta-250x250.jpg" alt="Image 3"></b-img>
      </b-col>
    </b-row>
  </b-container>

  <section id="teSection">
      <br>
      <br>
      <br>
      <br>
      <h5>Brindamos servicios integrales al adulto mayor para poder contribuir a su bienestar físico y mental,</h5>
      <h5>ofreciéndole un ambiente espiritual, familiar y de confort, permitiéndole así una mejor calidad de vida.</h5>
      <br>
      <h6>Con el compromiso y la responsabilidad de colaborar con las familias que nos brindan la oportunidad y la confianza de ser</h6>
      <h6>nosotros quienes velemos por el cuido de sus seres queridos, nos disponemos cada día como equipo a servir con un espíritu de alegría.</h6>
      <br>
      <h6>En una comunidad de retiro con cuidados continuos, el lugar donde usted vive depende del nivel de servicio que necesita.</h6>
        <h6>Las personas que ya no pueden vivir independientemente se trasladan al centro de vida asistida, o a veces reciben asistencia a</h6>
        <h6>domicilio en su casa o apartamento de vida independiente.
        Si es necesario, pueden ingresar al asilo de ancianos de la comunidad de retiro.</h6>
      <br>
      <p>Recuerden visitarnos pronto nwn</p>
      <br>
      <br>
      <br>
      <br>
    </section>
  </div>
</body>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'Inicio',
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
#teSection{
    font-size: 40;
}
</style>