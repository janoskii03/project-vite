<!-- <template>
  <div>
    <div class="question-breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="index.html">首頁</a></li>
        <li><a href="q&a.html">常見問題</a></li>
      </ol>
    </div>

    <section class="question">
      <div class="container">
        <div class="row">
          <h3 class="question-title">常見問題</h3>

          <div class="question-list">
            <h3>住宿</h3>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>入住和退房時間是幾點？</h4>
              </div>
              <div class="list-faq-answer">
                <p>
                  我們辦理入住時間從15:00開始，
                  退房時間至11:00止。視客房供應狀況，您可以在訂
                  房時提出「提前入住」或「延後退房」的需求 ;
                  若住客在非指定時間辦理入住或退房， 可能需支付額外費用 ;
                  也提供入住前及退房後的行李寄放服務。
                </p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>有提供腳踏車嗎？</h4>
              </div>
              <div class="list-faq-answer">
                <p>我們沒有提供腳踏車，附近有U-bike可供使用</p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>有洗衣機和烘衣機嗎？</h4>
              </div>
              <div class="list-faq-answer">
                <p>我們洗衣機和烘衣機放在一樓，曬衣場也是</p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>有機、汽車停車位嗎？</h4>
              </div>
              <div class="list-faq-answer">
                <p>我們有10個機車停車格和4個汽車停車格，汽車停車格採預約停放</p>
              </div>
            </div>
            <h3>交通</h3>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>哪座機場離的最近？</h4>
              </div>
              <div class="list-faq-answer">
                <p>最近的機場是台東機場，距離約5公里。</p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>哪座火車站、捷運站或公車站離的最近？</h4>
              </div>
              <div class="list-faq-answer">
                <p>台東車站是最近的站點，離約200公尺，步行3分鐘。</p>
              </div>
            </div>

            <h3>旅遊</h3>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>附近有什麼熱門景點？</h4>
              </div>
              <div class="list-faq-answer">
                <p>
                  三仙台、星星部落(夜景)、伯朗大道、富岡地質公園(小野柳)、初鹿牧場、知本森
                  林遊樂園知本森林遊樂園
                </p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>附近有什麼夜市？</h4>
              </div>
              <div class="list-faq-answer">
                <p>台東觀光夜市、寶桑豆花湯圓、老東台米苔目、林家臭豆腐</p>
              </div>
            </div>
            <div class="question-list-faq">
              <div class="list-faq-question">
                <img src="@/assets/images/Q&A/Vector.svg" alt="plus" />
                <h4>附近有什麼美食？</h4>
              </div>
              <div class="list-faq-answer">
                <p>公正包子、中華早點、阿鋐炸雞、特選海產店</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> -->
<template>
  <div class="question-breadcrumb">
    <ol class="breadcrumb-list">
      <li><a href="index.html">首頁</a></li>
      <li><a href="q&a.html">常見問題</a></li>
    </ol>
  </div>
  <div class="question">
    <div class="container">
      <div class="row">
        <h3 class="question-title">常見問題</h3>
        <div class="question-list">
          <a-collapse v-model:activeKey="activeKey" :bordered="false">
            <a-collapse-panel :header="item.title" v-for="(item, index) in state.data" :key="index + 1">
              <p>{{ item.answer }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>

      </div>

    </div>

  </div>

</template>
<script setup>
import { reactive, ref, toRefs, onMounted } from 'vue';
import axios from 'axios';


const activeKey = ref([0]);
const state = reactive({ data: [] });



const fetchData = () => axios.get('qa.json').then((res) => {
  state.data = res.data;

}).catch((error) => console.log(error))
  ;

onMounted(() => {
  fetchData();
})

</script>
