<template >
    <div class=" pa-auto" >         

            <v-container   class=" mt-12">
                <v-card flat width="700" class=" mx-auto mt-12" color="#F5FAFF">
                
                <!-- loading -->
                <v-card width="300" v-show="loading" flat color="transparent" class="mb-3 mx-auto">
                <v-progress-circular
                active="true"
                indeterminate
                absolute
                :size="50"
                class="mt-12"
                color="#4169E1">
                </v-progress-circular>
                </v-card>

    <!-- profile alert -->
                <v-alert
                text
                outlined
                class=""
                :value="profile"
                color="green"
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
                <v-btn  
                width="200" 
                large="" 
                elevation="flat" 
                color="primary" 
                class="mx-5 mt-2"
                @click="editprofile()">
                edit profile
                </v-btn>
                </v-flex>
                </v-flex>
                </v-alert>

        <!-- account verification alert -->
                <v-alert
                text
                outlined
                class=""
                :value="verify"
                color="green"
                type="error"
                row
                clearable
                >
                <v-flex row>
                <!-- <v-flex xms1 sm1 md1 lg1 class="text-center" style="background-color:;">
                <v-icon large color="orange" class="">notification_important</v-icon>    
                </v-flex> -->
                <v-flex xms11 sm11 md11 lg11 class="pl-3">
                <p class="text--text title mb-0">
                Your account has been registered, please stay put for it
                to be verified
                </p>
                </v-flex>
                </v-flex>
                </v-alert>
                </v-card>

<!-- v-for="tender in LOAD_TENDERS" :key="tender.id" v-model="LOAD_TENDERS.completed" -->
    <v-card v-show="verification" flat width="1300" class=" mx-auto" color="#F5FAFF" row>
    <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
    <h3 style="color:#394361;" class="title mt-10 px-2">All new tenders</h3>
    <v-divider class="mx-auto mt-3 " ></v-divider>
    </v-card>
    <v-container row fluid class="pt-5" style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="tender in LOAD_TENDERS.objects" :key="tender.id"  >

             <!-- 
                 <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                column width="350"
                class="px-3 pb-3 mx-auto" 
                :elevation="hover ? 15 : 3"> ========================= HOVER EFFECT
              -->

                <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                column 
                width="350" 
                class="px-4 pb-3 pt-1 mx-auto"
                :to="{name:'Tabouttender', params: {id:tender.id}}"
                @click="gettenderdetails(tender.id)"
                :elevation="hover ? 15 : 3">
                   
                    <v-row  row class="pl-3 pt-1 mb-1 justify-space-between">
                        <v-flex wrap xs9 sm9>
                        <h4  class="subtitle-1 font-weight-bold">{{tender.cargo_details}}</h4>
                        </v-flex>
                        
                        <v-flex xs1 sm1 justify="end">
                            <v-spacer></v-spacer>
                        <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon>
                        </v-flex>
                    </v-row>
                   
                        <p class=" body-2 grey--text mb-1">{{tender.customer_id}}</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">{{tender.origin}}</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">{{tender.destination}}</p>
                    </v-row>

                    <v-row row class="px-3 mb-1">
                        <h4  class=" title ">{{tender.customer_offer_amount}} USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" 
                        color="#4169E1" class="white--text" @click="gettenderdetails(tender.id)" :to="{name:'AgentAbouttender', 
                        params: {id:tender.id}}" >View Details</v-btn>
                        
                    </v-row>
                    
                </v-card>
                </template>
                </v-hover>
            </v-flex>               
        </v-container>
    </v-card>    
        </v-container>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
/* eslint-disable no-console */
export default {
        
  
  data () {
      return{
          verify:false,
          profile:false,
          verification:false,
          loading:false,
          tab:  this.$route.params.id,
      }
  },

  created (tab){
             this.loading = true

             console.log(tab);
            //const tend = this.$route.params.tid;
      
      tab = localStorage.client
        this.T_GET_AGENT(tab).then((data)=>{
             // eslint-disable-next-line no-console
            console.log(data);
            if (!this.LOAD_AGENT.objects.agent_id == '') {
                if (this.LOAD_AGENT.objects.is_verified == 0) {
                    setTimeout(()=>{
                    this.loading = false
                    this.verify = true;
                 this.verification = false
                 },1000)
                }else{
                     tab = this.tab
                 this.T_GET_TENDERS(tab);
                 setTimeout(()=>{
                     this.loading = false
                  this.verify = false;
                 this.verification = true
                 },1000)
                }
             }else{
                setTimeout(()=>{
                     this.loading = false
                  this.profile = true;
                 this.verification = false
                 },1000) 
             }
             // eslint-disable-next-line no-console
            console.log(this.LOAD_AGENT);   
             // eslint-disable-next-line no-console
            console.log('here');         
        }).catch(error=>{
             // eslint-disable-next-line no-console
            console.log(error);
             // eslint-disable-next-line no-console
              console.log(this.LOAD_AGENT);   
            
        });
  },
  
  methods:{
      ...mapActions([
          'T_GET_TENDERS','T_GET_TENDERSDETAILs', 'T_GET_AGENT'
          //'GET_TENDERSDETAIL'
          
      ]),
      
      gettenderdetails(tend){
          this.T_GET_TENDERSDETAILs(tend);
      },

      editprofile(){
          this.verify = false
          this.$router.push('/transporter/editprofile')
          this.$router.go('/transporter/editprofile')
      }

           
  },
  computed: {
      ...mapGetters([
          'LOAD_TENDERS', 'LOAD_TENDER', 'LOAD_LOGIN', 'LOAD_AGENT'
          //'LOAD_DIBTENDERS'
      ]),
      
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>