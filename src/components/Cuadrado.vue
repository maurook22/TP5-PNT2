<template>

  <section class="src-components-cuadrado">
    
    <div id="container">

      <div class="square" :style="{'background-color': backgroundColor}" @click="verColor"></div>

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-cuadrado',
    props: ['index','conocerGanador','color','colorclikeado'],
    mounted () {

    },
    data () {
      return {

        backgroundColor: `rgb(${this.color.r},${this.color.g},${this.color.b})`

      }
    },
    methods: {
      
      verColor(){

            this.conocerGanador(this.color, this.index);

        }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cuadrado {

  }
</style>
