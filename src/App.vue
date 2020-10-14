<template>
  
  <div id="app">
    
    <Cabecera 
      :colorJugar="colorJugar"/>

    <Navegador 
      :mensaje="mensaje"
      :restart="restart"
      :facil="facil"
      :dificil="dificil"
      :isHard="isHard"
      />

    <Cuadrado 
      v-for="(color, index) in colors"
      :key="myKey(color)"
      :color="color" 
      :index="index" 
      :color-clikeado="colorclickeado"
      :conocerGanador="conocerGanador"
      :colors='colors'
      />

  </div>
  
</template>

<script>

import Cabecera from './components/Cabecera.vue'
import Navegador from './components/Navegador.vue'
import Cuadrado from './components/Cuadrado.vue'

export default {
  name: 'App',
  data () {

      return {

        isHard:true,
        colorJugar: {
           r: 0,
           g: 0,
           b: 0
        },
        colorclickeado:"",
        mensaje:"",
        colorCount:6,
        colors: []

      }
  },
  methods: {
        restart(){

            this.colors.splice(0, this.colors.length, ...this.createNewColors(this.colorCount));
            let pickedColor = this.colors[this.pickColor()];
            this.colorJugar.r = pickedColor.r;
            this.colorJugar.g = pickedColor.g;
            this.colorJugar.b = pickedColor.b;
            this.mensaje = "";

        },

        createRandomStringColor(){

            return {

                r: this.randomInt(),
                g: this.randomInt(), 
                b: this.randomInt()

            };

        },

        createNewColors(numbers){

            let arr = [];

            for (var i = 0; i < numbers; i++) {

                arr.push(this.createRandomStringColor());

            }

            return arr;

        }, 

        pickColor(){

            let quantity = 3;

            if (this.isHard) {

                quantity = 6;

            }

            return Math.floor(Math.random() * quantity );
        },

        facil(){

            if (this.isHard) {

                this.isHard = false;
                this.colorCount = 3;
                this.restart();

            }

        },

        dificil(){

            if (!this.isHard) {

                this.isHard = true;
                this.colorCount = 6;
                this.restart();

            }

        },

        randomInt(){

            return Math.floor(Math.random() * 256);

        },

        conocerGanador(colorcuadrado, cuadradoIndex){

            if(JSON.stringify(colorcuadrado) === JSON.stringify(this.colorJugar)){

                this.mensaje="Felicidades, ganaste!";

                for (let index = 0; index < this.colors.length; index++) {

                    Object.assign(this.colors[index], colorcuadrado);
                    
                  }

            }else{

                this.mensaje="Volver a intentar";
                this.colors[cuadradoIndex].r = 35;
                this.colors[cuadradoIndex].g = 35;
                this.colors[cuadradoIndex].b = 35;

            }
        },

        myKey(color){

            const randomNumber = Math.random() * 100000;
            return '' + randomNumber + color.r +color.g +color.b;

        }
        
    },
  components: {
    Cabecera,
    Navegador,
    Cuadrado
  }, 
  mounted() {
    this.restart()   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
