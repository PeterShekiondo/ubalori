<template >
    <div class=" pa-auto" >

            <v-container  class=" mt-12 mx-auto">

                <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="mt-5">
                <h3 style="color:#394361;" class="title mt-10 px-2">Dashboard</h3>
                <v-spacer></v-spacer>
                <v-btn class="primary mt-5" router to="/client/createtender">Add New</v-btn>
                </v-flex>
                </v-card>
          
             <v-card flat width="1300" class=" mx-auto mb-5" color="#F5FAFF">
            <v-tabs
            right
             background-color="transparent"
             color="#394361"
             class="mt-5"
              >

             <v-tab>Biding</v-tab>
             <v-tab>Progress</v-tab>
             <v-tab>All</v-tab>

             <v-tab-item >

                <v-divider class="mx-auto " ></v-divider>

    <v-container fluid class="" style="background-color:#F5FAFF;"> 

        <v-row fluid>
             <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text" router to="/client/aboutbid">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>

            <v-flex xs12 sm4 md4 lg4 xl3 class="py-3 px-2">
                <v-card column width="350"  elevation="3" class="px-4 py-3">
                    <v-row  row class="px-3 pt-1">
                        <h4  class="">Used furniture</h4>
                        <v-chip 
                        small class="light-green white--text caption font-weight-light mx-3" >
                        Pending
                        </v-chip>
                        <v-spacer></v-spacer>

                        <v-icon color="#E9E9F0" class=" mb-1">clear</v-icon>
                    </v-row>
                   
                        <p class=" body-2 grey--text">ABC furniture</p>
                    
                    <v-row class="px-3">
                        <p class="body-2  pt-1 ">Dar-es-salaam</p>
                        
                        <v-icon small color="#4169E1" class="px-2 pb-3">
                            arrow_forward
                        </v-icon>
                        <p  class="body-2  pt-1 ">Rwanda</p>
                    </v-row>

                    <v-row row class="px-3">
                        <h4  class=" title ">500 USD</h4>
                        <v-spacer></v-spacer>
                        <v-btn small elevation="flat" color="#4169E1" class="white--text">View Details</v-btn>
                    </v-row>
                </v-card>
            </v-flex>
        </v-row>
             </v-container> 
             </v-tab-item>     
           </v-tabs>    
             </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
  
  data () {
      return{
          project : [
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' },
              {title: '', project:'', project1:'', project2:'', project3:'' }
          ]
      }
  }
    
}
</script>

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>