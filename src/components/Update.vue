<template>
    <Header />
    <div>
        <h1>Update Restaurant Page</h1>
        <div class="register">
            <input type="text" placeholder="Name" v-model="restaurant.name">
            <input type="text" placeholder="Address" v-model="restaurant.address">
            <input type="text" placeholder="Contact" v-model="restaurant.contact">
            <input type="button" class="button" value="Update" v-on:click="addRestaurant">
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
    async mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:"SignUp"})
            }

            const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id)
            console.log(result);
            this.restaurant = result.data
        }
}
</script>