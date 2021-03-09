<template>
    <v-app style="background-color:transparent; ">
      
      <v-card 
        class="my-auto mx-4"
        width="560" 
        flat=""
        color="#F5FAFF" >
            

            <v-card-title  class="justify-center">
                <h1 class="primary--text text-center py-2 font-weight-medium  " >UBALORI</h1>
            </v-card-title>
            <v-card-text>
                <p class="text-center font-weight-regular body-1 mb-0">Welcome, please register to create your account</p>
            </v-card-text>

            
            <v-form class="px-7">
              
<!-------------  alerts ------------  -->
                <v-alert
                :value="error"
                color="error"
                icon="error_outline"
                >
                error
                </v-alert>

                <v-alert
                :value="emptyfilds"
                color="error"
                icon="error_outline"
                >
                All fields are required
                </v-alert>
                
                <v-alert
                :value="timeout"
                color="error"
                icon="error_outline"
                >
                connetction time out please, check your internet connetction and try again
                </v-alert>


                <!-- <v-alert
                :value="invalid"
                color="error"
                icon="error_outline"
                >
                make sure all filsds are filled correctly
                </v-alert> -->
                    

                  <v-flex class="">
            
                    <v-flex row class="mx-2 mb-5 mt-3" >
                    <v-flex column xs4 sm4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    height="60"
                    width="70"
                    :elevation="be1"
                    :color="btn1"
                    class="white--text pb-2"
                    @click="button1()">
                    <v-img
                    :src="require('../assets/truck.png')"
                    class=""
                    contain
                    width=""
                    height="50">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <p class="mt-1 mb-0 caption">Transporter</p>
                    </center>
                    </v-flex>
                    
                    <v-flex column xs4 sm4 md4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    append-icon="account" 
                    height="60"
                    width="70"
                    :elevation="be2"
                    background-color="red"
                    :color="btn2"
                    class="white--text pb-2"
                    @click="button2()">
                    <v-img
                    :src="require('../assets/box.png')"
                    class="mt-1"
                    contain
                    width=""
                    height="45">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-flex class="pl-4 justify-center">
                    <p class="mt-1  mb-0 caption">Agent</p>
                    </v-flex>
                    </center>
                    </v-flex>

                    <v-flex column xs4 sm4 md4 lg4 class="px-2">
                    <center>
                    <v-hover class="">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="60"
                    width="70" 
                    :elevation="hover ? 8 : 0">
                    <v-btn 
                    append-icon="account" 
                    height="60"
                    width="70"
                    :elevation="be3"
                    :color="btn3"
                    class="white--text pb-2"
                    @click="button3()">
                    <v-img
                    :src="require('../assets/list.png')"
                    class="mt-2"
                    contain
                    width=""
                    height="43">
                    </v-img>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-flex class="pl-4 ">
                    <p class="mt-1  mb-0 caption">Client</p>
                    </v-flex>
                    </center>
                    </v-flex>
                    </v-flex>      


                    <v-card width="150" class="mb-5 mx-auto">
            <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            height="6"
            color="#4169E1">
            </v-progress-linear>
            </v-card>      
                    
                  <v-flex column class="pl-4">
                    <v-flex row class="mb-6 ">
                    <v-flex column xs12 sm12 md12 lg12  class="">
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
                    @input="clear_alert()" 
                    v-model="email" 
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
                    </v-flex>            
                    
                        
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

                    <v-flex row class="" >
                    <v-flex column xs12 sm12 md6 lg6  class="px-1 ">
                    <p class="font-weight-regular subtitle-2 grey--text  mb-0" >NAME</p>
                    <v-hover class="mb-6">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="55" 
                    :elevation="hover ? 6 : 0">
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    @input="clear_alert()"
                    v-model="name" 
                    :rules="[rules.required]"
                    > 
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>

                    
                    <v-flex column xs12 sm12 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text  mb-0" >PHONE NUMBER</p>
                    <v-hover class="mb-6">
                    <template v-slot="{ hover }">
                    <v-card color="transparent" 
                    height="55" 
                    :elevation="hover ? 6 : 0">
                    <v-text-field 
                    light
                    solo 
                    outlined
                    class="mt-1 text-center" 
                    color="#4169E1" 
                    background-color="transparent" 
                    clearable 
                    @input="clear_alert()"
                    v-model="phone_number"
                    :rules="[rules.required]" 
                    > 
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    </v-flex>
                    </v-flex>

                    <v-flex row class="">
                    <v-flex column xs6 sm6 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >PASSWORD</p>
                    <v-hover class="mb-7">
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

                    <v-flex column xs6 sm6 md6 lg6 class="px-1">
                    <p class="font-weight-regular subtitle-2 grey--text mb-0" >REPEAT PASSWORD</p>
                    <v-hover class="mb-7">
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
                    v-model="confirm_secret" 
                    :rules="[rules.required]"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show = !show"
                    @input="clear_alert()"
                    :type="show ? 'text' : 'password'">
                    </v-text-field>
                    </v-card>
                    </template>
                    </v-hover>
                    <v-alert
                    :value="invalid"
                    color="error"
                    icon="error_outline"
                    >
                    password don't match.
                    </v-alert>
                    </v-flex>
                    </v-flex>

                    <!-- <v-flex class="py-2 ">
                    <v-btn color="#4169E1" height="45" block>
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-flex> -->
                                        
                    <v-flex row class="px-5" >
                    <v-hover>
                    <template v-slot="{ hover }">
                    <v-card 
                    color="#4169E1" 
                    height="47" 
                    width="500" 
                    :elevation="hover ? 8 : 0">
                    <v-btn color="#4169E1" 
                    height="47" 
                    block 
                    @click.prevent=" Register()">
                    <span class="white--text">Signup</span>
                    </v-btn>
                    </v-card>
                    </template>
                    </v-hover>         
                    </v-flex>

                    </v-flex>
                    </v-flex>
                               

                 <v-flex class="row mt-4 justify-center">
                 <p class="text-center">already have account ? </p>
                 <v-btn 
                 elevation="flat" 
                 color="transparent" 
                 height="25"
                 class="ml-2"
                 @click.prevent="signin()">
                 <p class="mt-1" 
                 style="color:#4169E1;">
                 Sign in 
                 </p>
                 </v-btn>
                </v-flex>

            </v-form>
        </v-card>
    </v-app>
