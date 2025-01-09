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
