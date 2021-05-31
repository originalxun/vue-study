<template>
    <div>
        <h1>This is Home</h1>
            <router-link to="/Home/News">新闻 | </router-link>
            <router-link to="/Home/Message">消息 | </router-link>
			<router-link :to="{name:'user',params:{id:userinfo.param.id}}">userinfo | </router-link>
			<router-link :to="{name:'user',params:{id:userinfo1.param.id}}">userinfo1 | </router-link>
            <router-link :to="{path:'/user/4'}">restful userinfo</router-link>
            <button @click="handle()">跳转页面</button>
            <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Home',
    data(){
        return {
            message:'你好啊',
            // path:'/home/news'
			userinfo:{
				param:{
					id: 1
				},
				query:{
					name: "王木木"
				}
			},
			userinfo1:{
				param:{
					id: 2
				},
				query:{
					name:"李阿树"
				}
			},
        }
    },
    methods:{
        handle(){
            this.$router.push({
               name: 'user',
               params : {
                   id: '123'
               }})

        }
    }
    
    
	
    // created() {
    //     console.log('home created');
    //     this.$router.push('/home/news');
    // },
    // destroyed() {
    //     console.log('home destroyed');
    // },
    // // 这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的。
    // activated() {
    //     console.log('activated');
    //     // eslint-disable-next-line no-undef
    //     this.$router.push(this.path);
    //     console.log(this.$route.path);
    // },
    // // deactivated() {
    // //     console.log(this.$router.path);
    // //     console.log('deactivated');
    // //     this.path = this.$router.path
    // // },
    // // eslint-disable-next-line no-unused-vars
    // // eslint-disable-next-line no-unused-vars
    // beforeRouteLeave(to, from, next){
    //     console.log("beforeRouteLeave");
    //     this.path = this.$route.path;
    //     console.log(this.$route.path);
    //     next()
    // }
	
}
</script>