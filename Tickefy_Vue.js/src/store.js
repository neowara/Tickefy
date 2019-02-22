import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import VueVisible from 'vue-visible';

Vue.use(VueVisible)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    event: {},
    events: [],
    bookings: [],
    verifyData: null
  },
  mutations: {
    selectEvent(state, event){
        state.event = event;
    },
    setBookings(state, bookings){
        state.bookings = bookings;
    },
    setEvents(state, events){
        state.events = events;
    },
    setVerifyData(state, data){
      state.verifyData = data;
    }
  },
  actions: {
    async getEvents(ctx){

        let events = await axios.get('http://localhost:3000/events');
        ctx.commit('setEvents', events.data);

    },
    async buy(ctx, buyData){
        
        let bookings = await axios.post('http://localhost:3000/bookings', buyData);
        ctx.commit('setBookings', bookings.data);
        localStorage.setItem('bookings', JSON.stringify(bookings.data));

    },
    getBookings(ctx){
        let bookings = localStorage.getItem('bookings');
        ctx.commit('setBookings', JSON.parse(bookings));
    },
    async verifyTicket(ctx, code){
      let verification = await axios.get(`http://localhost:3000/verify/${code}`);
      ctx.commit('setVerifyData', verification.data);
    }
  }
})