<template>
    <Header />
    <div>
        <h1>Update Restaurant Page</h1>
        <div class="register">
            <input type="text" placeholder="Name" v-model="restaurant.name">
            <input type="text" placeholder="Address" v-model="restaurant.address">
            <input type="text" placeholder="Contact" v-model="restaurant.contact">
            <input type="button" class="button" value="Update" v-on:click="updateRestaurant">
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';

export default {
    name: "UpdateVue",
    components:{
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    methods: {
        async updateRestaurant(){
            const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact
            })
            
            if(result.status == 200){
                this.$router.push({ name: "HomePage" })
            }
            console.log(result);
        }
    },
    async mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:"SignUp"})
            }

            const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
            this.restaurant = result.data
        }
}
</script>