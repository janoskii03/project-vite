<template>
    <div>
         <div class="online-breadcrumb">
    <ol class="breadcrumb-list">
      <li><a href="index.html">首頁</a></li>
      <li><a href="online.html">線上訂房</a></li>
    </ol>
  </div>

  <section class="online">
    <div class="container">
<div class="row  row-cols-1 row-cols-md-2  row-cols-lg-3 row-cols-xl-4">
      <div class="online-info">
        <div class="online-info-in">
          <label for="">入住日期
            <input id="checkIn" type="date" value="2023-06-10">
          </label>
        </div>
        <div class="online-info-quit">
          <label for="">離開日期
            <input id="checkOut" type="date" value="2023-06-11"></label>
        </div>

        <div class="online-info-man">
          <label for="">大人</label><img src="@/assets/images/online/Vector.svg" alt="plus" id="plus">
          <input id="adult" type="text" value="0" style="text-align: center;" min="0">
          <img src="@/assets/images/online/minus-solid 1.svg" alt="minus" id="minus">
        </div>

        <div class="online-info-child">
          <label for="">小孩</label><img src="@/assets/images/online/Vector.svg" alt="plus" id="childPlus">
          <input id="children" type="text" value="0" style="text-align: center;" min="0">
          <img src="@/assets/images/online/minus-solid 1.svg" alt="minus" id="childMinus">
        </div>
      </div>
      <div class="col">
        <div class="online-card">
          <h4><a href="#">海洋雙人房</a>
          </h4>
          <div class="online-card-pic"><a href="#"><img src="@/assets/images/online/1.jpg"></a>
          </div>
          <span><a href="#">NT 2,000</a> </span>
          <button  id="ocean" class="reserve-btn"><a href="#">預約</a></button>
        </div>
      </div>
      <div class="col">
        <div class="online-card">
          <h4><a href="#">簡約雙人房</a></h4>
          <div class="online-card-pic"><a href="#"><img src="@/assets/images/online/2.jpg"></a>
          </div>
          <span><a href="#">NT 2,000</a></span>
          <button id="simple" class="reserve-btn"><a href="#">預約</a></button>
        </div>
      </div>
      <div class="col">
        <div class="online-card">
          <h4><a href="#">溫馨四人房</a></h4>
          <div class="online-card-pic"><a href="#"><img src="@/assets/images/online/3.jpg"></a>
          </div>
          <span><a href="#">NT 3,000</a></span>
          <button id="four" class="reserve-btn"><a href="#">預約</a></button>
        </div>
      </div>
      <div class="online-know">
        <h3>訂房須知</h3>
        <ul>
          <li>我們辦理入住時間從15:00開始， 退房時間至11:00止。視客房供應狀況，您可以在訂
            房時提出「提前入住」或「延後退房」的需求 ; 若住客在非指定時間辦理入住或退房，
            可能需支付額外費用 ; 也提供入住前及退房後的行李寄放服務。</li>
          <li>我們有10個機車停車格和4個汽車停車格，汽車停車格採預約停放。</li>
          <li>洗衣機和烘衣機放在一樓，曬衣場也是。</li>
          <li>六歲以下孩童免費，六歲以上孩童一名加收600元。</li>
          <li>晚餐採用當日購買的新鮮食材，菜色不固定，如有吃素者，請提前告知</li>
          <li>恕不提供一次性拋棄式盥洗用品 （註：牙刷組、梳子、浴帽、刮鬍刀、棉花棒、毛巾）。續住的貴賓，我們也不主動更換床單，若是忘了攜帶個人盥洗用品，請您告知櫃台人員。
          </li>
        </ul>
      </div>


      <div class="online-add-list">
        <h3>加購行程</h3>
        <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 ">
        <div class="col ">
          <div class="add-card">
            <div class="add-card-pic">
              <a href="#"><img src="@/assets/images/room/Mask group.jpg" alt="seesea-activity" /></a>
            </div>
            <div class="add-card-txt">
              <span>#潛水浮潛</span>
              <div class="add-card-title">
                <h4><a href="#">台東潛水體驗</a></h4>
                <h4>7日內免費取消</h4>
              </div>
              <span class="card-txt-hour"><a href="#">2-4小時</a></span>
              <p><a href="#">體驗一下台東海洋之美，並享受豐富的生態</a></p>
              <div class="add-card-bottom">
                <h4><a href="#">NT$2000</a></h4>
                <h4>150人已購買</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="add-card">
            <div class="add-card-pic">
              <a href="#"><img src="@/assets/images/room/Mask group (1).jpg" alt="seesea-activity" /></a>
            </div>
            <div class="add-card-txt">
              <span>#離島旅遊</span>
              <div class="add-card-title">
                <h4><a href="#">綠島一日遊</a></h4>
                <h4>7日內免費取消</h4>
              </div>
              <span class="card-txt-hour"><a href="#">4-6小時</a></span>
              <p>
                <a href="#">探索隱藏於熱帶天堂的自然島嶼，享受湛藍的大海美景</a>
              </p>
              <div class="add-card-bottom">
                <h4><a href="#">NT$3000</a></h4>
                <h4>250人已購買</h4>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="add-card">
            <div class="add-card-pic">
              <a href="#"><img src="@/assets/images/room/Mask group (2).jpg" alt="seesea-activity" /></a>
            </div>
            <div class="add-card-txt">
              <div class="card-txt-small">
                <span>#空中觀光 </span>
                <span> #季節限定</span>
              </div>
              <div class="add-card-title">
                <h4><a href="#">熱氣球之旅</a></h4>
              </div>
              <span class="card-txt-hour"><a href="#">1小時</a></span>
              <p>
                <a href="#">在高空中觀賞東台灣的美景，一生值得去一次的旅程</a>
              </p>
              <div class="add-card-bottom">
                <h4><a href="#">NT$10000</a></h4>
                <h4>15人已購買</h4>
              </div>
            </div>
          </div>
        </div>
        </div>
        <span class="add-more"><a href="#">更多行程></a></span>
      </div>

    </div>
    </div>
  </section>

  <div class="modal">
    <div class="modal-header">
      <div class="modal-header-title">您的訂房資訊</div>
      <button class="online-modal-close-btn">&times;</button>
    </div>
    
    <div class="modal-body">
      
    </div>
    <div class="modal-btns">
      <button id="onlinePayment" ><a href="payment.html">結帳</a></button>
      <button id="back"><a href="#">返回</a></button>
    </div>



      </div>
      <div class="online-overlay"></div>
    </div>
</template> 