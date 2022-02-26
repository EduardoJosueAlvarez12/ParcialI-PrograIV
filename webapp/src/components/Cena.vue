<template>
<div :style="{'background-image':'url(https://th.bing.com/th/id/OIP._t5vLZe0bnht0b3lN_0J-QHaHa?pid=ImgDet&rs=1)'}">
    <div>
        
      <div class="container">
          <br>
                    <br>

         <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div class="col-sm-6" v-for="item in items" v-bind:key="item">
               <div class="card mb-4 rounded-3 shadow-sm">
                   <div class="card-header py-3">

                     <h4 class="my-0 fw-normal"><b>{{item.DayName1}}</b></h4>
                       </div>
                       
                         <div class="card-body">
                             <img v-bind:src="item.img" width="300" height="300">

                              <div class="text-center my-3">
                    <b-button v-b-popover.hover.top="item.valorCalorico" :title="item.nombre" class="btn btn-success">
                        Valores Nutricionales
                    </b-button>
                    </div>

                                <p class="card-text">
                                  <b>{{item.nombre1}}</b>
                               </p>
                             

                         </div>
                     </div>
                 </div>
             </div>
         </div>
         
    </div>
    </div>

</template>

<script>
import cenas from "../assets/cenas.json";
export default {
    name: "Cena",
    data() {
        return {
            items: cenas,
        };
    }
};
</script>
