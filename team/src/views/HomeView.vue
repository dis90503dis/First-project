<template>
    <div class="home">
        <!-- 第一區塊 banner -->
        <div ref="myBanner" class="home_banner">
            <div class="banner_content"
            :width="divWidth">
                <div class="banner_wall">
                    <div class="bag_banner_img" 
                    v-for="num in home_banner_text.length" 
                    :key="num">
                        <img class="home_bannerpic" 
                        :src="getImageUrl(`banner/banner0${num}.jpg`)" :width="divWidth"
                        alt="banner">
                    </div>
                </div>
            </div>
            <div class="home_banner_textbackground">
                <h1 v-html="home_banner_text[imgnum - 1]"></h1>
            </div>
            <div class="carousel_buttons">
                <div v-for="buttonNum in home_banner_text.length" @click="setActiveImage(buttonNum)"
                    :class="{ 'active': imgnum === buttonNum }" class="carousel_button">
                </div>
            </div>
        </div>
    </div>
    <!-- 第二區塊 feature -->
    <div ref="featureContainer" class="feature container">
        <div class="row">
            <div v-for="iconNum in feature.length" class="feature_card col-12 col-lg-3">
                <h2 class="feature_title">{{ feature[iconNum - 1].title }}</h2>
                <img class="title_pic" :src="getImageUrl(`feature_icon/icon0${iconNum}.svg`)" alt="icon">
                <p class="feature_illustrate">{{ feature[iconNum - 1].illustrate }}</p>
            </div>
        </div>
    </div>
    <!-- 第三區塊 featured_commodity -->
    <div class="featured_commodity_background">
        <div class="featured_commodity">
            <div class="commodity_pic_countainer">
                <button class="leftbutton" type="button" @click="goleft">《</button>
                <div class="bigpic_item">
                    <div class="pic_wall">
                        <div class="bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity01.png" alt="">
                        </div>
                        <div class="second_picture bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity02.png" alt="">
                        </div>
                        <div class="bag_commodity_pic">
                            <img class="commodity_pic" src="../assets/images/home/featured_commodity/commodity03.png" alt="">
                        </div>
                    </div>
                </div>
                <button class="rightbutton" type="button" @click="goright">》</button>
            </div>
            <div class="commodity_introduce">
                <h3 class="commodity_title">餐盒/食材介紹</h3>
                <p class="commodity_illustrate">
                    採用有機、無農藥的新鮮蔬果，搭配優質蛋白質和健康澱粉，打造出多元的口味組合，無論您是追求高蛋白、低碳水化合物或素食主義者，都能在我們的餐盒中找到合適的選擇。</p>
                <a class="commodity_more" href="">更多商品</a>
            </div>
        </div>
    </div>
    <!-- 第四區塊 comment -->
    <div class="comment">
        <h3>留言評論</h3>
        <div class="comment_wall">
            <div class="comment_card" 
            v-for="commentNum in comment.length" 
            :key="commentNum">
                <div class="person"></div>
                <img :src="getImageUrl(`comment/avatar0${commentNum}.png`)" alt="avatar">
                <div class="comment_name">{{ comment[commentNum - 1].name }}</div>
                <div class="comment_star">
                    <img 
                    v-for="n in comment[commentNum - 1].star" 
                    src="../assets/images/home/comment/Star.png" alt="">
                </div>
                <div class="comment_message">{{ comment[commentNum - 1].message }}
                </div>
            </div>
        </div>
    </div>
    <!--健康專欄-->
  <h2>健康專欄</h2>

<div class="article-overview">
    <div class="article-img">
      <img src="/src/assets/images/home/ARTICLE_OVERVIEW.png" alt="健康專欄">
    </div>
    <div class="article"></div>
      <p>
        <span>營養均衡，從餐桌開始</span>
        在現代快節奏的生活中，人們越來越注重健康。而要實現真正的健康，一頓營養均衡的餐點是不可或缺的一環。飲食不僅關係到我們的體重管理，更關係到身體各個器官的正常運作和免疫系統的強壯。
      </p>
  <a href="" class="btn-outline-white">觀看更多</a>     
</div>

<!--熱門食譜-->
<h2>熱門食譜</h2>
<div class="hot-recipe">
    <div class="first-recipe">
      <img src="/src/assets/images/home/recipe-1.png" alt="熱門食譜-1">
    </div>
    <div class="recipe">
      <h3>素食彩虹沙拉</h3>
      <span>食材</span>
      <ul>
        <li>·生菜葉（任選擇的種類），洗淨切碎</li>
        <li>·紅椒、黃椒、橙椒，切絲</li>
        <li>·黃瓜，切薄片</li>
        <li>·紫甘藍，切碎</li>
        <li>·胡蘿蔔，切絲或用刨絲器刨成薄片</li>
        <li>·紅洋蔥, 切絲........ </li>
      </ul>
      <a href="" class="btn-outline-white">探索更多</a>    
  </div>
</div>
<div class="hot-recipe">
    <div class="recipe-img">
      <img src="/src/assets/images/home/recipe-2.png" alt="熱門食譜-1">
    </div>
    <div class="recipe">
      <h3>紫薯蕎麥鬆餅</h3>
      <span>食材</span>
      <ul>
        <li>·生菜葉（任選擇的種類），洗淨切碎</li>
        <li>·紅椒、黃椒、橙椒，切絲</li>
        <li>·黃瓜，切薄片</li>
        <li>·紫甘藍，切碎</li>
        <li>·胡蘿蔔，切絲或用刨絲器刨成薄片</li>
        <li>·紅洋蔥, 切絲........ </li>
      </ul>
      <a href="" class="btn-outline-white">探索更多</a>    
  </div>
