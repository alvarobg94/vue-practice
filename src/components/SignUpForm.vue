<template>
  <div   class="container">
    <li class="square-glass"></li>
    <li class="square-bg"></li>
    <h2 id="up-left">Welcolme to Your job search assistant</h2>
    <p id="medium-left"> Here you will find the tools and resources to find your next job</p>
    <p id="bottom-left"> Already one of us?</p>
    <h1 id="up-right">Start your job hunt</h1>
    <button id="login-but">Log In</button>
      <form class="form"   @submit.prevent="CreateUser">
        <label id="lemail" for="iemail">Email </label>
        <input id="iemail" type="text" v-model="email">
        <label id="lfname" for="ifname">First name </label>
        <input id="ifname" type="text" v-model="firstname" >
        <label id="llname" for="ilname">Last name </label>
        <input id="ilname" type="text" v-model="lastname" >
        <label id="lpassword" for="ipassword">Enter password </label>
        <input id="ipassword" type="password" v-model="password" >
        <label id="lpassword2" for="ipassword2">Repeat password </label>
        <input id="ipassword2" type="password" v-model="password2" >
        <input id="submit_button" type="submit" value="Sign Up">
      </form>
  </div>
</template>

<script>
  export default {
    name: 'SignUpForm',
    data: function() {
      return {
        //username: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        password2: '',

      }
    },
    computed: {},
    mounted() {},
    methods: {
      CreateUser: function () {
      console.log({
        // username: this.username,
        email: this.email,
        first_name: this.firstname,
        last_name: this.lastname,
        password: this.password,
        password2: this.password2,
        
      })
      this.axios.post('http://127.0.0.1:8000/api/v1/register/', {
        // username: this.username,
        email: this.email,
        first_name: this.firstname,
        last_name: this.lastname,
        password: this.password,
        password2: this.password2,
        
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
      //this.$router.push('/jobagent') 
    }
  }}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container {
  margin: auto;
  width:60%;
  height:555px;
  box-sizing: border-box;
  /* background-image:url(../images/sign_up_bg.png); */
  border:5px solid rgba(0, 17, 116, 0.8);  ;
  z-index: -20;
  display: grid;
  grid-template-columns: 42.5fr 57.5fr ;
  grid-template-rows: repeat(20, 27.25px);
  border-radius: 25px;
  
}
.square-glass{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 21;
  background-color: rgba(0, 17, 116, 0.8);  
  border-radius: 20px 0px 0px 20px;
  z-index:-15;
}
.square-bg{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 21;
  background-image: url('../images/sign_up_bg.png');
  border-radius: 20px 0px 0px 20px;
  z-index:-20;
}
#up-left{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 9;
  font-size:35px;
  color:#ffffff;
  z-index: 10;
  padding:5px;
}
#medium-left{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 14;
  font-size:20px;
  color:#ffffff;
  
}
#bottom-left{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 14;
  grid-row-end: 18;
  font-size:30px;
  font-weight: bold;
  color:#ffffff;
  
}
#login-but{
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 18;
  grid-row-end: 20;
  width:50%;
  margin-left: auto;
  margin-right: auto;
  border-radius:30px;
  font-size: 17px;
  font-weight: bold;
  border:none;


}

#up-right {
 grid-column-start: 2;
 grid-column-end: 3;
 grid-row-start: 1;
 grid-row-end: 3;
 z-index:10;
 text-align: center;
 color: #272222;
}
.form {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 21;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: [colst] 10px repeat(2,[cols] 200px) [colend] 10px ;
  grid-template-rows: 5px repeat(4,[labels] 20px [inputs] 35px 10px) [rowsubmit] 50px [rowend] 5px;
  grid-gap:10px;
  box-sizing: border-box;
  float:left;
  text-align: left;
  z-index: 10;
  
}

#lemail, #lpassword, #lpassword2 {
  font-size: 23px;
  color: #000000;
  grid-column: cols 1 / span 2;
}
#iemail, #ipassword, #ipassword2{
  font-size: 20px;
  grid-column: cols 1 / span 2;
}

#lfname,#llname{
  font-size: 18px;
  color: #000000;
}
#ifname, #ilname{
  font-size: 20px;
}
#lemail{
  grid-row: labels 1 / span 1;
}
#iemail{
  grid-row: inputs 1 / span 1;
}
#lfname{
  grid-column: cols 1 / span 1;
  grid-row: labels 2 / span 1;
}
#llname{
  grid-column: cols 2 / span 1;
  grid-row: labels 2 / span 1;
}
#ifname{
  grid-column: cols 1 / span 1;
  grid-row: inputs 2 / span 1;
}
#ilname{
  grid-column: cols 2 / span 1;
  grid-row: inputs 2 / span 1;
}
#lpassword{
  grid-row: labels 3 / span 1;
}
#ipassword{
  grid-row: inputs 3 / span 1;
}
#lpassword2{
  grid-row: labels 4/ span 1;
}
#ipassword2{
  grid-row: inputs 4 / span 1;
}
#submit_button{
  grid-column: cols 1 / span 2;
  grid-row: rowsubmit  / rowend;
  background-color:rgba(0, 17, 116, 0.8); 
  font-weight:bold;
  font-size:17px;
  color:#ffffff;
  border-radius: 30px;
  border:none;
}


</style>