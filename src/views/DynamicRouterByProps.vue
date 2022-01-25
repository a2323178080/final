<template>
  
</template>



<script>
export default{
    props:['id'],
    created:function(){
        console.log(this.id);
        // const seed="fb2fed65c5f6d65c";
        const seed=this.id;
        this.$http.get(`https://randomuser.me/api/?seed=${seed}`).then((res)=>{console.log(res);}
        );
    },

};
</script>
