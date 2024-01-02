<template>
    <Header />
    <div>
        <h1>Add Restaurant Page</h1>
        <div class="register">
            <input type="text" placeholder="Name" v-model="restaurant.name">
            <input type="text" placeholder="Address" v-model="restaurant.address">
            <input type="text" placeholder="Contact" v-model="restaurant.contact">
            <input type="button" class="button" value="Submit" v-on:click="addRestaurant">
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: "AddVue",
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    components: {
        Header
    },
    methods: {
        async addRestaurant(){
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            })
            
            if(result.status == 201){
                this.$router.push({ name: "HomePage" })
            }
            console.log(result);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>