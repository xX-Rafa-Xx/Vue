<template lang="html">
<div class="users">
    <h1>Componente del usuario</h1>
    <ul>
        <li v-for="use in user">
    {{use.name}} - {{use.email}} 
    <button v-on:click="deleteUser(user)">X</button>

        </li>
    </ul>
    <form v-on:submit.prevent="AddUsers">
        <input type="text" v-model="newUser.name" placeholder="escribe tu nombre ">
        <input type="email" v-model="newUser.email" placeholder="escribe tu nombre ">
        <button type="submit">Agregar</button>
    </form>
    <br>
</div>
</template>
<script>
export default{
data(){
    return{
        user: [ ],
        newUser: {}
    }
},
methods: {
AddUsers(){
    
        this.user.push(this.newUser);
        this.newUser = {};
},
deleteUser(user){
alert("estas por borrar uno de los simios ");
this.user.splice(this.user.indexOf(user), 1)

}
},
created(){
    console.log("Componente creado");
//pide datos a traves de http
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => this.user= resp.body);
}
}    
</script>

<style lang="css">
.users{
background-color:green;
color:honeydew;
padding: 20px;
}
</style>