<template>

  <section class="src-components-navegador">
    
    <div id="navigator">

      <button id="reset" @click="restart">New colors</button>
      <span id="message"> {{ mensaje }} </span>
      <button id="easy" :class="{ selected: !isHard }" @click="facil">easy</button>
      <button id="hard" :class="{ selected: isHard }" @click="dificil">hard</button>
    
    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navegador',
    props: ['restart','facil','dificil','mensaje','isHard'],
    mounted () {
      
    },
    data () {
      return {
        colorCount:6
      }
    },
    methods: {
        
    },

    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navegador {

  }
</style>
