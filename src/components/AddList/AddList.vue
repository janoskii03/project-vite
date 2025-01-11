<template>

    <div class="online-add-list">
        <h3>加購行程</h3>
        <div class="row row-cols-1 row-cols-md-2  row-cols-lg-3 ">
            <div class="col" v-for="(item, index) in state.data" :key="index">
                <div class="add-card">
                    <div class="add-card-pic">
                        <a href="#"><img src="@/assets/images/room/Mask group.jpg" alt="seesea-activity" /></a>
                    </div>
                    <div class="add-card-txt">
                        <span>{{ item.tag.split(',').map((item) => `#${item}`).join(' ') }}</span>
                        <div class="add-card-title">
                            <h4><a href="#">{{ item.name }}</a></h4>
                            <h4>{{ item.cancel }}</h4>
                        </div>
                        <span class="card-txt-hour"><a href="#">{{ item.period }}</a></span>
                        <p><a href="#">{{ item.desc }}</a></p>
                        <div class="add-card-bottom">
                            <h4><a href="#">NT${{ item.price }}</a></h4>
                            <h4>{{ item.people }}人已購買</h4>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        <span class="add-more"><a href="#">更多行程></a></span>
    </div>

</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import './AddList.scss'

const state = reactive({
    data: []
});


const fetchData = () => axios.get('addList.json').then((res) => {
    state.data = res.data;
}).catch((error) => console.log(error));

onMounted(() => {
    fetchData();
})

</script>
