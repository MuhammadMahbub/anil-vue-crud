<template>
    <!-- <img alt="Vue logo" src="../assets/logo.png" class="logo"> -->
        <h1>Login Form</h1>
        
        <div class="login">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="button" class="button" value="Login" v-on:click="login">
        </div>
        <p class="sign"><router-link to="/sign-up">Sign Up</router-link></p>
</template>

<script>
 import axios from 'axios'

    export default {
        name: "LogIn",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async login(){
                let result = await axios.get(
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`
                    )
                
                    if(result.status == 200 && result.data.length > 0){
                    localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                    this.$router.push({name:"HomePage"})
                }
            }
        },
        mounted(){
            let user = localStorage.getItem('user-info');
            if(user){
                this.$router.push({name:"HomePage"})
            }
        }
    }

</script>

<style scoped>
.sign a{
    background-color: rgb(3, 63, 28);
    padding: 10px;
    color: aliceblue;
    text-decoration: none;
}
</style>



