<template>

  <section class="src-components-cabecera">
    
    <div id="header">

      <h1>
        The Great<br><span id="colorDisplay">rgb({{colorJugar.r}},{{colorJugar.g}},{{colorJugar.b}})</span><br>Guessing Game
      </h1>

    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-cabecera',
    props: ['colorJugar'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-cabecera {

  }

  #header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
</style>
