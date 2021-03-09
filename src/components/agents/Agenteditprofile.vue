
<template>
    <v-container class="my-12 px-5">

        
                    <!-- alert ----------------------------- -->
                                
                <v-dialog
                v-model="verify"
                max-width="700"
                
                >
                
                <v-alert
                
                clearable
                class=""
                :value="verify"
                color="lblue"
                type="error"
                row
                >
                <v-flex row>
                <v-flex row xms9 sm9 md9 lg9 class="pl-4">
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Welcome to ubalori, this your working desk.
                </p>
                <p class="text--text subtitle-1 mb-0">
                Please edit your profile to complete registration
                </p>
                </v-flex>
                </v-flex>
                <v-flex  xsm3 sm3 md3 lg3>
                <!-- <v-btn  
                width="200" 
                large="" 
                elevation="flat" 
                color="primary" 
                class="mx-5 mt-2"
                @click="editprofile()">
                edit profile
                </v-btn> -->
                </v-flex>
                </v-flex>
                </v-alert>    
                
                </v-dialog>   
                                
                    <!-- alert ----------------------------- -->



        <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
            <v-flex row class="px-3 ">
                <h1 class=" font-weight-regular headline mb-0 ">Profile info</h1>
               
                </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-5 mx-auto " color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">person_outline</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Agent details</h1>
             <v-spacer></v-spacer>
                <v-btn 
                color="#4169E1" 
                class="white--text" 
                width="100"
                @click="editaccount()">{{btnedit}}</v-btn>
            </v-flex>
        </v-card>

        <v-card 
        :disabled="edit" 
        width="900" 
        class="mt-5 mx-auto mb-5 pl-3 pb-3 pr-3">

        <!-- loading -->
                
                <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>
                

            <v-flex column class="pt-3">
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">ABOUT AGENT</h1>
            </v-flex>

            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Name</p>
                    <v-text-field
                    v-model="company_name" 
                    outlined 
                    class="" 
                    clearable
                    label="" 
                    color="#4169E1">
                    </v-text-field>
                </v-flex>
                <v-flex row sm4 mb4 justify-center>
                <!-- <v-flex column sm6 mb6>
                    <p class="bondy-2 mb-0">Category</p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="service_type"
                    color="#4169E1"
                    clearable
                    ></v-select>
                </v-flex> -->
                <v-flex column class="">
                    <p class="bondy-2 mb-0">Tin No</p>
                    <v-text-field 
                    v-model="tin_number"
                    outlined 
                    color="#4169E1" 
                    clearable sm3 md3></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">CONTACTS</h1>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Phone number</p>
                    <v-text-field 
                    v-model="phone_number"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">Fax</p>
                    <v-text-field 
                    v-model="fax"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Email</p>
                    <v-text-field
                    v-model="email" 
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">P.O.Box</p>
                    <v-text-field 
                    v-model="pobox"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            </v-flex>

            <v-flex column>
            <v-flex class="px-3">
            <h1 style="color:#4169E1;" class=" font-weight-bold body-1 my-5">LOCATION</h1>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Country</p>
                    <v-text-field 
                    v-model="country"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                <v-flex row sm6 mb6 justify-center>
                <v-flex>
                    <p class="bondy-2 mb-0">City</p>
                    <v-text-field 
                    v-model="city"
                    outlined 
                    color="#4169E1" 
                    clearable ></v-text-field>
                </v-flex>
                </v-flex>
            </v-flex>
            <v-flex row class="px">
                <v-flex column sm6 mb6 class="px-6">
                    <p class="bondy-2 mb-0">Region</p>
                    <v-text-field 
                    v-model="region"
                    outlined 
                    class="" 
                    clearable 
                    color="#4169E1"></v-text-field>
                </v-flex>
                
            </v-flex>
            </v-flex>
        </v-card>
    
        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="">attachments</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Attachments</h1>
            </v-flex>
        </v-card>

    
        <v-card :disabled="edit"  width="900" class="mt-5 mx-auto mb-5 pb-3 pl-3 pr-3">

        <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

            <v-row class="pt-3">
                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Certificate</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Insurance</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>

                <v-col>
                    <p class="bondy-2 mb-0 ml-3 mb-0">Other</p>
                     <v-card flat color="#F5FAFF" width="200" height="150" outlined class="mx-3">
                         <v-flex class="" >
                            <v-file-input flat dropzone class="mb-0 pb-0" height="150" width="100" 
                            outlined prepend-icon="" 
                            ></v-file-input>
                         </v-flex>
                    </v-card>
                </v-col>         
            </v-row>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">announcement</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bid terms</h1>
            </v-flex>
        </v-card>

        <v-card :disabled="edit"  width="900" class="mt-5 mx-auto px-3 " >

             <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

            <v-flex column class="px-3 pt-5">
            <p class="bondy-2 mb-0  mb-0">Payment terms</p>
            <v-select
              attach
              chips
              multiple
              class=""
              style="color:#4169E1;"
              :items="payment_terms"
              color="#4169E1"
              clearable
              v-model="terms_of_payment"
            >
            </v-select>
            </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-12 mx-auto" color="#F5FAFF">
            <v-flex row class="px-3">
            <v-icon color="#4169E1" class="mr-5">account_balance</v-icon>
            <h1 style="color:#4169E1;" class=" font-weight-regular title ">Bank account details</h1>
            </v-flex>
        </v-card>

        <v-card :disabled="edit"  width="900" class="mt-5 mx-auto px-3 ">

             <!-- loading -----  -->
            <v-progress-linear
                :active="loading"
                indeterminate
                absolute
                color="#4169E1">
                </v-progress-linear>

            <v-flex column class="px-3 pt-7">
            <p class="bondy-2 mb-0 mb-0">Bank name</p>
            <v-text-field 
            v-model="bank_name"
            outlined 
            class="" 
            clearable 
            color="#4169E1">
            </v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Account name</p>
            <v-text-field 
            v-model="account_name"
            outlined 
            class="" 
            clearable 
            color="#4169E1">
            </v-text-field>
            </v-flex>
            <v-flex column class="px-3">
            <p class="bondy-2 mb-0 mb-0">Acount number</p>
            <v-text-field
            v-model="account_number"
            outlined 
            class="" 
            clearable 
            color="#4169E1">
            </v-text-field>
            </v-flex>
        </v-card>

        <v-card flat width="900" class="mt-5 mx-auto" color="#F5FAFF">
            <v-flex row class="">
            <v-spacer></v-spacer>
            <v-btn 
            :disabled="edit" 
            class="primary" 
            flat 
            @click="savechanges()">
            save changes
            </v-btn>
            </v-flex>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
