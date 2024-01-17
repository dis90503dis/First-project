<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>


<template>
  <nav>
    <!-- RouterLink 頁面命名規則:首字母大寫，且一定要有2個單字 -->
    <RouterLink to="/">Front</RouterLink>
    |
    <RouterLink to="/admin">Admin</RouterLink>
  </nav>
  <button type="button" class="btn-primary">查看更多</button>
  <button type="button" class="btn-outline-primary">查看更多<i class="fa-solid fa-gamepad"></i></button>


  <!-- 頁面路由route渲染的地方 -->
  <RouterView />
</template>
