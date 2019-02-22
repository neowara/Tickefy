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

            <button @click="checkLogin">Login</button>
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
            margin: 1rem;
        }

        
    }

    .goHome {
            width: 10vw;
            margin: 0px;

            
            
        }


}


    

</style>
