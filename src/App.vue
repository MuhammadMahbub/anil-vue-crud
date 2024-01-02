<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css">

  <img alt="Vue logo" src="./assets/logo.png" style="width: 100px;">

  <router-view />

  
</template>

<script>

export default {
  name: 'App'
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
.logo {
    width: 100px;
}
.register input, .login input{
    width: 400px;
    padding: 20px;
    display: block;
    margin: auto;
    border: 1px solid rgb(3, 63, 28);
    border-radius: 5px;
    padding-left: 10px;
    margin-bottom: 20px;
    font-size: large;
}
.register .button, .login .button {
    background-color: rgb(56, 187, 110);
    width: 400px;
    color: aliceblue;
}
</style>
