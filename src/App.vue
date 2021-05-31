<template>
    <div id="app">
        <!--    <router-link to="/Home">home</router-link>-->
        <!--    <br/>-->
        <!--    <router-link to="/About">about</router-link>-->
        <!--    <router-view></router-view>-->
        <!--  <button @click="homeClick">home</button>
          <button @click="aboutClick">about</button>
          <button @click="aboutClick">about</button>-->


        <router-link to="/Home">Home | </router-link>

        <router-link to="/About">About | </router-link>
        <!--    <router-link :to="'/User/'+userId" >User  </router-link>-->
        <router-link to="/Profile">profile | </router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import Home from './components/About'
    import About from './components/Home'
    import User from './components/User'
    import Profile from './components/profile'
    import Message from './components/HomeMessage'
    import News from './components/HomeNews'

    export default {
        name: 'App',
        data() {
            return {
                userId: 'originalxun '
            }
        },
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Home,
            // eslint-disable-next-line vue/no-unused-components
            About,
            // eslint-disable-next-line vue/no-unused-components
            User,
            // eslint-disable-next-line vue/no-unused-components
            Profile,

            // eslint-disable-next-line vue/no-unused-components
            Message,

            // eslint-disable-next-line vue/no-unused-components
            News
        },
        methods: {
            homeClick() {
                this.$router.push('/home');
                console.log("this is home")
            },
            aboutClick() {
                this.$router.push('/about');
                console.log("this is about")
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
