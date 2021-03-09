<template>
    <v-container class=" mt-12 px-5">   
        
        <v-card
                color="transparent"
                flat=""
                class="mb-4 mx-auto mt-12 pa-1"
                max-width="1050" >
<!-- Header  -->
        <v-card
                color="transparent"
                flat=""
                class="mb-4">
         <v-layout row wrap  class=" px-2 ">
               <v-layout sm11 md11  class=" pt-5 " >       
                   <v-flex wrap xs12 sm4 md4 lg4  class="" >
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;"   >Transaction ID</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Date</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center " style="color:#4169E1;" >Client</h4>
                   </v-flex>

                   <v-flex wrap xs12 sm4 md4 lg4  class=" ">
                        <h4 class=" body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Description</h4>
                   </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class=" ">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Amount</h4>
                   </v-flex>
                   
                    <v-flex wrap xs12 sm4 md4 lg4 class=" justify-center"  >
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1; background-color:;" >Status</h4>                                             
                    </v-flex>

                    <v-flex wrap xs12 sm4 md4 lg4 class="pr-2">
                        <h4 class="body-1 font-weight-regular mb-1 text-center" style="color:#4169E1;" >Client</h4>                        
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>

<!-- Content card -->
        <v-hover class="">
        <template v-slot="{ hover }">
        <v-card
                class="mb-4 px-3"
                :elevation="hover ? 15 : 3">
          <v-layout row wrap  class=" pl-2 ">
               <v-layout sm11 md11   >       
                   <v-flex 
                   wrap xs12 sm4 md4 lg4 
                   class=" pt-5 pb-3 " >
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center"  >Cargo details</h4>
                   </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4  
                    class="pt-5 pb-3 ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                   <v-flex 
                   wrap xs12 sm4 md4 lg4  
                   class=" pt-5 pb-3 ">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center ">Destination</h4>
                   </v-flex>

                   <v-flex 
                   wrap xs12 sm4 md4 lg4  
                   class="  pt-5 pb-3">
                        <h4 class=" subtitle-1 font-weight-regular mb-1 text-center">Destination</h4>
                   </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4 
                    class="  pt-5 pb-3">
                        <h4 class="subtitle-1 font-weight-regular mb-1 text-center">Client</h4>
                   </v-flex>
                   
                    <v-flex 
                    wrap xs12 sm4 md4 lg4 
                    class=" justify-center pt-5 pb-3">
                    <center>
                         <v-chip small class="light-green white--text  font-weight-light caption "  >2000 usd</v-chip>                    
                    </center>
                    </v-flex>

                    <v-flex 
                    wrap xs12 sm4 md4 lg4
                    class=""  style="background-color:white;">
                    <v-btn elevation="flat" height="50" class="mt-2 pt-3" color="transparent"  >
                        <h4  
                        class="font-weight-bold mb-3 text-center " 
                        style="color:#4169E1;">
                        View Invoice
                        </h4>
                    </v-btn>
                   </v-flex>

                </v-layout>
                
          </v-layout >
        </v-card>
        </template>
        </v-hover>
        </v-card>


    </v-container>
</template>