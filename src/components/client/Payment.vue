<template>
    <v-container class="mt-12 pa-3">
       

             <v-card flat width="900" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">Used furniture</h1>
                </v-row>
                </v-flex>
                <v-spacer></v-spacer>
                <h2 style="color:#4169E1;">$ 500.00</h2>
                </v-flex>
            </v-card>

            <v-card row flat width="900" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon class="mb-4 ml-3 mr-3" style="color:#4169E1;">person_outline</v-icon>
                <p class="title" style="color:#4169E1;" >Bank details</p>
                </v-flex>
            </v-card>

            <v-card width="900" class="mx-auto px-3 pt-3">
                <v-flex row class="mt-5">
                    <v-flex column sm6 md6 class="pl-6 pr4">
                    <p class=" body-1 mb-0 text-capitalize"> Acc name </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>

                    <v-flex row sm6 md6 class="px-4">
                    <v-flex column sm6 md6 class="px-2">
                    <p class=" body-1 mb-0 text-capitalize"> Acc number </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>
                    <v-flex column sm6 md6 class="pl-2">
                    <p class=" body-1 mb-0 text-capitalize"> Swift code </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>
                    </v-flex>

                    <v-flex column class="px-6">
                    <p class=" body-1 mb-0 text-capitalize"> Select bank </p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="banks"
                    color="#4169E1"
                    clearable
                    ></v-select>
                    </v-flex>
                </v-flex>
            </v-card>

            <v-card row flat width="900" class="mt-10 mx-auto" color="#F5FAFF">
                <v-flex row class="">
                <v-icon class="mb-3 ml-2 mr-3" style="color:#4169E1;">payment</v-icon>
                <p class="title " style="color:#4169E1;" >Payment</p>
                </v-flex>
            </v-card>

            <v-card width="900" class="mx-auto px-4 pt-3">
                <v-flex column class="">
                    <v-flex column class="px-4">
                    <p class=" body-1 mb-0 text-capitalize"> Depositor's name </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>

                <v-flex row class="pl-4 pr-2">
                    <v-flex column sm4 md4 class="pl-4 pr-2">
                    <p class=" body-1 mb-0 text-capitalize"> Payment option </p>
                    <v-select
                    outlined
                    class=""
                    style="color:#4169E1;"
                    :items="payment_options"
                    color="#4169E1"
                    clearable
                    ></v-select>
                    </v-flex>
                    <v-flex column sm4 md4 class="px-2">
                    <p class=" body-1 mb-0 text-capitalize"> Currency </p>
                    <v-text-field clearable outlined></v-text-field>
                    </v-flex>
                    <v-flex column sm4 md4 class=" pl-2">
                    <p class=" body-1 mb-0 text-capitalize"> Receipt </p>
                        <v-file-input clearable outlined 
                        prepend-inner-icon="cloud_upload"
                        prepend-icon="" color="#4169E1" label="Upload file here">
                        
                        </v-file-input>
                    
                    </v-flex> 
            
                </v-flex>

                </v-flex>
            </v-card>

            <v-card flat width="900" class="mx-auto mt-8 " color="#F5FAFF">
                <v-flex row align-self-center justify-center>
                <v-btn elevation="flat" color="#F5FAFF"> 
                    <v-icon color="#4169E1">keyboard_arrow_left</v-icon>
                    <p class=" body-1 mb-0 text-upercase pt-1" style="color:#4169E1;"> go back </p>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="#4169E1" class="" dark> Confirm payment</v-btn>
                </v-flex>
            </v-card>

        

    </v-container>
</template>

<script>
export default {
    data () {
        return{
            banks:['CRDB', 'NMB', 'NBC', 'KCB', 'EXIM', 'ECO BANK', 'DTB', 'ABC','BARCLAYS'],
            payment_options:['Bank Transfer', 'Other']
        }
    }
}
</script>