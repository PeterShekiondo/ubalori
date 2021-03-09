<template >
    <v-app class=" pa-auto"  style="background-color:#F5FAFF;">

            <v-container  class=" mt-10 mx-auto" style="background-color:#F5FAFF;">
                <v-card flat width="1300" class=" mx-auto mt-12" color="#F5FAFF">
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
                </v-card>
                
            
            

<!-- ----------------------------------------------------------------------------------------------
     ---------------------------------------------------------------------------------------------- 
-->
    <v-card 
    flat 
    width="1300" 
    class=" mx-auto mt-12 mb-5" 
    color="#F5FAFF" 
    v-show="verification">

    <h3  class="title text--text px-2 ">Dashboard</h3>

    <v-tabs
      background-color="#F5FAFF"
      color="deep-purple accent-4"
      right
      :key="componemtkey"
    >
      <v-tab @contextmenu="load()" @click="get_dashboard(tab)"  class="">Biding</v-tab>
      <v-tab @click="get_onprogress()">On Progress</v-tab>
             

      <v-tab-item v-for="n in 3" :key="n"  style="background-color:#F5FAFF;">
          
      <v-divider class="mx-auto " ></v-divider>

      <v-card width="300" v-show="loadingbiding" flat color="transparent" class="mb-3 mx-auto">
                <v-progress-circular
                active="true"
                indeterminate
                absolute
                :size="50"
                class="mt-12"
                color="#4169E1">
                </v-progress-circular>
                </v-card>

<!-- ----------------- Biding card------------- -->
      <v-container v-show="bidlist" row fluid class="pt-5" style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="(tender, i) in LOAD_DASHBOARDS.objects" :key="i"  >

                <v-hover 
                class=""
                v-show="accept">
                <template v-slot="{ hover }">
                <v-card 
                column 
                width="350" 
                class="pl-3 pr-2 pb-2 pt-1 mx-auto"
                :elevation="hover ? 15 : 3">
                   
                    <v-row  row class="pl-3 pt-3 mb-1 justify-space-between">
                        <v-flex class="mb-1" wrap xs7 sm8>
                        <h4  class="subtitle-1 font-weight-bold mb-0">{{tender.bid_id}}</h4>
                        </v-flex>
                        <v-flex xs5 sm4 class="pl-3">
                        <!-- <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon> -->
                        <v-chip 
                        small
                        :color="tender.bid_status"
                        class="mainorange white--text px-2 font-weight-regular">
                        {{tender.bid_status}}
                        </v-chip>
                        </v-flex>
                    </v-row>
                    
                    <v-row class="pl-3">
                        <p xs12 sm7 md7 class=" body-2 grey--text mb-1">{{tender.bid_terms_and_conditions}}</p>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row class="px-3">
                        <p class="body-1  pt-2 mb-2">Time line</p>
                        
                         <!-- <v-icon small color="#4169E1" class="px-2 pb-2">
                        remove
                        </v-icon>  -->
                
                        <p  class="  pt-2 primary--text mx-3 mb-2">{{tender.bid_delivery_timeline}}</p>
                    </v-row>

                    <v-row row class="mb-1 ">
                        <v-flex xsm12 sm12 md6 lg6 class="px-3">
                        <h4  class=" title ">{{tender.bid_amount}} USD</h4>
                        </v-flex>
                        <v-flex row xsm12 sm12 md12 lg6 class="px-3 pt-1">
                        <v-flex xsm6 sm6 md6 class="px-1">
                        
                         <v-btn
                        :to="{name:'Taboutbid', params: {id:tender.id}}"
                         small 
                         elevation="flat" 
                        color="#4169E1" class="white--text" >
                        view bid
                        </v-btn>
                        
                        </v-flex>
                        <v-flex :id="tender.bid_status" :ref="tender.bid_status" xsm6 sm6 md6 class="px-1">
                        <center>
                        <v-btn small elevation="flat" 
                        color="#4169E1" class="white--text" @click="acceptbid(tender.id)">
                        accept
                        </v-btn>
                        </center>
                        </v-flex>
                        </v-flex>
                        
                    </v-row>
                    
                </v-card>
                </template>
                </v-hover>
            </v-flex>               
        </v-container>

<!-- ----------------- On progress cards------------- -->
        <v-container v-show="onprogressliast" row fluid class="pt-5" style="background-color:#F5FAFF;" >
            
             <v-flex xs12 sm6 md4 lg4 xl4 class="py-3 px-1 justify-center" 
             v-for="(tender, i) in LOAD_DASHBOARDS.objects" :key="i"  >

                <v-hover class="">
                <template v-slot="{ hover }">
                <v-card 
                column 
                width="350" 
                class="px-4 pb-3 pt-1 mx-auto"
                :to="{name:'Tenderprogress', params: {id:tender.bid_id}}"
                :elevation="hover ? 15 : 3">
                   
                    <v-row  row class="px-3 pt-2 mb-1 justify-space-between">
                        <v-flex wrap xs7 sm8>
                        <h4  class="subtitle-1 font-weight-bold">{{tender.bid_id}}</h4>
                        </v-flex>
                        
                        <v-flex xs5 sm4 class="pl-2">
                            
                        <!-- <v-icon color="#E9E9F0" class="" @click="true">clear</v-icon> -->
                        <v-chip 
                        small
                        :color="tender.tender_progress" 
                        class="mainorange white--text px-2 font-weight-regular">
                        {{tender.tender_progress}}
                        </v-chip>
                        </v-flex>
                    </v-row>
                    <v-row class="pl-3">
                        <p xs12 sm7 md7 class=" body-2 grey--text">{{tender.description}}</p>
                        <v-spacer></v-spacer>
                    </v-row>
                    <v-row class="px-3">
                        <p class="body-1  pt-2 ">Time line</p>
                        
                         <!-- <v-icon small color="#4169E1" class="px-2 pb-2">
                        remove
                        </v-icon>  -->
                
                        <p  class="  pt-2 primary--text mx-3">{{tender.customer_delivery_timeline}}</p>
                    </v-row>

                    <v-row row class="px-3 mb-1">
                        <h4  class=" title ">{{tender.customer_offer_amount}} USD </h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" 
                        color="#4169E1" class="white--text" @click="getbiddetails(tender.bid_id)" :to="{name:'Aboutbid', 
                        params: {id:tender.id}}" >View Details</v-btn>
                        
                    </v-row>
                    
                </v-card>
                </template>
                </v-hover>
            </v-flex>               
        </v-container>

      </v-tab-item>
    </v-tabs>
  </v-card>
