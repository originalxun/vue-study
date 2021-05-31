# Vue-router

## 项目初始化
```
npm install
```

## 运行
```
npm run serve
```



## 动态路由匹配

在router文件下的index.js中配置路由，对组件进行映射。

```js
// 创建路由实例，并传入路由映射配置
const routes = [{
        path: '/home',
        component: Home,
        children: [{
                path: 'news',
                component: News
            },
            {
                path: 'message',
                component: Message
            }
        ]
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/user/:id',
        name: 'user',
        component: User
    }
];
```

## 动态路由的使用

源代码：

```vue
<template>
    <div>
        <h1>This is Home</h1>
            <router-link to="/Home/News">新闻 | </router-link>
            <router-link to="/Home/Message">消息 | </router-link>
			<router-link :to="{name:'user',params:{id:userinfo.param.id}}">userinfo | </router-link>
			<router-link :to="{name:'user',params:{id:userinfo1.param.id},query:userinfo.param}">userinfo1 | 			 </router-link>
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
					name: "王阿木"
				}
			},
			userinfo1:{
				param:{
					id: 2
				},
				query:{
					name:"李树"
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
    }
</script>
```

说明：

```vue
<router-link 
             :to="{name:'user',params:{id:userinfo1.param.id},query:userinfo.param}">
    		userinfo1 | 
</router-link>
```

name参数：对应index.js中的映射路径name。该参数也可改为path，当为path时，对应映射路径的path。

params参数：设置路由参数



## params与query的区别

通过params获取的参数，不会显示在地址栏，可以 理解为JavaWeb中的POST请求。

而通过query获取的参数，会显示在地址栏，可以理解为JavaWeb中的GET请求。



## 嵌套路由配置

```js
path: '/home',
        component: Home,
        children: [{
                path: 'news',
                component: News
            },
            {
                path: 'message',
                component: Message
            }
        ]
```

**要注意，以 `/` 开头的嵌套路径会被当作根路径。**



## 编程式路由

简易版：

```js
 homeClick() {
                this.$router.push('/home');
                console.log("this is home")
            },
```

带参版：

```js
handle(){
    this.$router.push({
        name: 'user',
        params : {
            id: '123'
        }})

}
```

通过this.$router.push方法，向history栈添加一个新的记录。如果，用户点击浏览器后退按钮时，依然可以回到之前的URl。



**注：如果提供了path，params会被忽略。**

```js
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```



**只有符合以下情况才可用，提供路由的name或者手写完整的带有参数的path**

```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user
```





