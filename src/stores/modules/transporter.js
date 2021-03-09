// import axios from "axios"
// /* eslint-disable no-console */


// export default {
//     state:{
//         tenders: [],
//         tenderdetails:[],
//         dashboard: '',
//         dashboarddetails: [],
//         post_bid:[],
//         logins:[],
//         agent:[],
//         profile:[],
//         payment_terms:[],
//         accepted_bid:[]
//     },

// getters:{

// // Tender getter =======================================>>>>
//         LOAD_TENDERS: state => {
//              const tenders = state.tenders;
//              //eslint-disable-next-line no-console
//              //console.log(tenders);
//              return tenders             
                        
//         },
//         LOAD_TENDER: state => {
//             const tenderdetails = state.tenderdetails;
//             //eslint-disable-next-line no-console
//             console.log(tenderdetails);
//             return tenderdetails;
//         },

// // Dashboard getter ==================================>>>>
//         LOAD_DASHBOARDS: state => {
//              const dashboard = state.dashboard;
//              //eslint-disable-next-line no-console
//             // console.log(dashboard);
//              return dashboard             
//         },

// // Dashboard details getter ==================================>>>>
//         LOAD_DASHBOARD: state => {
//             const dashboarddetails = state.dashboarddetails
//             return dashboarddetails;
//         },

// // posted bid getter ========================================>>>>>>
//         LOAD_POST_BID: state => {
//             const posted_bid = state.post_bid;
//             return posted_bid;
//         },

// // load accept bid ========================================>>>
//         LOAD_ACCEPT_BID: state => {
//             const accept_bid = state.accepted_bid
//             console.log(accept_bid);
//             return accept_bid  
//         },

// // called agent ========================================>>>>>>
//         LOAD_AGENT: state=>{
//             const agent = state.agent;
//             return agent
//         },

// // called agent payment terms =====================>>>>>>>>
//         LOAD_AGENT_PAYMENT_TERMS: state=>{
//             const payment_terms = state.payment_terms;
//             return payment_terms
//         },

// // call profile ===================================>>>>>
//         LOAD_PROFILE: state=>{
//             const profile = state.profile;
//             console.log('ediprofile load');
//             return profile
//         }

//     },

// mutations: {

// // Tender section mutation  ========================>>>
//         SET_TENDERS: (state, payload) => {
//             state.tenders = payload;
//             //eslint-disable-next-line no-console
//             //console.log(state.tenders);
//         },
    
//         SET_TENDER: (state, payload) => {
//             state.tenderdetails = payload;
//         },

// // dashboard section mutation =======================>>>>>>
//         SET_DASHBOARDS: (state, payload) => {
//             state.dashboard = payload;
//         },
//         SET_DASHBOARD: (state, payload) => {
//             state.dashboarddetails = payload;
//         },

// // agent bid on tender  mutation ================================>>>>>
//         SET_POST_BID : (state,payload) =>{
//             state.post_bid = payload;
//         },

// // agent accept bid mutation ===========================>>>>>>>
//         SET_ACCEPT_BID : (state,payload)=>{
//             state.accepted_bid = payload;
//         },

// // called agent mutation ================================>>>>>
//         SET_AGENT : (state,payload) =>{
//             state.agent = payload;
//             console.log('here agent');
            
//         },

// // called get agent payment terms ========================>>>
//         SET_AGENT_PAYMENT_TERMS: (state,payload) =>{
//              state.payment_terms = payload;
//              console.log('payment terms setted');
             
//         },

// // edit profile mutation ================================>>>>>
//         SET_PROFILE: (state,payload)=>{
//             state.profile = payload;
//         },


//     },

// actions: {}
// }