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
  -->
<div>
  {{msg}}
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
      showName: false,
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
        type: String 
      }
    }    
}
</script>

<style media="screen">
</style>
