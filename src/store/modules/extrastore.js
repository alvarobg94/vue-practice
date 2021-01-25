const actions =  {
obtainToken({commit},login_data){
    console.log(login_data)
    //
    
    const payload = {
      username: login_data.username,
      password: login_data.password
    }
    console.log(payload.password);
    axios.post(this.state.endpoints.obtainJWT, payload)
      .then((response)=>{
          commit('updateToken', response.data.token);
        })
      .catch((error)=>{
          console.log(error);
        })
    commit('auth_success', payload.username)
  },
  
  refreshToken(){
    const payload = {
      token: this.state.jwt
    }

    axios.post(this.state.endpoints.refreshJWT, payload)
      .then((response)=>{
          this.commit('updateToken', response.data.token)
        })
      .catch((error)=>{
          console.log(error)
        })
  }}