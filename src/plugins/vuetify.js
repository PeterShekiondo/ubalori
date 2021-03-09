import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont:'md',  
        
    },
    theme:{
        themes:{
            light:{
            primary:'#4169E1',
            mainorange:'#FF8C00',
            text:'#394361',
            white:'#FFFFFF ',
            red:'#DC493A',
            green:'#4CB944',
            lblue:'#F5FAFF',
            lgray0:'#BCBCCB',
            lgray1:'#E9E9F0',
        //chip colors 
            awarded:'#4CB944',
            not_awarded:'#FF8C00',
            accepted:'#4169E1',
            darkblue:'#3F51B5',
            onProgress:'#4169E1',
        //used somewhere 
            paleblack:'#37474F',
            try:'#7486e8'
            },
            
        }
        

   }
    
});