/* eslint-disable no-console */
export default {
   data() {
       return{
           verify:false,
           loading:false,
           edit:'true',
           btnedit:"edit",
           btncancel:'cancel',
           payment_terms:['Full payment', 'Pay in 2 installments (50%, 50%)', 'Pay in 3 installments (30%, 40%, 30%)'],
           // fields
           company_name:'',
           tin_number:'',
           phone_number:'',
           fax:'',
           email:localStorage.client,
           pobox:'',
           country:'',
           city:'',
           region:'',
           terms_of_payment:'',
           bank_name:'',
           account_name:'',
           account_number:'',
    }
   },

   methods: {
      
       editaccount(){
           console.log(this.terms_of_payment);
           if(this.edit == "true"){
               this.edit=false
               this.btnedit= "cancel"               
           }else if(this.edit == "false"){
               this.edit=false
               this.btnedit= "edit"
           }

       },

       savechanges(){
           const profile_image = 'profile image url';
           const certificate = 'certificate image url';
           const insurance = 'insurance image url'
           //const company_name= this.company_name
           this.$store.dispatch('EDIT_PROFILE',{
                profile_image,certificate,insurance,
                company_name:this.company_name,
                email : this.email,
                tin_number: this.tin_number,
                phone: this.phone_number,
                fax:this.fax,
                p_o_box:this.pobox,
                country:this.country,
                city:this.city,
                region:this.region,
                terms_of_payment:this.terms_of_payment,
                bank_name:this.bank_name,
                account_name:this.account_name,
                account_number:this.account_number
                }).then((data) => {
                    console.log('load profile....');
                    console.log(status);
                    console.log(data);                    
                    console.log(this.LOAD_PROFILE);
                    
                    if (this.LOAD_PROFILE.errorCount == 0 && this.LOAD_PROFILE.genralErrorCode == 8000) {
                    //console.log(this.LOAD_PROFILE);
                    this.loading = true;
                    setTimeout(()=>{
                        this.loading= false;
                        this.verify= true;
                        this.$router.push('/agent/tenders/open')
                        this.$router.go('/agent/tenders/open')
                    },2000)
                    console.log(this.email);
                    console.log(this.LOAD_PROFILE);
                }else{
                    console.log('profile failed');
                    
                }
                    
            }).catch((error)=>{
                console.log(error);
                
            })
        console.log(this.company_name);
        
       }

   },

   computed: {
      ...mapGetters([
          'LOAD_AGENT','LOAD_PROFILE'
          //'LOAD_DIBTENDERS'
      ])
  }

}
</script>