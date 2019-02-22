<template>
  <main id="verify">
      <header>
        <img src="../assets/logoDark.svg" @click="$router.push('/')" alt="logo" class="logo">
        <div class="staff-img"><img src="../assets/staff.svg" class="staff"></div>
        <h3>Staff</h3>
        <h1>Welcome Eric Andre!</h1>
        <img class="user" src="../assets/Eric_Andre.jpg">
      </header>
    <section class="content">
        <section class="verification" v-if="verification">
            <h1 v-if="verification.verified">Valid</h1>
            <h1 v-if="!verification.verified">NOT valid</h1>
            {{ verification.msg }}
        </section>
        <section class="form">
            <input type="text" name="code" :value="code.toUpperCase()" @input="code = $event.target.value.toUpperCase()" :maxlength="codeLength" />
            <a href="#" class="verify" @click="verifyTicket">Verify code</a>
        </section>
  </section>
  </main>
</template>

<script>
export default {
  name: 'verify',
  data(){
    return {
        code: '',
        codeLength: 5
    }
  },
  computed: {
      verification(){
          return this.$store.state.verifyData;
      }
  },
  methods: {
      verifyTicket(){
          this.$store.dispatch('verifyTicket', this.code);
      }
   }
}
</script>
<style lang="scss">
@import '../scss/variables';
#verify {
  @extend %mobileFirst;
  background: $orange !important;
  display: flex;
  flex-direction: column;
  header {
      flex: 3;
      @extend %center;
      color: $darkblue;
      flex-wrap:wrap;
      text-align:center;
  }
  header * {
      width:100%;
  }
  .content {
    flex: 10;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    .verification {
        margin: auto;
        font-size: 1.2rem;
        font-style: italic;
        padding: 2rem;
        text-align: center;
        h1 {
            font-size: 1.6rem;
        }
    }
    .form {
        border: .125rem solid $darkblue;
        max-width: 16rem;
        width: 100%;
        margin: 2rem 0;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        input {
            height: 2rem;
            padding: .5rem;
            font-size: 1.4rem;
            letter-spacing: .25rem;
            text-align: center;
            appearance: none;
            border: none;
            background: none;
            &:focus {
                outline: none;
            }
        }
        .verify {
                height: 3rem;
                @extend %center;
                background: $darkblue;
                color: rgba($color: #fff, $alpha: .8);
                font-weight: 700;
                text-decoration: none;
        }
    }
  }
  .user {
      width:10rem;
      height:10rem;
      background:white;
      border-radius:999rem;
      margin:1rem;
  }
  .logo {
      width:8rem;
      height:8rem;
      margin-top: 2rem;
  }
  .staff {
        width:8rem;
      height:2rem;
  }
  .staff-img{
      width:100%;
  }
}
</style>