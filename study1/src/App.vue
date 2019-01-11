<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="btn btn-primary">Button</button>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/empty">Empty</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
body {
    background-color: #eeeeee;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
  }
  
  nav {
    padding: 20px 20px 20px 0;
  }
</style>
