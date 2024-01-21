<template>
  <div class="products">
    <div class="product_banner">
      <img src="../../src/assets/images/product/banner.png" alt="product_banner">
      <div class="banner_title">
        <h1>健康小舖</h1>
      </div>

    </div>

  </div>
  <breadcrumb :breadcrumb="yourBreadcrumbData"></breadcrumb>
  <!-- <div class="product container">
        <div class="row">
            <div class="col-12 col-md-3">
                <div class="vegetable_card">
                    <p class="product_tag">#NEW</p>
                    <img src="../../src/assets/images/product/vegetable_cover.png" alt="vegetable_cover">
                    <p class="vegetable_title">冷凍蔬菜</p>
                    <p class="vegetable_price">$330</p>
                    <a class="btn-product">查看商品詳情</a>

                </div>
            </div>
        </div>

    </div> -->


  <div v-if="loading">loading...</div>
  <div v-else-if="nodata">nodata...</div>
  <div v-else class="product-list container">
    <aside>
      <li>
        <button class="lunchbutton">調理包</button>
      </li>
      <li>
        <button type="button" class="foodbutton" @click="toggle = !toggle">生鮮食材</button>
        <button type="button" v-if="!toggle">雜糧、油品</button>
        <button type="button" v-if="!toggle">蛋、豆</button>
        <button type="button" v-if="!toggle">魚、肉</button>
        <button type="button" class="vegebutton" v-if="!toggle">蔬菜</button>
      </li>
    </aside>
    <div class="row items">

      <div v-for="item in displayData" :key="item.id" class="vegetable_card col-12 col-xl-3">

        <p class="product_tag">#NEW</p>
        <div class="product_card_img">
          <img :src="getImage(item)" height="200">
        </div>
        <p class="vegetable_title">{{ item.prod_name }}</p>
        <p class="vegetable_price">$ {{ item.prod_sellingprice }}</p>
        <a href="/productinfo" class="btn-product">查看商品詳情</a>

      </div>
    </div>

  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue';
import axios from 'axios';

export default {
  data() {
    return {
      // 麵包屑數據
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', active: true },
      ],
      displayData: [],
      toggle: true,

    };
  },
  components: {
    RouterLink,
    RouterView,
    Breadcrumb,
  },
  created() {
    this.axiosGetData()
  },
  computed: {
    // dataCount(){
    //   return this.displayData.length
    // },
    // loading(){
    //   // return this.responseData.length === 0
    // },
    // nodata(){
    //   return this.displayData.length === 0
    // }
  },

  methods: {
    axiosGetData() {
      axios.get('https://tibamef2e.com/chd103/g1/phps/shop.php')
        .then(res => {
          if (res && res.data) {
            // this.responseData = res.data
            this.displayData = res.data
          }
        })
    },
    getImage(item) {
      return `https://tibamef2e.com/chd103/g1/image/productimage/${item.prod_img}`;
    },

  },

}
</script>
