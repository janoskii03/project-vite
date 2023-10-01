<template>
    <div>
        <section class="footer">
    <div class="container">
      <div class="row">
  
        <div class="footer-logo">
          <a href="index.html"><img src="@/assets/images/logo.png" alt="seesea-logo" />
          </a>
        </div>
        <div class="footer-txt" v-for="text in footerText" :key="text.name">
          <h4><RouterLink :to="text.src">{{ text.name }}</RouterLink></h4>
       
        </div>
        <div class="footer-address">
          <h4>電話:03-1234567</h4>
          <h4>地址:台東縣台東市岩灣路101巷999號</h4>
        </div>
        <!-- <div class="footer-social" v-for="link in socialLinks" :key="link.alt">
         <RouterLink ><img :src="require('link.src')" :alt="link.alt"/> </RouterLink>
         
        </div> -->
  
      </div>
  
    </div>
    <div class="copyright">本網站為緯育TibaMe前端設計工程師班第85期學員專題作品，本平台僅供學習、展示之用。</div>
  </section>
    </div>
</template>


  <script setup>
import {ref} from 'vue';
import { RouterLink } from 'vue-router'

const footerText=ref([{
    name:'最新消息',src:`/news`},
{name:'常見問題',src:`/q&a`},
{name:'關於我們',src:`/about`}, 
{name:'周邊景點',src:`/tour`},
{name:'房型介紹',src:`/room`},
{name:'線上訂房',src:`/online`}
])

const socialLinks=ref([{

src:'@/assets/images/index/footer/tweet.svg',
alt:'seesea_tweet'
},
{
    src:'@/assets/images/index/footer/ins.svg',
alt:'seesea_ins'
},{
    src:'@/assets/images/index/footer/fb.svg',
alt:'seesea_fb'
},{
    src:'@/assets/images/index/footer/line white.svg',
alt:'seesea_line'
}])

</script>