<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- BT - Adding new route - Step 3: Add router link to display a link to your new
              :to="{ name: 'Emails'}"
              :to - v-binding
              { name: "Emais"} - Pass in an object. This is better because later you can change the path without
              needing to change the name of your link
               -->
    <router-link :to="{ name: 'Emails'}">Emails</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
