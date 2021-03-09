<template>

        <v-container class=" mt-10 px-5">

            <v-card row flat width="1300" class="mt-10 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3">
                <h3 class="headline mt-1 font-weight-regular">Profile info</h3>
                <v-spacer></v-spacer>
                <v-btn width="100" color="#4169E1" class="white--text">Edit</v-btn>
                </v-flex>
            </v-card>
            
            
            <v-card row flat width="1300" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon color="grey" class="mb-4 ml-3 mr-5">person_outline</v-icon>
                <p class="grey--text title ">Client details</p>
                </v-flex>
            </v-card>

            <v-card width="1300" class="mx-auto mb-5 d-flex pa-3" color="">
                
                <v-flex column>
                <v-flex class="px-1 pt-3">
                    <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> about client</p>
                </v-flex>

                <v-flex row>

                <v-flex row xs12 sm8 md8 lg10 xl10 class="pr-3 pl-5">
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> name </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> location </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                </v-flex>

                <v-flex row xs12 sm4 md4 lg2 xl2 class="pl-3">
                <v-flex column xs6 sm6 md6 class="px-1">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> gender </p>
                <v-text-field clearableclearable  outlined></v-text-field>
                </v-flex>

                <v-flex column xs6 sm6 md6 class="px-1">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> age </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                </v-flex>
                </v-flex>

                <v-flex class="px-1 ">
                    <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> contacts</p>
                </v-flex>

                <v-flex row class="pl-2">
               
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> phone number </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> fax </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> email </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> p.o.box </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                
                </v-flex>

                <v-flex class="px-1 pt-3">
                    <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> location</p>
                </v-flex>

                <v-flex row class="pl-2">
               
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> country </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> city </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> region </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                                
                </v-flex>

                </v-flex>
            </v-card>

            <v-card row flat width="1300" class="mt-12 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon color="grey" large class=" ml-3 mr-5 pb-3">supervisor_account</v-icon>
                <p class="grey--text title ">Next of kin</p>
                </v-flex>
            </v-card>

            <v-card width="1300" class="mx-auto mb-5 d-flex pa-3" color="">
                
                <v-flex column>
                <v-flex class="px-1 pt-3">
                    <p  style="color:#4169E1;" class=" body-1 font-weight-bold text-uppercase"> about client</p>
                </v-flex>

                <v-flex row>

                <v-flex row xs12 sm8 md8 lg10 xl10 class="pr-3 pl-5">
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> name </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> location </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                </v-flex>

                <v-flex row xs12 sm4 md4 lg2 xl2 class="pl-3">
                <v-flex column xs6 sm6 md6 class="px-1">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> gender </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>

                <v-flex column xs6 sm6 md6 class="px-1">
                <p style="color:#4169E1;" class=" body-2 text-uppercase mb-0"> age </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                </v-flex>
                </v-flex>

                <v-flex class="px-1 pt-3">
                    <p  style="color:#4169E1;" class="body-1 font-weight-bold text-uppercase"> contacts</p>
                </v-flex>

                <v-flex row class="pl-2">
               
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> phone number </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> fax </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> email </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> p.o.box </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                
                </v-flex>

                <v-flex class="px-1 pt-3">
                    <p  style="color:#4169E1;" class="body-1 font-weight-bold text-uppercase"> location</p>
                </v-flex>

                <v-flex row class="pl-2">
               
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> country </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> city </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                <v-flex column class="px-2">
                <p style="color:#4169E1;" class="body-2 text-uppercase mb-0"> region </p>
                <v-text-field clearable outlined></v-text-field>
                </v-flex>
                                
                </v-flex>

                </v-flex>
            </v-card>
 
        </v-container>   
</template>