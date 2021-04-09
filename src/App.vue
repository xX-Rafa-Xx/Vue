<template>
  <div id="app">
    <h1>Hola Mundo</h1>
    <nav>
      <ul>
        <li>
          <a href="#">Test</a>
        </li>
        <li>
          <a href="#">User</a>
        </li>

      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import Test from './components/Test.vue';
import User from './components/User.vue';
export default {  
  name: 'App',
  components: {
    Test,
    User
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
