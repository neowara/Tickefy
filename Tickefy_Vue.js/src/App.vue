<template>
  <div id="app">
      <router-view/> 
  </div>
</template>



<script>
export default {
  name: 'App',
  data(){
    return {
      authenticated: false,
      mockAccount: {
        username: "lejla",
        password: "lejla"
      }
    }

  },
  methods: {
    setAuthenticated(status) {
        this.authenticated = status;
    },
    logOut(){
      this.authenticated = false;
    }
  },
  beforeMount(){
    this.$store.dispatch('getEvents');
  }
}
</script>





<style lang="scss">

</style>