import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
import jwt_decode from 'jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  state: {
    status: '',
    useremail: '',
    userid: 0,
    jwt: sessionStorage.getItem('t'),
    endpoints: {
      obtainJWT: 'http://127.0.0.1:8000/api/v1/auth/obtain_token/',
      refreshJWT: 'http://127.0.0.1:8000/api/v1/auth/refresh_token/',
      obtainUserId: 'http://127.0.0.1:8000/api/v1/userid/',
      obtainUsers: 'http://127.0.0.1:8000/api/v1/users/'
    },
    user_joblist:{},
    contacts:{},
  },
  mutations: {
    updateToken(state, newToken){
      sessionStorage.setItem('t', newToken);
      state.jwt = newToken;
    },
    
    auth_request(state){
      state.status = 'loading';
    },
    login_success(state, userdata){
      state.status = 'success';
      state.useremail = userdata.email;
      state.userid = userdata.id;
   
    },
    auth_error(state){
      state.status = 'error';
    },
    logout(state){
      localStorage.removeItem('t');
      state.jwt = null;
      state.status = '';
      state.useremail = '';
      state.userid = 0;
      state.user_joblist = [];
      state.user_contactlist = []
    },
    updateJobs(state, user_jobsdata){  
      state.user_joblist = user_jobsdata;
    },
    updateContacts(state, user_contactsdata){
      state.user_contactlist = user_contactsdata;
    }
    
  },
  actions:{
    logIn({commit,state},login_data){
      const payload = {
        email: login_data.email,
        password: login_data.password
      }
      axios.post(state.endpoints.obtainJWT, payload)
      
        .then((response)=>{
            commit('updateToken', response.data.token); 
            this.dispatch('obtainUserid',payload)
          })
        .catch((error)=>{
            console.log(error);
          })
      
      ;
          
      
      
    },
    obtainUserid({commit,state},payload){
     
      axios.post(state.endpoints.obtainUserId, payload)
        .then((response)=>{
            commit('login_success', response.data[0]);
            this.dispatch('get_user_jobs');
            
            
          })
          .catch((error)=>{
            console.log(error);
          });

    },
    logOut({commit}){
      commit('logout');
    },
    get_user_jobs({commit,state}) {
      
      let config = {
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${state.jwt}`
        
                  }
          }
      
      axios.get('http://127.0.0.1:8000/api/v1/users/'+state.userid+'/jobs/',config)
      .then((res) =>{
        commit('updateJobs', res.data)
        
        })        
      .catch(err => console.log(err));
    },
    
    inspectToken(){
      const token = this.state.jwt;
      if(token){
        const decoded = jwt_decode(token);
        const exp = decoded.exp //  jwt.exp is expiration date
        const orig_iat = decoded.orig_iat // jwt.iat is issued at

        if(exp - (Date.now()/1000) < 1800 && (Date.now()/1000) - orig_iat < 628200){
           //IF it is expiring in 30 minutes (1800 second) AND it is not reaching its lifespan (7 days - 30 mins = 630000-1800 = 628200) => REFRESH
          this.dispatch('refreshToken')
        } else if (exp - (Date.now()/1000) < 1800){
          //IF it is expiring in 30 minutes AND it is reaching its lifespan => DO NOT REFRESH
          // DO NOTHING, DO NOT REFRESH          
        } else {
          // IF it has expired => DO NOT REFRESH / PROMPT TO RE-OBTAIN TOKEN
          // PROMPT USER TO RE-LOGIN
          // THIS ELSE CLAUSE COVERS THEN CONDITION WHERE A TOKEN IS EXPIRED
        }
      }
    }},
    getters : {
      isLoggedIn: state => !!state.jwt,
      authStatus: state => state.status,
      LoggedInUserEmail: state => state.useremail,
      LoggedInUserId: state => state.userid,
      user_jwt: state => state.jwt,
      joblist: state => state.user_joblist,
      contactlist: state => state.user_contactlist,
    }
  
})
