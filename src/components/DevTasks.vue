<template>
  <div>
    <table id='table'>
     <tr>
       <th>General</th>
       <th>Front-end</th>
       <th>Back-end</th>
     </tr>    
     <tr v-for="task in devdata" :key="task.id">
      <td>{{task.general}}</td>
      <td>{{task.front}}</td>
      <td>{{task.back}}</td>
     </tr>
    </table>
    <button v-on:click="toggleUser">Show users</button>
    <ul v-if="showUser">Here goes the list of users
      <p v-for="user in userlist" :key="user.id" >{{user.email}}</p>
    </ul>
    <button v-on:click="log_User">Who is logged in</button>
    <ul >Logged in user is:
      <p >Name: {{logUser.email}} number: {{logUser.userid}} is logged: {{isLoggedIn}}</p>
    </ul>
    
  </div>
</template>

<script>
  export default {
    name: 'DevTasks',
    data() {
      return {
        devdata: [
          {id:1, general:'Switch to MPA',front:'Status tab', back:'unit testing'},
          {id:2, general:'login templates',front:'Unit testing', back:'Contacts'},
          {id:3, general:'SSR',front:'login/sign in design', back:'Database design'},
          {id:4, general:'Add contact data',front:'', back:'Carlsberg'},
        ],
        userlist: [''], 
        showUser: false,
        logUser: {useremail:'None',userid:0},
      }
    },
    computed: {
      isLoggedIn : function() { return this.$store.getters.isLoggedIn},
      user_jwt : function() { return this.$store.getters.user_jwt},
      
    },
    mounted: function () {
    this.getUsers()},
    methods: {
      getUsers: function () {
        this.axios.get("http://127.0.0.1:8000/api/v1/users/")
        .then((res) =>{(this.userlist = res.data)
                        })        
        .catch(err => console.log(err));
      },
      toggleUser: function () {
        this.showUser = ! this.showUser;
      },
      log_User: function () {
        this.logUser.email = this.$store.getters.LoggedInUserEmail;
        this.logUser.userid = this.$store.getters.LoggedInUserId;
        
        
      },
      }
    }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#table{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-collapse: collapse;
  margin: 40px;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  width:90%;
}
#table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4c56af;
  color: white;
}

#table td, #table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#table tr:nth-child(even){background-color: #f2f2f2;}

#table tr:hover {background-color: #ddd;}
</style>