<!-- ---------------------------------------------------------------------------- 
     -----------------------------------------------------------------------------
-->
        </v-container>
    </v-app>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          accept: true,
          verify:false,
          profile:false,
          onprogressliast:false,
          bidlist:true,
          verification:false,
          loadingbiding:false,
          loading:false,
          tab: this.$route.params.id,
          componemtkey: 0,
          i:''
          
      }
  },

  created (tab){
              this.loading = true
            // eslint-disable-next-line no-console
          console.log('44444444');
             tab = localStorage.client
        this.T_GET_AGENT(tab).then(()=>{
            
            if (!this.LOAD_AGENT.objects.agent_id == '') {
                if (this.LOAD_AGENT.objects.is_verified == 0) {
                    setTimeout(()=>{
                    this.loading = false
                    this.verify = true;
                 this.verification = false
                 },1000)
                }else{
                     tab = this.tab
                 this.T_GET_DASHBOARD(tab).then(()=>{
                     let status = this.$refs.accepted
                     
                         //document.getElementById()
                     // eslint-disable-next-line no-console
                     console.log(status);
                     if (status == 'accept') {
                         // eslint-disable-next-line no-console
                         console.log('did ------------------------');
                         
                     }else{

                         // eslint-disable-next-line no-console
                         console.log(this.LOAD_DASHBOARDS);
                     }

// Remove loadding ================================>>
                     setTimeout(()=>{
                         this.loading = false
                      this.verify = false;
                     this.verification = true
                     },1000)
                 })
                }
             }else{
                setTimeout(()=>{
                     this.loading = false
                  this.profile = true;
                 this.verification = false
                 },1000) 
             }
                   
        }).catch(error=>{
             // eslint-disable-next-line no-console
            console.log(error);
             // eslint-disable-next-line no-console
              console.log(this.LOAD_AGENT);   
        });

  },
  
  methods:{
      ...mapActions([
          'T_GET_DASHBOARD','T_GET_DASHBOARDDETAILs', 'T_GET_AGENT','T_GET_ONPROGRESS','T_ACCEPT_BID'
          //'GET_BIDTENDERS'
      ]),

      
    //   theid(id){
    //       // eslint-disable-next-line no-console
    //       console.log(id);
    //   },

      editprofile(){
          this.verify = false
          this.$router.push('/transporter/editprofile')
          this.$router.go('/transporter/editprofile')
      },

// get all dashboards (on bid tenders) ========================>>>>>>
      get_dashboard(tab){
          this.onprogressliast = false
          this.bidlist = false
              this.loadingbiding = true
            // eslint-disable-next-line no-console
          console.log('44444444');
                     tab = this.tab
                 this.T_GET_DASHBOARD(tab).then(()=>{
                     // eslint-disable-next-line no-console
                     console.log('bidsss---');
                     // eslint-disable-next-line no-console
                     console.log(this.LOAD_DASHBOARDS);
                     setTimeout(()=>{
                         this.loadingbiding = false
                         this.bidlist=true
                     },1000)
                 }).catch(error=>{
             // eslint-disable-next-line no-console
            console.log(error);
             // eslint-disable-next-line no-console
              console.log(this.LOAD_AGENT);   
        });
      },



// get all awarded tenders     =============================>>>>
      get_onprogress(tab){
          this.onprogressliast = false
          this.bidlist = false
              this.loadingbiding = true
            // eslint-disable-next-line no-console
          console.log('555555');
                     tab = this.tab
                 this.T_GET_ONPROGRESS(tab).then(()=>{
                     // eslint-disable-next-line no-console
                     console.log('bidsss---');
                     // eslint-disable-next-line no-console
                     console.log(this.LOAD_DASHBOARDS);
                     setTimeout(()=>{
                         this.loadingbiding = false
                         this.onprogressliast=true
                     },1000)
                 }).catch(error=>{
             // eslint-disable-next-line no-console
            console.log(error);
             // eslint-disable-next-line no-console
              console.log(this.LOAD_AGENT);   
        });
      },

// accept bid ============================>>>
    acceptbid(bid_id){
        
        // eslint-disable-next-line no-console
        console.log(bid_id);
        
        this.T_ACCEPT_BID(bid_id).then(()=>{
            // eslint-disable-next-line no-console
            console.log(this.LOAD_ACCEPT_BID);
            return this.get_dashboard();
            
        })
    },



// GEt bid detail ==============================>>>
      getbiddetails(tab){

          this.T_GET_DASHBOARDDETAILs(tab).then(()=>{
              // eslint-disable-next-line no-console
              console.log('the bid outpost');
              // eslint-disable-next-line no-console
              console.log(tab);
              // eslint-disable-next-line no-console
              console.log(this.LOAD_DASHBOARD);
                            
          });
      },
      
  },
  computed: {
      ...mapGetters([
          'LOAD_DASHBOARDS', 'LOAD_AGENT', 'LOAD_DASHBOARD'
          //'LOAD_DIBTENDERS'
      ])
  }

    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>