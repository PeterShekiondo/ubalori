import axios from "axios"
/* eslint-disable no-console */


export default {
    state:{
        tenders: [],
        tenderdetails:[],
        dashboard: '',
        dashboarddetails: [],
        post_bid:[],
        logins:[],
        agent:[],
        profile:[],
        payment_terms:[],
        accepted_bid:[],
        progress_stages:[]
    },

getters:{

// Tender getter =======================================>>>>
        LOAD_TENDERS: state => {
             const tenders = state.tenders;
             //eslint-disable-next-line no-console
             //console.log(tenders);
             return tenders             
                        
        },
        LOAD_TENDER: state => {
            const tenderdetails = state.tenderdetails;
            //eslint-disable-next-line no-console
            console.log(tenderdetails);
            return tenderdetails;
        },

// Dashboard getter ==================================>>>>
        LOAD_DASHBOARDS: state => {
             const dashboard = state.dashboard;
             //eslint-disable-next-line no-console
            // console.log(dashboard);
             return dashboard             
        },

// Dashboard details getter ==================================>>>>
        LOAD_DASHBOARD: state => {
            const dashboarddetails = state.dashboarddetails
            return dashboarddetails;
        },

// posted bid getter ========================================>>>>>>
        LOAD_POST_BID: state => {
            const posted_bid = state.post_bid;
            return posted_bid;
        },

// load accept bid ========================================>>>
        LOAD_ACCEPT_BID: state => {
            const accept_bid = state.accepted_bid
            console.log(accept_bid);
            return accept_bid  
        },

// called agent ========================================>>>>>>
        LOAD_AGENT: state=>{
            const agent = state.agent;
            return agent
        },

// called agent payment terms =====================>>>>>>>>
        LOAD_AGENT_PAYMENT_TERMS: state=>{
            const payment_terms = state.payment_terms;
            return payment_terms
        },

// call profile ===================================>>>>>
        LOAD_PROFILE: state=>{
            const profile = state.profile;
            console.log('ediprofile load');
            return profile
        },

//  load progress_stages ===========================>>>>
        LOAD_PROGRESS_STAGES: state=>{
            const progress_stages = state.progress_stages
            console.log('list of progress load');
            return progress_stages
        }

    },

mutations: {

// Tender section mutation  ========================>>>
        SET_TENDERS: (state, payload) => {
            state.tenders = payload;
            //eslint-disable-next-line no-console
            //console.log(state.tenders);
        },
    
        SET_TENDER: (state, payload) => {
            state.tenderdetails = payload;
        },

// dashboard section mutation =======================>>>>>>
        SET_DASHBOARDS: (state, payload) => {
            state.dashboard = payload;
        },
        SET_DASHBOARD: (state, payload) => {
            state.dashboarddetails = payload;
        },

// agent bid on tender  mutation ================================>>>>>
        SET_POST_BID : (state,payload) =>{
            state.post_bid = payload;
        },

// agent accept bid mutation ===========================>>>>>>>
        SET_ACCEPT_BID : (state,payload)=>{
            state.accepted_bid = payload;
        },

// called agent mutation ================================>>>>>
        SET_AGENT : (state,payload) =>{
            state.agent = payload;
            console.log('here agent');
            
        },

// called get agent payment terms ========================>>>
        SET_AGENT_PAYMENT_TERMS: (state,payload) =>{
             state.payment_terms = payload;
             console.log('payment terms setted');
             
        },

// edit profile mutation ================================>>>>>
        SET_PROFILE: (state,payload)=>{
            state.profile = payload;
        },

// get transporter tender stages mutation =================>>>
        SET_PROGRESS_STAGES: (state,payload)=>{
            state.progress_stages = payload
        }


    },

actions: {
        // Tender actions =========================================>>>>
        GET_TENDERS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:8000/api/v1/tenders/list/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_TENDERS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDERS', res);
            }); 
                            
        },

// get tenderdetails ==========================================>>>>
        GET_TENDERSDETAILs: async ({commit},payload) => {
             // eslint-disable-next-line no-console
            //console.log(payload);
            
            const url= 'http://207.180.215.239:8000/api/v1/tenders/'+payload;
            await axios.get(url).then((res)=>{
                // res.data.map(data=>{
                //     commit('SET_TENDER', data);
                //     // eslint-disable-next-line no-console
                //    console.log(res.data);
                // });===
                
                // eslint-disable-next-line no-console
                  //console.log(res.data.objects);
                commit('SET_TENDER', res.data.objects);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDER', res);
            }); 
        },

