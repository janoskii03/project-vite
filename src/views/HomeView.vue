

<template>


  <main>

<div id="topMessage">6/1~6/31新會員招募中，享有優惠，<a class="discount">詳細資訊</a>
</div> 
<div class="modal">
<div class="modal-header">
<div class="modal-header-title">優惠資訊</div>
<button class="modal-close-btn">&times;</button>
</div>

<div class="modal-body">
凡6/1~6/31加入Line會員者，即可享有住宿95折優惠，優惠到112/12/31為止，趕緊把握唷!
</div>

</div>
<div id="overlay"></div>
<div class="banner">
  <video autoPlay muted class="banner_video">
    <source src='@/assets/images/coverr-philippine-islands-2985-1080p.mp4' type="video/mp4" />
  </video>
  <h4>Stay Here and Enjoy</h4>
</div>


<div class="home-booking ">
  <div class="container">
    <div class="home-booking-info">
      <div class="booking-info-in">
        <label for="">入住日期
        </label>
        <input type="date" value="2023-06-10">
      </div>
      <div class="booking-info-quit">
        <label for="">離開日期
        </label>
        <input type="date" value="2023-06-11">
      </div>
      <div class="booking-info-man">
        <label for="">大人</label><img src="@/assets/images/online/Vector.svg" alt="plus" id="indexPlus">
        <input id="indexAdult" type="text" value="0" style="text-align: center;">
        <img src="@/assets/images/online/minus-solid 1.svg" alt="minus"  id="indexMinus">
      </div>

      <div class="booking-info-child">
        <label for="">小孩</label><img src="@/assets/images/online/Vector.svg" alt="plus" id="indexChildPlus">
        <input id="indexChild" type="text" value="0" style="text-align: center;">
        <img src="@/assets/images/online/minus-solid 1.svg" alt="minus" id="indexChildMinus">
      </div>

      <button class="booking-btn"><a href="online.html">預約</a></button>
    </div>
  </div>
</div>


<section class="home">
  <div class="container">
    <div class="home-weather area">
      <h4 class="home-weather-title">臺東市 <span id="nowTime"></span></h4>

      <div class="home-weather-list">
        <div class="home-weather-country">
          <h4>氣溫:19~25℃</h4>
          <img src="@/assets/images/index/cloud-sun-solid 1.svg" alt="weather">
        </div>
        <div class="home-weather-sun">
          <h4>紫外線</h4>
          <span>低量級</span>
        </div>

        <div class="home-weather-rain">
          <h4>降雨機率</h4>

          <span>20%</span>
        </div>
        <div class="home-weather-sunrise">
          <h4>明晨日出</h4>
          <span>05:11</span>
        </div>
        <div class="home-weather-air">
          <h4>空氣品質</h4>

          <span>良好</span>
        </div>
      </div>
    </div>
  </div>