</div>

<!--健康小幫手-->
<h2>健康小幫手</h2>
<h3>深入了解您的身體狀態<br>為健康生活打下堅實基礎</h3><br>
<h3>掌握每日飲食的能量和血糖影響<br>智慧選擇，健康飲食</h3>
<div class="assistant">
  <a href="" class="assistant-item">
    <img src="/src/assets/images/home/assistant.png" alt="">
    <div class="switch">
      <div class="prev"><img src="/src/assets/images/home/prev.svg" alt=""></div>
      <h4>卡路里計算</h4>
      <div class="next"><img src="/src/assets/images/home/next.svg" alt=""></div>
    </div>
    <div class="text">
      <span>了解你每天攝取的卡路里量有助於維持健康的飲食習慣。</span> 
    </div>
  </a>
  <div class="btn"><a href="" class="btn-primary">前往計算</a></div>
</div>
</template>

<script>
export default {
    data() {
        return {
            imgnum: 1, //照片index(配合文字也吃)
            home_banner_text: [
                '嚴選有機食材<br>為您和家人打造營養均衡的每一餐',
                '嚴選有機食材<br>為您和寵物打造營養均衡的每一餐',
                '嚴選有機食材<br>為您和狗狗打造營養均衡的每一餐'
            ],
            activeButton: 1,
            feature: [
                {
                    title: '多樣化餐盒選擇',
                    illustrate: '提供多樣化的食材和食譜選擇，滿足不同口味和飲食需求，為您打造獨一無二的餐食體驗。'
                },
                {
                    title: '嚴選食材',
                    illustrate: '我們精心挑選來自優質農場和供應商的食材，確保每一道餐點都是新鮮、高品質且營養豐富的，為您提供美味的同時注重您的身體健康。'
                },
                {
                    title: '方便快捷',
                    illustrate: '注重方便性，提供簡單易行的食材和食譜，節省您在烹飪上的時間，讓美味營養更輕鬆進入您的生活。'
                },
                {
                    title: '健康資訊分享',
                    illustrate: '我們不僅提供食材，還分享有價值的健康資訊和烹飪技巧，幫助您更深入了解飲食與健康的關聯，讓烹飪成為一場愉悅的學習和享受的過程。'
                },
            ],
            comment: [
                {
                    name: '李先生',
                    message: '這個餐盒真的是營養師的極力推薦！食材新鮮，營養均衡，而且份量十足。每次吃完都感覺充滿活力，對於注重健康的我來說，是個理想的選擇。推薦給大家！',
                    star: 5,
                },
                {
                    name: '林先生',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
                {
                    name: '王小姐',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
                {
                    name: '郭小姐',
                    message: '作為一個注重健身的人，我對於飲食特別講究。這款健康餐盒完全滿足了我的需求，高蛋白、低脂肪，而且味道還好吃！是我每日訓練後的最佳補充。',
                    star: 5,
                },
            ],
            divWidth: 0, //banner寬度
            elements: [], //banner的照片
            timer: null, //自動輪播的計時器變數
        };
    },
    methods: {
        getImageUrl(paths) {
            return new URL(`../assets/images/home/${paths}`, import.meta.url).href;
        },
        updateDimensions() {  //抓取banner 並且同步寬度
            this.divWidth = this.$refs.myBanner.offsetWidth;
        },
        startSlideshow() {
            this.timer = setInterval(() => {
                const nextImage = this.imgnum === this.home_banner_text.length ? 1 : this.imgnum + 1; 
                //判斷 imgnum 的值 是不是 home_banner_text.length 的值  如果是回傳 1 給 nextImage 如果不是 nextImage + 1
                this.setActiveImage(nextImage); // 把 nextImage 當參數 回傳給 setActiveImage
            }, 5000); // 每5000毫秒更換一次圖片
        },
        setActiveImage(buttonNum) {
            this.imgnum = buttonNum; // 將 imgnum 設置為 buttonNum 的值  設置要顯示的圖片。
            this.applyTransition(); //呼叫
        },
        applyTransition() {
            const transitionValue = `translateX(-${(this.imgnum - 1) * 100}%)`; //計算用 imgnum 計算 translateX 值,每張圖片水平平移 100%
            this.$refs.myBanner.querySelector('.banner_content').style.transform = transitionValue; //將 transform 屬性應用到banner_content上 (用這個方法改變CSS)
        },
        // startFeaturedCommodity(){
        //     this.$refs.featureContainer.querySelector('.banner_content').style.transform = transitionValue;
        // },
        goleft(){},
        goright(){},
    },


    computed() {
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.updateDimensions); //移除事件聆聽
    },

    mounted() { // Vue 實例創建之後立即被調用
        this.$nextTick(() => {
            this.updateDimensions();
            window.addEventListener('resize', this.updateDimensions); //resize 重新抓取寬度
            this.elements = this.$refs.myBanner.querySelectorAll('img'); //抓取myBanner標籤裡的所有圖片 變成陣列
            this.startSlideshow(); //啟動自動輪播
            this.startFeaturedCommodity();
        });
    },
};
</script>

<style></style>