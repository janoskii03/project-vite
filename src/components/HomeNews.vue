<template>
        <div class="home-news ">
    <div class="home-news-container">
      <h2>最新消息</h2>
      <div class="news-card-list" >
        <div class="news-card"  v-for="news in homeNews" :key="news.title">
          <div class="news-card-pic">
            <img :src="`src/assets/images/index/main-news/${news.img}`" :alt="news.title">
          </div>
          <div class="news-txt">
            <p>{{ news.title }}</p>
            <div class="news-bottom">
              <p>{{ news.date }}</p>
              <img src="@/assets/images/index/main-news/eye.svg" alt="viewer">
              <span>{{ news.viewer }}</span>
            </div>
          </div>
        </div>
      </div>
      <button><a href="news.html">了解更多</a></button>
    </div>
  </div>

   
</template>

<script setup>
import {ref,reactive} from 'vue';


const homeNews = reactive([{
img:'Sanxiantai.jpg',
title:'夜探三仙台 -三仙台5月至10月開放預約報名',
date:'2023-04-27',
viewer:1458
},
{
img:'flower.jpg',
title:'台東鹿野地區油桐花季',
date:'2023-04-21',
viewer:23213
},
{
img:'museum.jpg',
title:'國立台灣史前文化博物館將於5/19(五)重新開幕',
date:'2023-04-27',
viewer:11458
},
])



</script>