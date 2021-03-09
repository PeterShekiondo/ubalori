<template>
    <v-container class=" mt-12 px-5">

            <v-card flat width="1300" class="mt-12 mx-auto mb-5" color="#F5FAFF">
                <v-flex row class="px-3 ">
                <v-flex>
                <v-row class="pl-2 mb-1">
                <h1 class=" font-weight-regular headline ">Used furniture</h1>
                <v-chip color="grey" small class="white--text ml-7 mt-1">Aavilable</v-chip>
                </v-row>
                <p class="grey--text">1 40 feet container of used furniture</p>
                </v-flex>
                <v-spacer></v-spacer>
                <h2 style="color:#4169E1;" class="headline font-weight-bold mr-7">$ 500.00</h2>
                </v-flex>
            </v-card>

            <v-card flat width="1300" class="mx-auto mb-10 px-5" color="#F5FAFF">
                <v-flex row>
                <v-flex sm12 md9 lg9 xlg9 >
                    <v-card width="" class="pt-6 pb-3 pl-8">
                        <v-flex column>
                        <v-flex row >
                            <v-flex column class="pl-3">
                            <p class=" body-1 mb-2" style="color:#4169E1;"> DESTINATION </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> ORIGIN </p>
                            <p class="body-1">Rwanda</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO SIZE </p>
                            <p class="body-1">40 feet</p>
                            </v-flex>
                        </v-flex>

                        <v-flex row class="mt-7">
                            <v-flex column class="pl-3">
                            <p class=" body-1 mb-2" style="color:#4169E1;"> PAYMENT TERMS </p>
                            <p class="body-1">full</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> DELIVERY TIME </p>
                            <p class="body-1">7 days</p>
                            </v-flex>
                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> CARGO SIZE </p>
                            <p class="body-1">40 feet</p>
                            </v-flex>
                        </v-flex>

                        
                        <v-flex row class="mt-10 mb-4" >
                            <v-flex column class="pl-3">
                            <p class=" body-1 mb-2" style="color:#4169E1;"> BILL OF LADING </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> AUTHORITY LATTER </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>

                            <v-flex column >
                            <p class=" body-1 mb-2" style="color:#4169E1;"> OTHERS </p>
                            <v-card flat width="200" height="150" outlined>
                            <v-image class="ma-auto">
                                <v-icon x-large class="mx-12 mt-12">
                                    cloud_upload
                                </v-icon>
                            </v-image>
                        </v-card>
                            </v-flex>
                        </v-flex>
                        </v-flex>
                    </v-card>
                    
                    <v-card flat width="1300" class="mt-5 mb-5" color="#F5FAFF">
                        <v-flex row class="">
                            
                            <v-btn @click.stop="dialog = true" color="#4169E1" outlined  large class="ml-3">Edit bid</v-btn>
                            <!-- dialog -->
                            <v-dialog v-model="dialog" max-width="500" >
                                <v-card>
                                    <v-card-title class="title">Edit bid</v-card-title>
                                    <v-text-field class="mx-6" label="bid amnount"></v-text-field>
                                    <v-select class="mx-6" style="color:#4169E1;" :items="payment_terms" 
                                    color="#4169E1" label="Payment terms" clearable >
                                    </v-select>
                                    <v-text-field class="mx-6" label="delivery time"></v-text-field>
                                    <v-card-action row>
                                        <v-spacer></v-spacer>
                                        <v-btn color="#4169E1" text @click="dialog = false" class="mt-2 ml-2">Submite</v-btn>
                                    </v-card-action>
                                </v-card>
                            </v-dialog>

                            <v-spacer></v-spacer>
                            <v-btn color="#4169E1" elevation="flat" large class="white--text" rauter to="/client/payment">Award tender</v-btn>
                        </v-flex>
                    </v-card>

                </v-flex>

                <v-flex sm12 md3 lg3 xlg3 class="px-3">

                    <v-card color="#4169E1" width="" class="py-4 px-5">
                        <v-flex row >
                            <v-flex column class="px-3">
                            <p class="white--text body-1 font-weight-bold"> ABC FURNITURE </p>
                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >mail_outline</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text"  >room</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Street location, st</p>
                            </v-flex>
                            </v-flex>

                            <v-flex column>
                            <v-flex row class="px-3 ">
                            <v-icon class="mb-3 white--text" >local_phone</v-icon>
                            <p class="white--text body-2 pt-1 pl-2 mb-0">EMAIL</p>
                            </v-flex>
                            <v-flex class="pl-8">
                            <p class="white--text ">Lorem@gamil.com</p>
                            </v-flex>
                            </v-flex>
                            </v-flex>

                        </v-flex>

                    </v-card>
                </v-flex>
                </v-flex>
            </v-card>

    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        payment_terms:['Full payment', 'Pay by installments (30%, 40%, 30%)']
      }
    },
  }
</script>