<template>
  <div>
    <h2>Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link  class="list-group-item" active-class="active" :to="{name:'News'}">News</router-link>
        </li>
        <li>
          <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>