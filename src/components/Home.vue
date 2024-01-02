<template>
    <Header />
    <div>
        <h1>Hello {{ name }}, Home Page</h1>
        <table border>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Address</th>
            </thead>
            <tbody v-for="item in restaurant" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.contact }}</td>
                <td>{{ item.address }}</td>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
    name: "HomePage",
    data(){
        return {
            name: '',
            restaurant: []
        }
    },
    components:{
        Header
    },
    async mounted(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user){
                this.$router.push({name:"SignUp"})
            }

            let result = await axios.get("http://localhost:3000/restaurants");
            this.restaurant = result.data;
        }

}
</script>

<style>
    table {
        margin: auto;
    }
    td {
        width: 100px;
        height: 30px;
    }
</style>