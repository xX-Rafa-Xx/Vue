<template>
  <div>   
    <!--Funciona cuando el usuario da un click    
    <button type="button" v-on:click="saludar(message)">
        SAY HI ME
    </button>
    <input v-model = "message" placeholder="Escribe tu nombre mi simio">
    
    <hr>
    -->

    <!--Funciona cuando el usuario está tipeando
    <input type="text" v-on:keyup.enter="typing">
    las directivas permiten decirle a Vue que interprete el texto como un html
    sirve para manipular el DOM
  -->
  <hr>
<!--  <div>{{tasks[0].title}}</div>  Accede al elemento y lo muestra como elemento no como objeto-->
 <!-- Muestra una lista de tareas mediante un ciclo for como una barra de navegación
  <ul>
    <li v-for="task in tasks">
      {{task.title}}
    </li>
  </ul>
  -->
  <hr>
  <div v-if="showName">
    <p>{{user}}</p>
  
</div>
<div v-else>
  <p>Eres falso mi vato</p>
</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Hola Vuejs",
      user: {
        firstName: "Fernando",
        lastName: "Jose",
      },
      myhtml: "<h2>Desde el html</h2>",
      showName: true,
      tasks: [
        { title: "Hoy no me quiero levantar" },
        { title: "hoy no cenaré" },
        { title: "hoy no dormiré" },
        { title: "hoy no me bañaré" }
      ]
    }
  },
  methods: {
   // saludar(message){
     //   alert("Hola "+message+" Mucho gusto");
    //},
    typing(e){
      console.log("Dio un enter");
    }
    },
     computed: {
      fullName(){
        return this.user.firstName + " " + this.user.lastName;
      }
    }, //para aceptar datos desde afuera
    props: {
      msg:{
        type: String, //debo declara un tipo de datos para poder identificar el tipo
        default: "Esto es un msj por default"
      }
    }    
}
</script>

<style media="screen">
.test{
  background-color: red;
}

</style>