// Dashboard actions ==================================================>>>>>>
        GET_DASHBOARD: async ({commit},payload) => {
            
        const url= 'http://207.180.215.239:8000/api/v1/bids/agent/'+payload;
            await axios.get(url).then((data)=>{
                // eslint-disable-next-line no-console
                //console.log(res.data);
                commit('SET_DASHBOARDS', data.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARDS', res);
            });                   
        },

// Get bided tender details (Dashboard details) ==================================================>>>>>>
        GET_DASHBOARDDETAILs: async ({commit},payload) => {
            
        const url= 'http://207.180.215.239:8000/api/v1/bids/show/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                //console.log(res.data);
                commit('SET_DASHBOARD', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARD', res);
            });                   
        },

// Get all AWARDED TENDER LIST tenders ============================================>>>
        // GET_ONAWARDED: async ({commit},payload) => {
            
        //     const url= 'http://192.168.1.44:8000/api/v1/tenders/awarded/'+payload;
        //         await axios.get(url).then((data)=>{
        //             // eslint-disable-next-line no-console
        //             //console.log(res.data);
        //             commit('SET_DASHBOARDS', data.data);
        //         }).catch((error)=>{
        //             //eslint-disable-next-line no-console
        //             console.log(error);
        //             const res=null;
        //             commit('SET_DASHBOARDS', res);
        //         });                   
        //     },

// Get all on Progress tenders ============================================>>>
        GET_ONPROGRESS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:8000/api/v1/tenders/on-progress/agent/'+payload;
                await axios.get(url).then((data)=>{
                    // eslint-disable-next-line no-console
                    //console.log(res.data);
                    commit('SET_DASHBOARDS', data.data);
                }).catch((error)=>{
                    //eslint-disable-next-line no-console
                    console.log(error);
                    const res=null;
                    commit('SET_DASHBOARDS', res);
                });                   
            },
                
//Agent biding on tender ======================================================================= 
        BID_TENDER: ({ commit }, { agent_id, tender_id, payment_terms_and_conditions, bid_terms_and_conditions, bid_amount, bid_delivery_timeline}) => {
            return new Promise((resolve, reject) => {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : localStorage.secret
                    }
                }
            axios
                .post(`http://207.180.215.239:8000/api/v1/bids`, {
                 agent_id,
                 tender_id,
                 payment_terms_and_conditions,
                 bid_terms_and_conditions,
                 bid_amount, 
                 bid_delivery_timeline,
                },
                config
                )
                .then(({ data, status }) => {
                    console.log('posted');
                if (status === 200) {
                    resolve(true);
                    //console.log(data);
                    commit('SET_POST_BID',data);
                    
                        // commit doesn't point to the mutation
                }
                })
                .catch(error => {
                    console.log('not posted');
                reject (error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                console.log('her');
                
                commit('SET_POST_BID', error);          
                //console.log(error);
                //console.log(data);
                
                });
            });
        },

// accept warded tender ================================================>>>>        
        ACCEPT_BID : async ({commit},payload)=>{
            const url = 'http://207.180.215.239:8000/api/v1/bids/confirm/'+payload;
            await axios.put(url).then((data)=>{
                console.log('accept bid');
                console.log(data);
                commit('SET_ACCEPT_BID',data)                
            }).catch((error)=>{
                console.log(error);
                commit('SET_ACCEPT_BID',error) 
            })
        },
// get agent details =================================================>>>>>
        GET_AGENT: async ({commit},payload) => {
            const url= 'http://207.180.215.239:8000/api/v1/agents/show/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_AGENT', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_AGENT', res);
            }); 
                            
        },

//Agent bid terms  ========================================================>>>>          
        GET_AGENT_PAYMENT_TERMS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:8000/api/v1/payment-terms/agent/'+payload;
            await axios.get(url).then((data)=>{
                // eslint-disable-next-line no-console
                if (data.data.errorCount == 0 && data.data.genralErrorCode == 8000 ) {
                    console.log(data);
                    commit('SET_AGENT_PAYMENT_TERMS', data.data.objects);
                    //console.log(data.message);
                }else{
                    commit('SET_AGENT_PAYMENT_TERMS', data.message);
                    
                }
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_AGENT', res);
            }); 
                            
        },

