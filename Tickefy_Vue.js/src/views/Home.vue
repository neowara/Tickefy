<template>
  <main id="home">
    <div id="login">
         <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" /> 
        <button href="#" class="btn" @click="logIn">Login</button>    

        </div>
    <section class="content">
      <img src="../assets/logo.svg" alt="Where its @" @click="$router.push('/events')">
      <h1>Where it´s @</h1>
      <button href="#" class="btn-next" @click="next"></button>
      <p @click="text" class="btn-text">Spend my money</p>

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
      this.$router.push('/verify') // sends you to verify page
    },
    next(){
      this.$router.push('./Events') // sends you to events page
    },
    text(){
      this.$router.push('./Events') // -|| -
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
    margin: 1rem 0rem 0rem 65rem;
    position: absolute;
 }

 .btn-next{
   border-radius: 10%;
   color:purple;
   border: 4px solid  #37AEAB;;
   background-color:  #37AEAB;;
   margin-top: 3rem;
   width: 20rem;
   height: 3rem;
   text-align: center;
   box-shadow: 2px 2px 2px  #37AEAB;
   
 }

 .btn-text{
   margin-top: -2.5rem;
   font-weight: bold;
   color:  #F56B9A;
   font-size: 1.5rem;
   font-family: 'Fira Sans', sans-serif;
   font-weight: bold;
 }

 .btn{
   margin: 0.3rem;
   color: #F56B9A;
 }
</style>