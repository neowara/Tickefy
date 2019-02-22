<template>
<main>
  <div id="bookings">
                  <img class="home" src="../assets/logo.svg" alt="Where its @" @click="$router.push('/')">
        <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</main>
</template>

<script>
import booking from '@/components/Booking';
export default {
  name: 'bookings',
  components: {
      booking
  },
  computed: {
      bookings(){
          return this.$store.state.bookings;
      }
  },
  methods: {
      nextBooking() {
      for (i=0; i < this.bookings.length; i++) {


      }
      }
  },
  beforeMount(){
      if(localStorage.getItem('bookings')){
          this.$store.dispatch('getBookings');
      }
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
#bookings {
    @extend %center;
    background: $darkblue;
    background: linear-gradient(to bottom, $pink 0%,$darkblue 50%);
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  height: 100vh;
    
    img {
        position:fixed;
        top:0;
        left:0;
        width:60px;
        margin:5px 0 0 5px;
    }
}

.btn {
        max-width: 80vw;
        width: 100%;
        border-radius: 3px;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        background: $green;
        height: 4rem;
        margin-top: 1.5rem;
        @extend %center;
      }
</style>