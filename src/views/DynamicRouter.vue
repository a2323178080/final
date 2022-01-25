<template>
  
</template>



<script>
export default{
    created:function(){
        console.log(this.$route.params.id);
        // const seed="fb2fed65c5f6d65c";
        const seed=this.$route.params.id;
        this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res)=>{console.log(res);}
        );
    },

};
</script>



