<template>
  <div class="home-spot area">
    <div class="container">
      <h2>鄰近景點</h2>
      <div class="spot-area-list">
        <div class="home-spot-area" v-for="spot in homeSpot" :key="spot.title">
          <div class="spot-area-pic">
            <a href="tour.html"><img :src="`src/assets/images/index/main-tour/${spot.img}`" alt="
  Brown Avenue">
            </a>
          </div>
          <div class="spot-area-text">
            <h4>{{ spot.title }}</h4>
            <p>{{ spot.statement }}</p>
            <p>{{ spot.address }}</p>
          </div>
        </div>
      </div>
      <div class="home-spot-youtube area">
        <div class="row ">
          <div class="col" v-for="youtube in homeYoutube" :key="youtube">
            <iframe width="600px" height="450px" :src="youtube"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';


const homeSpot = reactive([
  {
    img: 'BrownAvenue.jpg',
    title: '伯朗大道',
    statement: '位於台灣台東縣太麻里鄉，是一條全長約4公里的美麗林蔭大道。',
    address: '地址:958台東縣池上鄉錦新三號道路',
  },
  {
    img: 'ChuluRanch.jpg',
    title: '初鹿牧場',
    statement: '位於台灣台東縣鹿野鄉，是一個以草原生態和牧羊養殖為主題的休閒農場。',
    address: '地址:954台東縣卑南鄉牧場1號',
  },
  {
    img: 'ZhibenHotSpring.jpg',
    title: '知本溫泉',
    statement: '以泡湯聞名全臺的知本溫泉，知本溫泉屬於弱鹼性碳酸氫鈉泉，清澈無色，富含礦物質。',
    address: '地址:954台東縣卑南鄉溫泉村',
  },
  {
    img: 'star.jpg',
    title: '星星部落',
    statement: '位於台東富源村，是一個人氣景點 ，可將整個台東市的夜色一覽無遺。',
    address: '地址:953台東縣卑南鄉富源村8鄰116之3號',
  },
  {
    img: 'Sanxiantai.jpg',
    title: '三仙台',
    statement: '三仙台由三座石灰岩峰狀的岩石組成，分別為松山、竹山和梅山。',
    address: '地址:961台東縣成功鎮基翬路74號',
  },
  {
    img: 'Tomioka Geopark.jpg',
    title: '富岡地質公園',
    statement: '位於台灣台東縣成功鎮和長濱鄉交界處，是一個集地質、生態、人文等多元元素的自然公園。',
    address: '地址:950台東縣台東市松江路一段500號',
  },

])

const homeYoutube = reactive([
'https://www.youtube.com/embed/WA7GEXVGAP0',
'https://www.youtube.com/embed/uRJqpcGOuJs',
'https://www.youtube.com/embed/UCG1aXVO8H8',
'https://www.youtube.com/embed/TY4qQElcUrA'
])


</script>