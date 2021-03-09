<template >
    <v-app style="background-color:#f5faff; height:95%; ">
      <v-card 
        class="my-10 mx-4 pt-5"
        width="500" 
        flat=""
        color="transparent" >

            <v-card-title  class="justify-center">
                <h1 class="primary--text text-center py-2 font-weight-medium  " >UBALORI</h1>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-1 mb-0">Welcome, please register to create your account</p>
            </v-card-text>

            <v-form class="px-7">

<!--         alerts ------------  --> 
      
                <v-alert
                :value="Connectionerror"
                color="#DC493A"
                icon="error_outline"
                >
                Connection time out, please check your internet and try again.
                </v-alert>

                <v-alert
                :value="error"
                color="#DC493A"
                icon="error_outline"
                >
                Field cant be empty
                </v-alert> 

                <v-alert
                :value="Perror"
                color="#DC493A"
                icon="error_outline"
                >
                Could not log you in, Invalid Password
                </v-alert>

                <v-alert
                :value="Eerror"
                color="#DC493A"
                icon="error_outline"
                >
                Could not log you in, Invalid Email
                </v-alert>

                <v-alert
                :value="Cerror"
                color="#DC493A"
                icon="error_outline"
                >
                  {{DisplayCerror}}
                </v-alert>

                <v-alert
                :value="servererror"
                color="orange"
                icon="error_outline"
                >
                  {{Displayservererror}}
                </v-alert>

                
                <!-- <v-alert
                :value="invalid"
                color="error"
                icon="error_outline"
                >
                make sure all filsds are filled correctly
                </v-alert> -->
            <v-card width="150" class="mb-3 mx-auto">
            <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            height="6"
            color="#4169E1">
            </v-progress-linear>
            </v-card>

                  <v-flex class="">
                   
                  <v-flex column class="">
                    
                    <v-flex column xs12 sm12 md12 lg12  class="px-1 mb-6">
                      <p class="font-weight-regular subtitle-2 grey--text mb-0" >EMAIL</p>
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card color="transparent" height="55" :elevation="hover ? 6 : 0">
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="email"
                    @input="clear_alert()"
                    :rules="[rules.required, rules.email]" 
                    > 
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    <!-- <v-flex row>
                    <v-spacer></v-spacer>
                    <v-alert
                      xs6 sm6 md6 lg6
                      class=""
                      :value="invalidemail"
                      color="error"
                      icon="error_outline"
                      >
                      Invalid email
                      </v-alert>
                      </v-flex> -->
                             
                    
                        
                    <!-- <v-flex column xs12 sm12 md12 lg12  class="">
                    <p class="font-weight-regular body-1 grey--text  mb-0" >EMAIL</p>
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 " 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    v-model="email" 
                    :rules="[rules.required, rules.email]" 
                    > 
                    </v-text-field>
                    </v-flex> -->

                    
                    <v-flex column class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >PASSWORD</p>
                    <v-hover class="mb-2">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="55" 
                    :elevation="hover ? 6 : 0">
                    <v-text-field 
                    solo 
                    outlined
                    class="mt-1" 
                    color="#4169E1" 
                    background-color="transparent" 
                    v-model="secret"
                    @input="clear_alert()" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    :type="show ? 'text' : 'password'"
                    > 
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>                 
                    
                    <v-flex row class=" justify-center ml-1 mb-2">
                    <v-checkbox 
                    v-ripple
                    color="#4169E1"
                    class="mb-0" 
                    label="remember me">
                    </v-checkbox>
                    <v-spacer></v-spacer>
                    <v-btn 
                    elevation="false" 
                    color="transparent" 
                    class="mt-4 font-weight-regular body-1 text-capitalize" 
                    style="color:#4169E1;"> Forgot password
                    </v-btn>
                    </v-flex >

                    <v-flex class="px-5 justify-center ">
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="#4169E1" 
                    height="47" 
                    width="500" 
                    :elevation="hover ? 8 : 0">
                    <v-btn  
                    color="#4169E1" 
                    height="47" 
                    block
                    @click.prevent="Login()">
                    <span class="white--text">Login</span>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>

                    <v-flex class="row mt-4 justify-center">
                    <p class="text-center ">Don't have an account ? </p>
                    <v-btn 
                    elevation="flat" 
                    color="transparent" 
                    height="30"
                    class="ml-2 "
                    @click="signup()">
                    <p class=" text-uppercase mt-1" 
                    style="color:#4169E1;">
                    Sign up 
                    </p>
                    </v-btn>
                    </v-flex>

                    <!-- <v-flex class="py-2 ">
                    <v-btn color="#4169E1" height="45" block>
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-flex> -->                                        
                    </v-flex>
                    </v-flex>
            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import { required, minLength, email } from 'vuelidate/lib/validators'
/* eslint-disable no-console */