</template>

<script>
import {mapGetters} from 'vuex';
/* eslint-disable no-console */

export default {
  
  data (){
      return{
          be1: '5',
          be2: '0',
          be3: '0',
          btn1:"#4169E1", 
          btn2:"transparent", 
          btn3:"transparent",
         //match: false,                // used to chcek if passwords match, 
         invalid: false,             // togle fields
         //invalidemail : false,      // check if email is valid
          emptyfilds:false,         // Check fields      
          error: false,
          abouterror:'',
          show:false,
          loading:false,
          success: false,
          timeout:false,
          category: 2,
          name:'',
          phone_number:'',
          email:'',
          secret:'',
          confirm_secret:'',
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

methods:{

    Register(){
      
            
          if (this.validate()) {

            this.loading = true;

            setTimeout(()=>{
                if (this.success === false) {
                  this.loading = false;
                  this.timeout = true;
                }
              },6000)

          console.log('here register');
          this.$store.dispatch('REGISTER', {
          name: this.name,
          email: this.email,
          password: this.secret,
          password_confirmation:this.confirm_secret,
          phone: this.phone_number,
          category: this.category
        })
        .then(({ data, status }) => {
          this.loading = false;
          this.success = true;
          this.$router.push('/signin')
          //return data;
          data = this.LOAD_RESPONSE;
          console.log('success');
          
          console.log(data);
          console.log(status);
          
          
        })
        .catch (error => {
          this.userExists = true;
          if (error.email) {
            this.abouterror = 'User Already exist. Please try other datails or log in with appropriate credentials'
          } else {
            this.abouterror = 'registration failed, please check your internet and try again'
          }
         //  ======================== continue from here
          
        });
      }else {
          return this.invalid = true;
       }   
    },

    validate() {
      if((this.email == '' || this.secret=='') || (this.name === '' || this.phone_number == '') || (this.confirm_secret == '')){
        console.log('how1');
         this.emptyfilds= true;
         return false
      }else{
        console.log('how');
        
           return this.secret === this.confirm_secret
           }
    },

    clear_alert() {
      this.emptyfilds = false;
      return this.invalid = false;
    }, 
   
    // Transporter select
    button1 (){
      this.btn1 = "#4169E1";
      this.btn2 = "transparent";
      this.btn3 = "transparent";
      this.be1 ='5';
      this.be2 ='0';
      this.be3 ='0';
      this.category = 2;
      console.log(this.category);
    },

    //Agent select
    button2 (){
      this.btn2 = "#4169E1";
      this.btn1 = "transparent";
      this.btn3 = "transparent";
      this.be1 ='0';
      this.be2 ='5';
      this.be3 ='0';
      this.category = 1;
      console.log(this.category);
    },

    //Client selelct
    button3 (){
      this.btn3 = "#4169E1";
      this.btn1 = "transparent";
      this.btn2 = "transparent";
      this.be1 ='0';
      this.be2 ='0';
      this.be3 ='5';
      this.category = 3;
      console.log(this.category);


    },

    signin() {
      this.$router.push('/signin')
    }

  },
 computed: {
      ...mapGetters([
          'LOAD_REGISTER'
          //'LOAD_DIBTENDERS'
      ]),
      
  }
    
}
</script>
