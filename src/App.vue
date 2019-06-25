<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/games">Games</router-link> |
      <router-link to="/games/create">Create Game</router-link> |
      <router-link to="/parks">Parks</router-link> |

      <div class="navbar" v-if="this.jwt === null">
        <router-link to="/signup">Sign Up</router-link> 
        |
      </div>
      <div class="navbar" v-if="this.jwt === null">
        <router-link to="/login">Login</router-link> 
        | 
      </div>
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

.navbar {
  display: inline-block;
}
</style>

<script>
  export default {
    data: function() {
      return {
        jwt: ''
      };
    },
    created: function() {
      this.jwt = localStorage.getItem("jwt");
    }
  };
</script>
