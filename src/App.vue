<template>
  <v-app src="require('./assets/truck.png')" style="background-color:#F5FAFF;">
    
      <div v-if="!login">
        <Home/>
      </div>
      <div v-if="login">
      <Login/>
      </div>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
// import HelloWorld from './components/HelloWorld';
// import Login from './views/Login'; #f1f3f4, #F5FAFF
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import {mapGetters} from 'vuex';
export default {
  name: 'App',
  components: {
         Home, 
         Login,
  },

  data (){
    return{
      login:true,
    }
    //
  },

    created(){
      
      // (localStorage.length == 4 && !localStorage.client == "" ) && ( !localStorage.category == '' && !localStorage.secret == '')
      if (localStorage.length == 4) {    
          this.login = false
          console.log('app');
          
          console.log(this.$store.state.tender.logins);
          
    }else{
      this.login = true;
            console.log('ddntlog in');
            
      
     }
    },
    
    computed: {
      ...mapGetters([
        'LOAD_LOGIN'
      ]),
    }
}
</script>
