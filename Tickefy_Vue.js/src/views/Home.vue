<template>
  <main id="home">
    <section class="content">
      <img src="../assets/logo.svg" alt="Where its @" @click="$router.push('/events')">
      <h1>Where it´s @</h1>
      <div id="login">
         <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" /> 
        <a href="#" class="btn" @click="logIn">Login</a>
        <a href="#" class="btn" @click="logOut">Logout</a>

        </div>
  </section>
  <pager :activeStep="activeStep"/>
  </main>
</template>

<script>
import pager from '@/components/Pager';
export default {
  name: 'home',
  data(){
    return {
      input: {
        username: "",
        password: "",

      },
      activeStep: 1
      
    }
    
  },
  components: {
    pager
  },
  methods:{
    logIn(){
      this.$router.push('/verify') 
    },
    logOut (){
      this.$router.push('/')
    },
    login() {
    if(this.input.username != "" && this.input.password != "") {
        if(this.input.username == this.input.password) {
            this.$emit("authenticated", true);
            this.$router.replace({ name: "secure" });
        } else {
            console.log("The username and / or password is incorrect");
        }
    } else {
        console.log("Welcome");
    }
}
    }
}

</script>

<style lang="scss">
@import '../scss/variables';
#home {
  background: $darkblue;
  display: flex;
  flex-direction: column;
  @extend %heightWidth;
  .content {
    flex: 10;
    @extend %center;
    flex-direction: column;
    h1 {
      color: $pink;
      font-size: 2.2rem;
      margin: .5rem 0;
    }
  }
}

a{
  margin-left: 1rem;

}

#login{
  margin-top: 1rem;
}
</style>