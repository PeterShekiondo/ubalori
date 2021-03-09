<template>
<!-- :src="require('../assets/newasset/truck.svg')" -->
<v-content >
    <v-parallax 
    height="auto"
    src="../assets/newasset/truck.svg">            
<v-row wrap justify="end" class="pr-5" style="background-color:transparent;">
    <v-flex xs-12 sm11 md8 lg5 >        
    <router-view ></router-view>
</v-flex>
</v-row >
</v-parallax>
</v-content>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
}
</script>


