<template>
  <div id="topnav">
    <router-link to="/jobagent/">Main</router-link>
    <router-link to="/jobagent/list">Job List</router-link>
    <router-link to="/jobagent/status">Applications</router-link>
    <router-link to="/jobagent/statistics">Statistics</router-link>
    <router-link to="/jobagent/network">Network</router-link>
    <router-link to="/jobagent/devtasks">Dev Tasks</router-link>
  
  </div>
  

</template>

<script>
  export default {
    name: 'TopBar',
    data() {
      return {}
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#topnav {
  background-color: #ffffff;
  overflow: hidden;
  border-style: solid;
  border-color: #047c18;
}

/* Style the links inside the navigation bar */
#topnav a {
  float: left;
  color: #047c18;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
#topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */

#topnav a.router-link-exact-active {
  background-color: #047c18;
  color: white;
}
</style>