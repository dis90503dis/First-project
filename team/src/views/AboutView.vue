<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';

export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '關於我們', active: true }
      ]
    };
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
  },
}
</script>
<template>
  <div class="about">
    <h1>關於我們</h1>
    <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
  </div>
</template>