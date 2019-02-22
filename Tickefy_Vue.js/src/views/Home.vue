<template>
  <main id="home">
    <section class="login">
      <img src="../assets/login.svg" alt="Login page" @click="$router.push('/login')">
    </section>
    <section class="content">
      <img src="../assets/logo.svg" alt="Where its @" >
      <h1>Where it´s @</h1>
      <a href="#" class="btn" @click="$router.push('/events')" >Let's go!</a>
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
      activeStep: 1
    }
  },
  components: {
    pager
  }
}
</script>
<style lang="scss">
@import '../scss/variables';
@import '../scss/main.scss';
#home {
  background: $darkblue;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
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
    @extend %mobileFirst;

    .btn {
        max-width: 20vw;
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

        @media screen and (max-width: 600px){
          .btn {
            max-width: 60vw;
        }

    }
}
  .login {
    display: flex;
    justify-content: flex-end;

    img {
      width: 3rem;
      height: 3rem;
      margin: 1.2rem;

    }
  }
  @media screen and (max-width: 600px){

        .login {

            img{
              max-width: 2.5rem;
              margin: 0.7rem;
            }
        }
  }

</style>