<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" style="width: 100px;" />
        <h1>Sign Up Form</h1>
        
        <div class="register">
            <input type="text" placeholder="Name" v-model="name">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="button" class="button" value="Sign Up" v-on:click="signUp">
        </div>
        <p class="log"><router-link to="/login">Login</router-link></p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "SignUp",
    data(){
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            async signUp(){
                let result = await axios.post("http://localhost:3000/users",{
                    name: this.name,
                    email: this.email,
                    password: this.password,
                });

                if(result.status == 201){
                    localStorage.setItem("user-info", JSON.stringify(result.data))
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

<style>
.log a{
    background-color: rgb(3, 63, 28);
    padding: 10px;
    color: aliceblue;
    text-decoration: none;
}</style>