// agent edit profile ====================================================================>>>>        
        EDIT_PROFILE: ({ commit }, {profile_image,certificate,insurance,company_name,email, tin_number, phone, fax, p_o_box, country, city, region, terms_of_payment, bank_name, account_name, account_number}) => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : localStorage.secret
                }
            }
            return new Promise((resolve, reject) => {
              axios
                .post(`http://207.180.215.239:8000/api/v1/agents/`+email, {
                    profile_image,
                    certificate,
                    insurance,
                    company_name, 
                    tin_number, 
                    phone, 
                    fax,  
                    p_o_box,  
                    country, 
                    city, 
                    region, 
                    terms_of_payment, 
                    bank_name, 
                    account_name, 
                    account_number
                },config)
                .then(({ data, status }) => {
                 if ((status == 200 && data.errorCount == 0) && (data.genralErrorCode == 8000)) {
                    console.log(data);
                    console.log('HERE DATA');
                    resolve(true)
                    commit('SET_PROFILE',data);
                        // commit doesn't point to the mutation
                }else{
                    console.log('failed if');
                    console.log(data);
                }
                })
                .catch(error => {
                  reject (error);
                  console.log('not posted');
                
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      commit('SET_PROFILE', error);          
                      reject(true)
                  }
                  console.log('here');
                  
                  //console.log(error);
                  //console.log(data);
                });
            });
          },


//  ===========  TRANSPORTER ACTIONS==================

        
 // Tender actions ------------------------
        T_GET_TENDERS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:9000/api/v1/tenders/list/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_TENDERS', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDERS', res);
            }); 
                            
        },

// get tenderdetails ------------------------
        T_GET_TENDERSDETAILs: async ({commit},payload) => {
             // eslint-disable-next-line no-console
            //console.log(payload);
            
            const url= 'http://207.180.215.239:9000/api/v1/tenders/'+payload;
            await axios.get(url).then((res)=>{
                // res.data.map(data=>{
                //     commit('SET_TENDER', data);
                //     // eslint-disable-next-line no-console
                //    console.log(res.data);
                // });===
                
                // eslint-disable-next-line no-console
                  //console.log(res.data.objects);
                commit('SET_TENDER', res.data.objects);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_TENDER', res);
            }); 
        },

// Dashboard actions ----------------------------
        T_GET_DASHBOARD: async ({commit},payload) => {
            
        const url= 'http://207.180.215.239:9000/api/v1/bids/agent/'+payload;
            await axios.get(url).then((data)=>{
                // eslint-disable-next-line no-console
                //console.log(res.data);
                commit('SET_DASHBOARDS', data.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARDS', res);
            });                   
        },

// Get bided tender details (Dashboard details) -----------------------------
        T_GET_DASHBOARDDETAILs: async ({commit},payload) => {
            
        const url= 'http://207.180.215.239:9000/api/v1/bids/show/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                //console.log(res.data);
                commit('SET_DASHBOARD', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_DASHBOARD', res);
            });                   
        },

// Get all AWARDED TENDER LIST tenders ------------------------>>
        // GET_ONAWARDED: async ({commit},payload) => {
            
        //     const url= 'http://192.168.1.44:8000/api/v1/tenders/awarded/'+payload;
        //         await axios.get(url).then((data)=>{
        //             // eslint-disable-next-line no-console
        //             //console.log(res.data);
        //             commit('SET_DASHBOARDS', data.data);
        //         }).catch((error)=>{
        //             //eslint-disable-next-line no-console
        //             console.log(error);
        //             const res=null;
        //             commit('SET_DASHBOARDS', res);
        //         });                   
        //     },

// Get all on Progress tenders ------------------------>>
        T_GET_ONPROGRESS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:9000/api/v1/tenders/on-progress/agent/'+payload;
                await axios.get(url).then((data)=>{
                    // eslint-disable-next-line no-console
                    //console.log(res.data);
                    commit('SET_DASHBOARDS', data.data);
                }).catch((error)=>{
                    //eslint-disable-next-line no-console
                    console.log(error);
                    const res=null;
                    commit('SET_DASHBOARDS', res);
                });                   
            },
                
//Agent biding on tender --------------------------------------------------------------- 
        T_BID_TENDER: ({ commit }, { agent_id, tender_id, payment_terms_and_conditions, bid_terms_and_conditions, bid_amount, bid_delivery_timeline}) => {
            return new Promise((resolve, reject) => {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization : localStorage.secret
                    }
                }
            axios
                .post(`http://207.180.215.239:9000/api/v1/bids`, {
                 agent_id,
                 tender_id,
                 payment_terms_and_conditions,
                 bid_terms_and_conditions,
                 bid_amount, 
                 bid_delivery_timeline,
                },
                config
                )
                .then(({ data, status }) => {
                    console.log('posted');
                if (status === 200) {
                    resolve(true);
                    //console.log(data);
                    commit('SET_POST_BID',data);
                    
                        // commit doesn't point to the mutation
                }
                })
                .catch(error => {
                    console.log('not posted');
                reject (error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                }
                console.log('her');
                
                commit('SET_POST_BID', error);          
                //console.log(error);
                //console.log(data);
                
                });
            });
        },

