<script>
import Breadcrumb from "@/components/Breadcrumb.vue"

export default {
  data() {
    return {
      yourBreadcrumbData: [
        { text: '首頁', to: '/' },
        { text: '健康小舖', to: '/products' },
        { text: '商品資訊', active: true }
      ],
      toggle1: false,
      toggle2: false,
      toggle3: false,
      count: 1
    }
  },
  methods: {
    decrement() {
      if (this.count > 1) {
        this.count -= 1;
      }
    },
    increment() {
      this.count += 1;
    }
  },
  components: {
    Breadcrumb
  }
}

</script>


<template>
  <Breadcrumb :breadcrumb="yourBreadcrumbData" />
  <div class="productInfo container">
    <div class="row item-info">
      <div class="productImg col-12 col-md-6">
        <img src="../assets/images/productInfo/product1.png" alt="product1">
      </div>
      <div class="product-card col-12 col-md-6">
        <div class="card-wrap">
          <div class="card-head">
            <h1>冷凍蔬菜</h1>
            <span>$330</span>
          </div>
          <div class="card-body">
            <p>商品編號#00001</p>
            <p>精選優質食材，以先進冷凍技術保存新鮮風味。營養豐富，方便快速，每一口都是對健康的呵護。從現在開始，享受美味。</p>
          </div>
          <div class="collapse">
            <div class="coll-title" @click="toggle1 = !toggle1">
              <h3>產地</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="coll-txt" v-show="toggle1">
              <p>桃園</p>
            </div>
            <div class="coll-title" @click="toggle2 = !toggle2">
              <h3>產品規格</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="coll-txt" v-show="toggle2">
              <p>300g/包</p>
            </div>
            <div class="coll-title" @click="toggle3 = !toggle3">
              <h3>營養標示</h3>
              <i class="fa-solid fa-angle-down" style="color: #e73f14;"></i>
            </div>
            <div class="coll-txt" v-show="toggle3">
              <p>
                <li>每份量： 100 克</li>
                <li>熱量： 120 大卡</li>
                <li>脂肪： 2 克</li>
                <li>膽固醇： 60 毫克</li>
                <li>鈉： 70 毫克</li>
                <li>碳水化合物： 0 克</li>
              </p>
            </div>
          </div>
        </div>
        <div class="card-foot">
          <div class="btn-count">
            <button @click="decrement"><i class="fa-solid fa-minus" style="color: #e73f14;"></i></button>
            <span>{{ count }}</span>
            <button @click="increment"><i class="fa-solid fa-plus" style="color: #e73f14;"></i></button>
          </div>
          <button type="button" class="btn-primary">加入購物車</button>
        </div>

      </div>
    </div>
  </div>
</template>



