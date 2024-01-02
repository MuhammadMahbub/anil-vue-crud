<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a @click="logout" href="#">Logout</a>
    </div>
</template>

<script>
    export default {
        name: "HeaderVue",
        methods:{
            logout(){
                localStorage.clear();
                this.$router.push({name:"LogIn"})
            }
        }
    }
</script>

<style>
.nav {
    display: flex;
    justify-content:center;
    gap: 10px;
    background: rgba(25, 0, 95, 0.808);
}
.nav a {
    text-decoration: none;
    font-size: 15px;
    color: azure;
    padding: 15px ;
}
.nav a:hover {
    color: rgb(255, 0, 98);
}
</style>