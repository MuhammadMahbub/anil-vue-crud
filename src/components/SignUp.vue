<template>
    <div>
        <h1>Sign Up</h1>

        <div class="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail">Name</label>
                    <input v-model="name" type="text" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Name">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Enter email">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button v-on:click="signUp" type="button" class="btn btn-primary">Submit</button>
            </form>
        </div>
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

<style></style>