<HomeNews></HomeNews>
<HomeSpot></HomeSpot>

  <!-- <div class="home-spot area">
    <div class="container">
      <h2>鄰近景點</h2>
      <div class="spot-area-list">
        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/BrownAvenue.jpg" alt="
  Brown Avenue">
            </a>
          </div>
          <div class="spot-area-text">
            <h4>伯朗大道</h4>
            <p>位於台灣台東縣太麻里鄉，是一條全長約4公里的美麗林蔭大道。</p>
            <p>地址:958台東縣池上鄉錦新三號道路</p>
          </div>
        </div>

        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/ChuluRanch.jpg" alt="Chulu Ranch">
            </a>
          </div>
          <div class="spot-area-text">

            <h4>初鹿牧場</h4>
            <p>位於台灣台東縣鹿野鄉，是一個以草原生態和牧羊養殖為主題的休閒農場。</p>
            <p>地址:954台東縣卑南鄉牧場1號</p>
          </div>

        </div>

        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/ZhibenHotSpring.jpg" alt="Zhiben Hot Spring">
            </a>
          </div>

          <div class="spot-area-text">

            <h4>知本溫泉</h4>
            <p>以泡湯聞名全臺的知本溫泉，知本溫泉屬於弱鹼性碳酸氫鈉泉，清澈無色，富含礦物質。</p>
            <p>地址:954台東縣卑南鄉溫泉村</p>
          </div>
        </div>

        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/star.jpg" alt="star"></a>
          </div>
          
          <div class="spot-area-text">

            <h4>星星部落</h4>
            <p>位於台東富源村，是一個人氣景點 ，可將整個台東市的夜色一覽無遺。</p>
            <p>地址:953台東縣卑南鄉富源村8鄰116之3號</p>
          </div>
        </div>

        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/Sanxiantai.jpg" alt="Sanxiantai">
            </a>
          </div>
          <div class="spot-area-text">

            <h4>三仙台</h4>
            <p>三仙台由三座石灰岩峰狀的岩石組成，分別為松山、竹山和梅山。</p>
            <p>地址:961台東縣成功鎮基翬路74號</p>
          </div>
        </div>

        <div class="home-spot-area">
          <div class="spot-area-pic">
            <a href="tour.html"><img src="@/assets/images/index/main-tour/Tomioka Geopark.jpg" alt="Tomioka Geopark">
            </a>
          </div>
          <div class="spot-area-text">
            <h4>富岡地質公園</h4>
            <p>位於台灣台東縣成功鎮和長濱鄉交界處，是一個集地質、生態、人文等多元元素的自然公園。</p>
            <p>地址:950台東縣台東市松江路一段500號</p>
          </div>

        </div>
      </div>

   
      <div class="home-spot-youtube area">
        <div class="row ">
        <div class="col">

          
          <iframe width="600px" height="450px" src="https://www.youtube.com/embed/WA7GEXVGAP0"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
          
        </div>
        
        <div class="col">
          <iframe width="600px" height="450px" src="https://www.youtube.com/embed/uRJqpcGOuJs"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </div>
        <div class="col">
          <iframe width="600px" height="450px" src="https://www.youtube.com/embed/UCG1aXVO8H8"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </div>
        <div class="col">

          <iframe width="600px" height="450px" src="https://www.youtube.com/embed/TY4qQElcUrA"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </div>
         

          </div>
        </div>
      </div>
  </div>  -->

  <div class="home-food area">
    <div class="container">
      <h2>美味佳餚</h2>
      <div class="home-food-area">

        <div class="home-food-pic" >
          <img src="@/assets/images/index/main-food/anna-pelzer-IGfIGP5ONV0-unsplash 1.jpg" alt="food">
          <img src="@/assets/images/index/main-food/alex-munsell-Yr4n8O_3UPc-unsplash 1.jpg" alt="food">
          <img src="@/assets/images/index/main-food/do-mee-SH8_JmrsQcw-unsplash 1.jpg" alt="food">
        </div>
        <div class="home-food-txt">
          <p>採用當日新鮮食材製作，
            讓您品嚐台東道地的美味</p>
        </div>
      </div>
    </div>
  </div>

  <div class="home-facility area">
    <div class="home-facility-container">
      <div class="home-facility-list">
        <div class="facility-card">
          <div class="facility-card-pic"><img src="@/assets/images/index/pool.svg"></div>
          <div class="facility-card-text">
            <h4>游泳池</h4>
            <p>室外溫水游泳池，定期檢查水持化學物質濃度，旁邊有簡易淋浴間&SPA，並提供浮板或救生圈，未滿12歲之孩童，建議由家長陪同，本民宿不負任何責任 </p>
          </div>
        </div>
        <div class="facility-card">
          <div class="facility-card-pic"><img src="@/assets/images/index/family.svg"></div>
          <div class="facility-card-text">
            <h4>家庭房</h4>
            <p>提供溫馨的家庭房間，搭配貼心的服務，讓您能夠享受如同家的感覺</p>
          </div>
        </div>
        <div class="facility-card">
          <div class="facility-card-pic"><img src="@/assets/images/index/heart.svg"></div>
          <div class="facility-card-text">
            <h4>環境友善</h4>
            <p>在現代社會中，我們面臨著許多環境問題，包括氣候變化、資源枯竭、生物多樣性喪失等。為了解決這些問題，環境友善的行動和選擇變得非常重要。</p>
          </div>
        </div>
        <div class="facility-card">
          <div class="facility-card-pic"><img src="@/assets/images/index/parking.svg"></div>
          <div class="facility-card-text">
            <h4>免費停車場</h4>
            <p>10個機車停車格和4個汽車停車格且配有監視器，時時保護您的愛車，汽車停車格採預約停放</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="home-room area">
    <div class="container">
      <h2>房型介紹</h2>
      <div class="room-card-list">
        <div class="room-card">
          <div class="room-card-pic">
            <a href="room.html"> <img src="@/assets/images/index/main-room/1.jpg" alt="seesea-room-number1"></a>
          </div>
          <div class="room-card-txt">
            <h4>海洋雙人房</h4>
            <span>入住您將能夠在浪漫而寧靜的環境中與您的伴侶共度美好時光。無論是觀賞日出或日落，都能讓您的度假更加難忘。讓我們的海洋雙人房成為您海濱度假的理想選擇。</span>
            <span>建議人數:2-4人、面積:30平方公尺</span>

            <span>價格$2000</span>
            <button><a href="room.html">查看更多</a></button>
          </div>
        </div>

        <div class="room-card">
          <div class="room-card-pic">
            <a href="room.html"> <img src="@/assets/images/index/main-room/2.jpg" alt="seesea-room-number1"></a>
          </div>
          <div class="room-card-txt">
            <h4>簡約雙人房</h4>
            <span>入住您將能夠在浪漫而寧靜的環境中與您的伴侶共度美好時光。無論是觀賞日出或日落，都能讓您的度假更加難忘。讓我們的簡約雙人房成為您海濱度假的理想選擇。</span>
            <span>建議人數:2-4人、面積:30平方公尺</span>
            <span>價格$2000</span>
            <button><a href="room.html">查看更多</a></button>
          </div>
        </div>
        <div class="room-card">
          <div class="room-card-pic">
            <a href="room.html"> <img src="@/assets/images/index/main-room/3.jpg" alt="seesea-room-number1"></a>
          </div>
          <div class="room-card-txt">
            <h4>溫馨四人房</h4>
            <span>入住您將能夠在浪漫而寧靜的環境中與您的伴侶共度美好時光。無論是觀賞日出或日落，都能讓您的度假更加難忘。讓我們的溫馨四人房成為您海濱度假的理想選擇。</span>
            <span>建議人數:4-6人、面積:40平方公尺</span>
            <span>價格$3000</span>
            <button><a href="room.html">查看更多</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

