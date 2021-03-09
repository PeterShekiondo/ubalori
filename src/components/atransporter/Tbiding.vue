<template>
                    <v-card width="1300" class="mt-5 mb-5 pl-8 pt-6 pb-5" >
                        <v-flex>
                            <p class="body-1" style="color:#4169E1;" color="#4169E1">Biding detail</p>
                        </v-flex>
                        <v-flex row class="pl-2 mt-10">
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Bid amount"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm3 md3 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Delivery time"></v-text-field>
                        </v-flex>
                        <v-flex column class="sm6 md6 px-2">
                            <v-text-field color="#4169E1" clearable
                            label="Terms and conditions"></v-text-field>
                        </v-flex>
                        </v-flex>
                        <v-flex row class="">
                            <v-spacer></v-spacer>
                            <v-btn  elevation="flat" color="white" class="mx-3" style="color:#4169E1;">cancel</v-btn>
                            <v-btn color="#4169E1" class="white--text">confirm bid</v-btn>
                        </v-flex>
                    </v-card>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
        
  
  data () {
      return{
          tab: 'todos',
          
      }
  },

  created (tab){
             tab = this.$route.params.id;
      this.T_GET_TENDERSDETAIL(tab);

  },
  
  methods:{
      ...mapActions([
          'T_GET_TENDERSDETAIL',
          //'GET_BIDTENDERS'
      ]),

      
      theid(id){
          // eslint-disable-next-line no-console
          console.log(id);
      },

      listId (id)
      {
          id = this.$route.params.id;
          // eslint-disable-next-line no-console
          console.log(id);
          
          
      }
      
  },
  computed: {
      ...mapGetters([
          'LOAD_TENDERDETAILS',
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

<style scoped>
.pa-auto{
    font-family :"Roboto",sans-serif !important;
}


</style>