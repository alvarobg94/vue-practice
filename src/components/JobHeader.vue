<template>

  <div class="topnav">
  
  <router-link to="/">Home</router-link> 
  <router-link to="/about">About</router-link>
  <router-link to="/jobagent">Job Agent</router-link>
  <div class="login-container">
    
      <button v-if="isLoggedIn" v-on:click="log_out">Log Out</button>
      <router-link v-if="isLoggedIn == false" to="/signup">Sign Up</router-link>
      <router-link v-if="isLoggedIn == false" to="/login">Log In</router-link>
      
    
  </div>
</div>
</template>

<script>
  export default {
    name: 'JobHeader',
    data() {
      return {
        username: '',
        password: '',
        useremail: ''
      }
    },
    computed: {
      isLoggedIn : function() { return this.$store.getters.isLoggedIn},
    },
    mounted() {},
    methods: {
      log_out : function() {
        this.$store.dispatch('logOut')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.topnav {
  overflow: hidden;
  background-color: white;
}

.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #2196F3;
  color: white;
}

.topnav .login-container {
  float: right;
}

.topnav input[type=text] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
  width:120px;
}

.topnav .login-container button {
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background-color: #555;
  color: white;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .login-container button:hover {
  background-color: green;
}

@media screen and (max-width: 600px) {
  .topnav .login-container {
    float: none;
  }
  .topnav a, .topnav input[type=text], .topnav .login-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type=text] {
    border: 1px solid #ccc;  
  }
}
</style>