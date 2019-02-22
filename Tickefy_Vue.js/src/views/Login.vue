<template>
    <section id="login">
        <section class="goHome">
        <img src="../assets/logo.svg"  alt="Where its @" @click="$router.push('/events')">
        </section>
        <div class="login">
            
            <label for="usrname">Username</label>
            <input type="text" placeholder="Enter username" v-model="user" name="usrname" required>

            <label for="passw">Password</label>
            <input type="password" placeholder="Enter password" v-model="password" name="passw" required>

            <p v-if="wrong">Wrong password or username!</p>

            <a  href="#" class="btn" @click="checkLogin">Login</a>
        </div>

    </section>
    
</template>

<script>
export default {
    name: 'login',
    data(){
        return {
        adminLogin: 'admin',
        adminPass: 'abc123',
        staffLogin: 'ericandre',
        staffPass: '123abc',
        password: '',
        user: '',
        wrong: false,
        }
    },
    methods: {
        checkLogin() {

            if (this.user == this.adminLogin && this.password == this.adminPass){
                    this.$router.push('/admin');
            } if (this.user == this.staffLogin && this.password == this.staffPass){
                    this.$router.push('/verify');
            } else {
                this.wrong = true;
            }

        }
    }

}
</script>

<style  lang="scss">
@import '../scss/variables';
@import '../scss/main.scss';
#login {
    background: $darkblue;
    height: 100vh;
    width: 100vw;
    margin: 0;

    .login {
    display: flex;
    justify-items: center;
    flex-direction: column;
    width: 40vh;
    margin: auto;

        label {
            color: white;
            text-align: center;
            margin: 2rem  0 .5rem;
        }        
    }

    .goHome {
        width: 100%;
        margin: 0 auto;
        padding: 20px 0;
        display: flex;
        justify-content: center;

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
     input[type=text],
     input[type=password]
      {
        padding: 12px 20px;
        margin: 5px 0;
    }


}


    

</style>