<section class="map area">
  <h2>位置</h2>
  <div class="container">
    <div class="google-map">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.235355691627!2d121.12052367442446!3d22.793741424830618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346fba2d125d3459%3A0x6ae15f1fb75cb961!2z5Y-w5p2x6LuK56uZ!5e0!3m2!1szh-TW!2stw!4v1684118062897!5m2!1szh-TW!2stw"
        width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="map-txt">
      <h3>交通指南</h3>

      <ul>
        <li>搭到台東車站，步行三分鐘，約200公尺，即可抵達。</li>

        <li>自行開車<br />北部:國三、國五接台九線，即可抵達。</li>
        <li>南部:國三接台九線，即可抵達。</li>

        <li>搭火車<br />位於台東車站附近，搭車、自行開車可抵達。</li>
      </ul>
    </div>
  </div>
</section>

<section class="main-about area">
  <div class="container">
    <form>
      <h3>聯絡我們</h3>
      <div class="about-group">
        <label>姓名
        </label>
        <input type="facility-card-text" required />
      </div>
      <div class="about-group">
        <label>電話
        </label>
        <input type="tel" required />
      </div>
      <div class="about-group">
        <label>信箱 </label>
        <input type="email" class="ooxx" required />
      </div>
      <div class="about-group">
        <label>地址 </label>
        <input type="facility-card-text" required />
      </div>

      <div class="about-type">


        <label>種類 </label>
        <label for=""> <input type="radio" name="type" />設施</label>

          <label for=""> <input type="radio" name="type" />服務 </label>
          <label for=""> <input type="radio" name="type" />其他 </label>
      </div>
      <div class="illustrate">
        <label for="">說明</label>
        <textarea required></textarea>
      </div>
      <button><a href="#">送出</a></button>
    </form>
  </div>
</section>

<div class="add-friend">
  <a href="#">
    <p>
      歡迎加入官方LINE群組<br />
      掌握第一手的消息
    </p>
  </a>
  <a href="#"><img src="@/assets/images/index/footer/line 1 (2).svg" /></a>
</div>
  </main>
</template>

<script setup>
import HomeNews from '../components/HomeNews.vue';
import HomeSpot from '../components/HomeSpot.vue';

import { ref, reactive } from 'vue';


const homeFood = reactive([
'anna-pelzer-IGfIGP5ONV0-unsplash 1.jpg',
'alex-munsell-Yr4n8O_3UPc-unsplash 1.jpg',
'do-mee-SH8_JmrsQcw-unsplash 1.jpg',

])
</script>