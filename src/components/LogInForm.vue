<template>
  <div>
    <h1>Log In</h1>

      <form id="userform"  @submit.prevent="signin">
                  <p>
                    <label for="email">Email </label>
                    <input class="ml-2" type="text" name="email" id="email" v-model="email">
                  </p>
                  <p>
                    <label for="password">Enter password </label>
                    <input class="ml-2" type="password" name="password" id="password" v-model="password" >
                  </p>
                  <p>
                    <input type="submit" value="Submit">  
                  </p>

        </form>
  </div>
</template>

<script>
  export default {
    name: 'LogInForm',
    data: function() {
      return {
        email: '',
        password: '',
        
      }
    },
    computed: {},
    mounted() {},
    methods: {
      signin: function () {
        let email = this.email
        let password = this.password
        //this.paramlogin = {email:this.email,password:this.password}
        //console.log({email,password})
        this.$store.dispatch('logIn', {email,password})
       .then(() => this.$router.push('/jobagent'))
       .catch(err => console.log(err))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>