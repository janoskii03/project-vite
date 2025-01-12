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
                <input type="date" v-model="state.checkInDate">
              </label>
            </div>
            <div class="online-info-quit">
              <label for="">離開日期
                <input type="date" v-model="state.checkOutDate"></label>
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
              <Modal
                :roomInfo="{ room: '海洋雙人房', checkInDate: state.checkInDate, checkOutDate: state.checkOutDate, price: '2000' }" />

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
          <AddList />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import AddList from '../../components/AddList/AddList.vue';
import Modal from '@/components/Modal/Modal.vue'

const state = reactive({
  checkInDate: '',
  checkOutDate: '',
});





</script>
