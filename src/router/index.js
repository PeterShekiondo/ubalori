import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue';
import Signup from '../components/Signup.vue';
import login from '../views/Login.vue';

//agent routes
import Agenteditprofile from '../components/agents/Agenteditprofile.vue';
import Tenders from '../components/agents/Tenders.vue';
import Abouttender from '../components/agents/Abouttender';
import Biding from '../components/agents/Biding.vue';
import Agent  from '../components/agents/Agent.vue';
import AgentAboutbid from '../components/agents/Aboutbid.vue';
import AgentTenderprogress from '../components/agents/Tenderprogressagent.vue';

//transporter routes
import Teditprofile from '../components/atransporter/Teditprofile.vue';
import Ttenders from '../components/atransporter/Ttenders.vue'
import Tabouttender from '../components/atransporter/Tabouttender.vue'
import Tbiding from '../components/atransporter/Tbiding.vue'
import Transporter from '../components/atransporter/Transporter.vue'
import Taboutbid from '../components/atransporter/Taboutbid.vue'
import Tenderprogress from '../components/atransporter/Tenderprogress.vue'

//client routs
import Client from '../components/client/Client.vue';
import Createtender from '../components/client/Createtender.vue';
import Clienteditprofile from '../components/client/Clienteditprofile.vue';
import Tenderprogressclient from '../components/client/Tenderprogressclient.vue'
import Payment from '../components/client/Payment.vue';
import Aboutbid from '../components/client/Aboutbid.vue'
import Paymenthistory from '../components/Paymenthistory.vue';



Vue.use(VueRouter)

const routes = [

  // general routes
  {
    path: '/login',
    name: 'login',
    component:login,
    children:[
      
    ]
  },
  {
    path:'/signin',
    name:'signin',
    component: Signin
  },
  {
    path:'/signup',
    name:'signup',
    component: Signup
  },
  {
    path: '/paymenthistory',
    name: 'Paymenthistory',
    components:{Paymenthistory}
  },
  
  //---------------------------client
  {
    path:'/client',
    name:'Client',
    components: {Client}
  },
  {
    path:'/Client/editprofile',
    name:'Clienteditprofile',
    components:{Clienteditprofile}
  },
  {
    path:'/client/Createtender',
    name:'Createtender',
    components:{Createtender}
  },
  {
    path:'/client/tenderprogress',
    name:'Tenderprogressclient',
    components:{Tenderprogressclient}
  },
  {
    path:'/client/payment',
    name:'Payment',
    components:{Payment}
  },
  {
    path:'/client/Aboutbid',
    name:'Aboutbid',
    component:Aboutbid
  },

//----------------------------------------- Agent routes  
  { // Agent editing profile
    path:'/agent/editprofile',
    name:'AgentProfile',
    components: {Agenteditprofile}
  },
  { // Agent list of open tenders
    path:'/agent/tenders/:id',
    name:'AgentTenders',
    components: {Tenders}
  },
  { // Agent About open tender
    path:'/agent/Abouttender/:id',
    name:'AgentAbouttender',
    components:{Abouttender}
  },
  { // Agent Biding
    path:'/agent/biding/:id',
    name:'AgentBiding',
    components: {Biding}
  },
  { // Agent list of active tenders
    path:'/agent/active/:id',
    name:'Agent',
    components:{Agent}
  },
  { // Agent Aboutbid
    path:'/agent/AgentAboutbid/:id',
    name:'AgentAboutbid',
    components:{AgentAboutbid}
  },
  { // Agent Tender progress
    path:'/agent/tenderprogress/:id',
    name:'AgentTenderprogress',
    components:{AgentTenderprogress}
  },

//---------------------------------------- Transporter routes
  { // Transporter editing profile
    path:'/transporter/editprofile',
    name:'Teditprofile',
    components: {Teditprofile}
  },
  { // Agent list of open tenders
    path:'/transporter/tenders/:id',
    name:'Ttenders',
    components: {Ttenders}
  },
  { // Agent About open tender
    path:'/transporter/Abouttender/:id',
    name:'Tabouttender',
    components:{Tabouttender}
  },
  { // Agent Biding
    path:'/transporter/biding/:id',
    name:'Tbiding',
    components: {Tbiding}
  },
  { // Transporter list of open tenders
    path:'/transporter/active/:id',
    name:'Transporter',
    components:{Transporter}
  },
  { // Agent Aboutbid
    path:'/transporter/aboutbid/:id',
    name:'Taboutbid',
    components:{Taboutbid}
  },
  { // Agent Tender progress
    path:'/transporter/tenderprogress/:id',
    name:'Tenderprogress',
    components:{Tenderprogress}
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
