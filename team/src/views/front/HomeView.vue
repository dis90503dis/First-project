<template>
  <div class="home">
    <div class="home_banner">
      <div>
        <img v-for="num in home_banner_text.length" :key="num" class="home_banner01"
          :src="getImageUrl(`${num}.jpg`)" alt="banner"
        >
      </div>
      <img class="home_banner01_1" src="../../assets/images/home/banner01_1.png" alt="盤子">
      <img class="home_banner01_2" src="../../assets/images/home/banner01_2.png" alt="盤子">
      <div class="home_banner_textbackground">
        <h1 v-html="home_banner_text[imgnum - 1]"></h1>
      </div>
      <div class="carousel_buttons">
        <div v-for="buttonNum in home_banner_text.length" 
            @click="setActiveImage(buttonNum)" 
            :class="{ 'active': imgnum === buttonNum }" 
            class="carousel_button">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgnum: 1,
      home_banner_text: [
        '嚴選有機食材<br>為您和家人打造營養均衡的每一餐',
        '嚴選有機食材<br>為您和寵物打造營養均衡的每一餐',
        '嚴選有機食材<br>為您和狗狗打造營養均衡的每一餐'
      ],
      activeButton: 1,
    };
  },
  methods: {
    getImageUrl(paths) {
      return new URL(`../../assets/images/home/banner0${paths}`, import.meta.url).href;
    },
    applyTransition() {
      for (let i = 1; i <= this.home_banner_text.length; i++) {
        const imgElement = document.querySelector(`.home_banner01:nth-child(${i})`);
        const distance = (i - this.imgnum) * 100; 
        imgElement.style.transform = `translateX(${distance}%)`;
      }
    },
    setActiveImage(buttonNum) {
      this.imgnum = buttonNum;
      this.applyTransition();
    },
  },
};
</script>

<style>
</style>