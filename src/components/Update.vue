<template>
    <Header />
    <div>
        <h1>Update Restaurant Page</h1>
    </div>
</template>

<script>
import Header from './Header.vue';

export default {
    name: "UpdateVue",
    components:{
        Header
    },
    mounted(){
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:"SignUp"})
            }
        }
}
</script>