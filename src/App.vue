<template>
  <div id="app">
    <h1>Hola Mundo</h1>
  <Test msg="Hola desde el componente padre"/>
  </div>
</template>

<script>
import Test from './components/Test.vue';
export default {  
  name: 'App',
  components: {
    Test
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
