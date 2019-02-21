<template>
  <main id="bookings">
      <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
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
}
</style>