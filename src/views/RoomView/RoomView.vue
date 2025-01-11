<template>
  <div>
    <div class="room-breadcrumb">
      <ol class="breadcrumb-list">
        <li><a href="index.html">首頁</a></li>
        <li><a href="room.html">房型介紹</a></li>
      </ol>
    </div>

    <section class="room">
      <div class="container">
        <div class="room-card">
          <h4>海洋雙人房</h4>
          <div class="room-card-pic">
            <img class="card-pic-main img" id="large" src="@/assets/images/room/room/one/Mask group.png"
              alt="seesea-room1" />
            <div class="card-pic-other">
              <div class="card-other-pic img"><img src="@/assets/images/room/room/one/Mask group-4.jpg"
                  alt="seesea-room1" /></div>
              <div class="card-other-pic img"><img src="@/assets/images/room/room/one/Mask group-1.png"
                  alt="seesea-room1" /></div>
              <div class="card-other-pic img"> <img src="@/assets/images/room/room/one/Mask group-3.png"
                  alt="seesea-room1" /></div>

            </div>
          </div>
        </div>
        <div class="room-card-info">
          <ol class="card-info">
            <li>客房資訊</li>
            <li>面積:20平方公尺</li>
            <li>人數:2-4 人</li>
            <li>床型:雙人床</li>
            <li>景觀:面海</li>
          </ol>
          <ol class="card-other">
            <li>客房設備</li>
            <li>羽絨枕、羽絨被</li>
            <li>席夢思床墊</li>
            <li>沐浴用品</li>
            <li>吹風機、毛巾、拖鞋</li>
            <li>免治馬桶、衛浴間乾濕分離</li>
            <li>無線免費上網</li>
            <li>可調式空調</li>
            <li>液晶電視、MOD</li>
            <li>熱水壺、免費飲用水、咖啡</li>
            <li>冰箱</li>
          </ol>
          <ol class="card-care">
            <li>其他服務</li>
            <li>免費停車場</li>
            <li>洗衣及烘衣服務</li>
            <li>免費寄托行李</li>
            <li>酒吧</li>
          </ol>
        </div>
        <div class="room-card-last">
          <ol>
            <div class="card-last-title">注意事項</div>
            <li>每房附贈晚餐一客</li>
            <li>入住時間為15:00-20:00</li>
            <li>六歲以下孩童免費，六歲以上孩童一名加收600元</li>
            <li>為保護環境，有些盥洗用品為一次性用品</li>
          </ol>

          <div class="card-last-price">
            <h4>NT 2,000</h4>
            <button class="last-price-btn"><a href="#">馬上預約</a></button>
          </div>
        </div>
        <AddList />
        <div class="room-others">
          <h3>其它房型</h3>
          <div class="room-others-room">
            <div class="others-room">
              <h4>簡約雙人房</h4>
              <div class="others-room-pic">
                <a href="#"><img src="@/assets/images/room/room/two/2.jpg" alt="seesea-rooms" /></a>
              </div>
            </div>
            <div class="others-room">
              <h4>溫馨四人房</h4>
              <div class="others-room-pic">
                <a href="#"><img src="@/assets/images/room/room/three/3.jpg" alt="seesea-rooms" /></a>
              </div>
            </div>
          </div>
        </div>

        <div class="room-evaluate">
          <h3>客戶評價</h3>
          <div class="owl-carousel owl-theme">
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Amy</h4>
                  <p>2023/05/09</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                很適合全家旅遊放鬆，下次還會再來!!
              </p>
            </div>
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Ted</h4>
                  <p>2023/05/15</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                老闆很熱情地介紹附近景點，此次旅行超值
              </p>
            </div>
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Peter</h4>
                  <p>2023/05/16</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                房間舒適、老闆熱情，推薦景點很棒
              </p>
            </div>
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Amy</h4>
                  <p>2023/05/09</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                很適合全家旅遊放鬆，下次還會再來!!
              </p>
            </div>
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Ted</h4>
                  <p>2023/05/15</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                老闆很熱情地介紹附近景點，此次旅行超值
              </p>
            </div>
            <div class="item">
              <div class="room-evaluate-user">
                <img src="@/assets/images/room/user-regular 3.svg" alt="guest" />
                <div class="room-evaluate-txt">
                  <h4>Peter</h4>
                  <p>2023/05/16</p>
                </div>
              </div>
              <p class="room-evaluate-description">
                房間舒適、老闆熱情，推薦景點很棒
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import Swiper from 'swiper';
import 'swiper/css';
import AddList from '../../components/AddList/AddList.vue';





</script>
