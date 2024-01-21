<template>
    <div class="mainHeader container">
        <header class="header-phone">
            <RouterLink to="/" class="header_logo_link_phone">
                <h1>健康定胃</h1>
            </RouterLink>
            <nav>
                <ul class="header_phone_nav">
                    <li><i class="fa-solid fa-user"></i></li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                    <li @click="toggleHeaderMenu"><i class="fa-solid fa-bars"></i></li>
                </ul>
            </nav>

            <div class="header_phone_menulist" v-show="HeaderMenuStatus" @click="toggleHeaderMenu">
                <nav class="list-list" @click.stop>
                    <ul>
                        <li>
                            <RouterLink to="/products">健康小舖</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/foodmap">食材地圖</RouterLink>
                        </li>
                        <li>
                            <div @click="toggleSubMenu('healthTools')" class="header_phone_link_list">
                                <RouterLink to="">健康小幫手</RouterLink>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul v-show="subMenuStatus.healthTools">
                                <li>
                                    <RouterLink to="/bmi">BMI計算</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/bmr">基礎代謝率計算</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/cal">食物熱量查詢</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/gi">食物GI值查詢</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div @click="toggleSubMenu('healthArticles')" class="header_phone_link_list">
                                <RouterLink to="">健康專欄</RouterLink>
                                <i class="fa-solid fa-chevron-down"></i>
                            </div>
                            <ul v-show="subMenuStatus.healthArticles">
                                <li>
                                    <RouterLink to="/cookbook">熱門食譜</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/article">科普文章</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <RouterLink to="/about">關於我們</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <header class="headerPc">
            <div class="header_pc_area">
                <RouterLink to="/" class="header_logo_link_pc">
                    <h1>健康定胃</h1>
                </RouterLink>
                <nav>
                    <ul class="header_pc_nav">
                        <li>
                            <RouterLink to="/products">健康小舖</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/foodmap">食材地圖</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="">健康小幫手</RouterLink>
                            <ul>
                                <li>
                                    <RouterLink to="/bmi">BMI計算</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/bmr">基礎代謝率計算</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/cal">食物熱量查詢</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/gi">食物GI值查詢</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <RouterLink to="">健康專欄</RouterLink>
                            <ul>
                                <li>
                                    <RouterLink to="/cookbook">熱門食譜</RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="/article">科普文章</RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <RouterLink to="/about">關於我們</RouterLink>
                        </li>
                    </ul>
                </nav>
                <ul class="header_pc_icon_nav">
                    <li @click="toggleModel"><i class="fa-solid fa-user"></i></li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                </ul>
            </div>

        </header>
        <div class="header_modal" id="log-in-modal" v-show="modelStatus">
            <div class="header_modal_bg" @click="toggleModel">
                <div class="modal">
                    <div class="header_model_area" @click.stop>
                        <div class="header_modal_title">
                            <h3>登入</h3>
                            <h3>註冊</h3>
                        </div>
                        <form action="/login" method="post">
                            <label for="login" class="close"><i class="fa-solid fa-xmark" id="close-ntn"
                                    @click="toggleModel"></i></label>
                            <input type="email" placeholder="請輸入E-mail" id="loginEmail" required>
                            <div class="password">
                                <input type="password" placeholder="請輸入密碼" id="loginPassword" required>
                                <span class="eye"><i class="fa-solid fa-eye-slash"></i></span>
                            </div>
                            <input type="submit" class="member-btn" value="登入" id="submit-login">
                        </form>
                        <div class="remember-area">
                            <input class="keep-login" type="checkbox" id="keep-log-in"><label
                                for="keep-log-in">保持登入狀態</label>
                            <RouterLink to="">忘記密碼</RouterLink>
                        </div>
                        <div class="orther-way">
                            <h4>或其他方式快速登入</h4>
                            <div class="fast-img">
                                <RouterLink to=""><img src="/src/assets/images/home/google.png" alt="google_login">
                                </RouterLink>
                                <RouterLink to=""><img src="/src/assets/images/home/fb.png" alt="facebook_login">
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    data() {
        return {
            targetValue: 0,
            HeaderMenuStatus: false,
            subMenuStatus: {
                healthTools: false,
                healthArticles: false,
            },
            modelStatus: false,
        }
    },
    created() { },
    methods: {
        toggleHeaderMenu() {
            this.HeaderMenuStatus = !this.HeaderMenuStatus
        },
        toggleSubMenu(subMenuName) {
            this.subMenuStatus[subMenuName] = !this.subMenuStatus[subMenuName]
        },
        toggleModel() {
            this.modelStatus = !this.modelStatus
        }
    },
    components: {
        RouterLink,
        RouterView
    },
}
</script>