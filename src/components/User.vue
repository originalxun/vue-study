<template>
    <div>
        <h1>This is User</h1>
        <h2>id:{{this.$route.params.id}}</h2>
    </div>
</template>

<script>
   export default{
       name :'user',
       watch : {
           $route(){
                console.log("进行监听");
                console.log("我是大哥:" + this.$route.params.id);
            }
        },
   }
</script>
