<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="home-o">课程</van-tabbar-item>
      <van-tabbar-item to="/profile" icon="home-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