export default {
  
  data (){
      return{
          
         //match: false,                // used to chcek if passwords match, 
         invalid: false,             // togle fields
         //invalidemail : false,      // check if email is valid
         //valid: false,             // check if fields are empty
         loading:false,
          error: false,
          Perror:false,
          Eerror:false,
          Cerror:false,
          Connectionerror:false,
          timeout:true,
          servererror:false,
          Displayservererror:'',
          DisplayCerror:'',
          abouterror:'',
          show:false,
          email:'',
          secret:'',
          logerror:'',
          submitStatus: null,
          rules: {
            required: value => !!value || "Required",
            //number:value => {},
            email: value => {
             const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return pattern.test(value) || "Invalid e-mail.";
            }
           }
      }
  },

validations:{
    email:{required, email },
    secret:{required, minLength:minLength(8)}
  },

created(){

},

methods:{

// =====================================================================>>>
    Login() {
              
          if (!this.validate()) {
            this.Perror= false,
            this.Eerror= false,
            this.loading = true;
            this.servererror =false;
            setTimeout (()=>{
              if (this.timeout === true) {
                this.Connectionerror = true;
                this.loading = false;
              }
            },6000)
          this.$store.dispatch('LOGIN', {
          email: this.email,
          password: this.secret,
        })
        .then(( data) => {
          console.log(data);
          console.log(this.LOAD_LOGIN);          
          if(this.LOAD_LOGIN.genralErrorCode === 8000 && this.LOAD_LOGIN.errorCount === 0){
            this.timeout=false; // server timeout false
            setTimeout(() => {
              this.loading = false;
              if (this.LOAD_LOGIN.objects[1]==1 && localStorage.category ==1) {
                this.$router.push('/agent/tenders/open')
                this.$router.go('/agent/tenders/open')
              //return data;
              // data = this.LOAD_LOGIN;
              console.log('Opened as Agent');              
                
              } else if (this.LOAD_LOGIN.objects[1]==2 && localStorage.category ==2) {
                this.$router.push('/transporter/tenders/open')
                this.$router.go('/transporter/tenders/open')
                console.log('transporter');
                
              }else if (this.LOAD_LOGIN.objects[1]==3 && localStorage.category ==3){
                this.$router.push('/client')
                this.$router.go('/client')
               // this.$route.params.id = //asign from local storage
              //return data;
              // data = this.LOAD_LOGIN;
              console.log('Opened as client');
              }else {
                this.$router.push('/Signin')
                this.$router.go('/Signin')
              }
              }, 2000)     //============ kill load
          console.log('success');
          console.log(this.LOAD_LOGIN.objects[1]);
          }else{
            if (this.LOAD_LOGIN === "Email does not exist") {
                    this.timeout=false; // server timeout false
                    console.log("whataaat");
                    console.log(this.LOAD_LOGIN);
                  setTimeout(() => {
                    this.loading = false
                    this.Eerror=true;
                    }, 2000)     //============ kill load
                
            }else{
              this.timeout=false; // server timeout false
              console.log('incorrect password');
              setTimeout(() => {
                this.loading = false;
                this.Perror=true;
                }, 2000)  // ============= kill load              
            }
                
                             
          }
        })
        .catch (error => {
          
          console.log('am here');
          console.log(error.response.data);
           if (error.response.data.password) {
             this.timeout=false; // server timeout false
              console.log('require password');
              console.log(this.LOAD_LOGIN.password[0]);
               setTimeout(() => {
                 this.loading = false;
                 this.DisplayCerror = this.LOAD_LOGIN.password[0];
                 this.Cerror = true;
                 }, 0)   //============ kill load
             
           } else if ( this.LOAD_LOGIN.email) {
             this.timeout=false; // server timeout false
             console.log('required email');
             console.log(this.LOAD_LOGIN.email[0]);
               setTimeout(() => {
                 this.loading = false;
                 this.DisplayCerror = this.LOAD_LOGIN.email[0];
                 this.Cerror = true;
                 }, 2000)   //============ kill load
           }else {
             console.log('server error');
             this.timeout=false
              setTimeout(() => {
                 this.loading = false;
                 this.Displayservererror = "unable to connect to server at moment, Please try agin after few  minutes. 😔";
                 this.servererror = true;
                 }, 2000)   //============ kill load
           }
          
          
          this.userExists = true;
          if (error.email) {
            this.abouterror = 'User Already exist. Please try other datails or log in with appropriate credentials'
          } else {
            this.abouterror = 'registration failed, please check your internet and try again'
          }
         //  ======================== continue from here
          
        });
      }else {
        console.log('else');
          return this.logerror = true;
       }   
    },

    validate() {
           if (this.email === null ){
             this.loading = false
             this.error = true;
             return true
           } 
           
    },

   
    clear_alert() {
      this.Connectionerror = false;
        this.servererror =false;
        this.Cerror = false;
        this.Perror = false;
        this.Eerror = false;
        this.error = false;
       
    },
    
    signup() {
      this.$router.push('/signup')
    }
   
  },
 computed: {
      ...mapGetters([
          'LOAD_LOGIN'
          //'LOAD_DIBTENDERS'
      ]),

      // nameError () {

      // }
      
  }
    
}
</script>