// accept warded tender ----------------------------------------------------------      
        T_ACCEPT_BID : async ({commit},payload)=>{
            const url = 'http://207.180.215.239:9000/api/v1/bids/confirm/'+payload;
            await axios.put(url).then((data)=>{
                console.log('accept bid');
                console.log(data);
                commit('SET_ACCEPT_BID',data)                
            }).catch((error)=>{
                console.log(error);
                commit('SET_ACCEPT_BID',error) 
            })
        },
// get agent details -----------------------------------------------------------------
        T_GET_AGENT: async ({commit},payload) => {
            const url= 'http://207.180.215.239:9000/api/v1/transporters/show/'+payload;
            await axios.get(url).then((res)=>{
                // eslint-disable-next-line no-console
                console.log(res.data);
                commit('SET_AGENT', res.data);
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_AGENT', res);
            }); 
                            
        },

//Agent bid terms  ---------------------------------------------------------------------------         
        T_GET_AGENT_PAYMENT_TERMS: async ({commit},payload) => {
            const url= 'http://207.180.215.239:9000/api/v1/payment-terms/agent/'+payload;
            await axios.get(url).then((data)=>{
                // eslint-disable-next-line no-console
                if (data.data.errorCount == 0 && data.data.genralErrorCode == 8000 ) {
                    console.log(data);
                    commit('SET_AGENT_PAYMENT_TERMS', data.data.objects);
                    //console.log(data.message);
                }else{
                    commit('SET_AGENT_PAYMENT_TERMS', data.message);
                    
                }
            }).catch((error)=>{
                //eslint-disable-next-line no-console
                console.log(error);
                const res=null;
                commit('SET_AGENT', res);
            }); 
                            
        },

// agent edit profile ------------------------------------------------------------------------------------------        
        T_EDIT_PROFILE: ({ commit }, {profile_image,certificate,insurance,company_name,email, tin_number, phone, fax, p_o_box, country, city, region, terms_of_payment, bank_name, account_name, account_number}) => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization : localStorage.secret
                }
            }
            return new Promise((resolve, reject) => {
              axios
                .post(`http://207.180.215.239:9000/api/v1/transporters/`+email, {
                    profile_image,
                    certificate,
                    insurance,
                    company_name, 
                    tin_number, 
                    phone, 
                    fax,  
                    p_o_box,  
                    country, 
                    city, 
                    region, 
                    terms_of_payment, 
                    bank_name, 
                    account_name, 
                    account_number
                },config)
                .then(({ data, status }) => {
                 if ((status == 200 && data.errorCount == 0) && (data.genralErrorCode == 8000)) {
                    console.log(data);
                    console.log('HERE DATA');
                    resolve(true)
                    commit('SET_PROFILE',data);
                        // commit doesn't point to the mutation
                }else{
                    console.log('failed if');
                    console.log(data);
                }
                })
                .catch(error => {
                  reject (error);
                  console.log('not posted');
                
                  if (error.response) {
                      console.log(error.response.data);
                      console.log(error.response.status);
                      commit('SET_PROFILE', error);          
                      reject(true)
                  }
                  console.log('here');
                  
                  //console.log(error);
                  //console.log(data);
                });
            });
          },

//Agent bid terms  ---------------------------------------------------------------------------         
T_GET_PROGRESS_STAGES: async ({commit}) => {
    const url= 'http://207.180.215.239:9000/api/v1/configurations/transporting-progress'
    await axios.get(url).then((data)=>{
        // eslint-disable-next-line no-console
        if (data.data.errorCount == 0 && data.data.genralErrorCode == 8000 ) {
            console.log(data);
            commit('SET_PROGRESS_STAGES', data.data);
            //console.log(data.message);
        }else{
            commit('SET_PROGRESS_STAGES', data.message);
            
        }
    }).catch((error)=>{
        //eslint-disable-next-line no-console
        console.log(error);
        const res=null;
        commit('SET_AGENT', res);
    }); 
                    
},

}
}