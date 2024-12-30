<template>
    <div class="news-wrap">
        <div class="news-breadcrumb">
            <ol class="breadcrumb-list">
                <li><a href="index.html">首頁</a></li>
                <li><a href="aboutus.html">最新消息</a></li>
            </ol>
        </div>
        <section class="news">
            <div class="container">
                <div class="row">
                    <h3>最新消息</h3>
                    <div class="news-btns" v-if="menu.length > 1">
                        <span class="btns" :class="item" v-for="(item, index) in menu" :key="index"
                            @click="changeTab(item)">{{
                                item === 'all' ? '全部訊息' : item }}</span>
                    </div>

                    <div class="news-card-list">

                        <div class="news-card " v-for="(item, index) in filterData" :key="index">
                            <div class="news-card-date">{{ item.date }}</div>
                            <div class="news-card-pic">
                                <img src="@/assets/images/news/1.jpg" alt="Sanxiantai">
                            </div>
                            <div class="news-card-txt">
                                <h4>{{ item.title }}</h4>
                                <p>{{ item.desc }}

                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import './News.scss'
import { computed, watch, onMounted, reactive, toRefs } from 'vue';
import news from '@/assets/Json/news.json';

export default {
    setup() {
        const state = reactive({
            activeType: '',
            newsData: [],

        })

        const menu = computed(() => {
            const filterMenu = [...new Set(state.newsData.map(item => item.type))]
            return ['all', ...filterMenu];
        })

        const filterData = computed(() => {
            if (state.activeType === 'all' || state.activeType === '') {
                return state.newsData;
            }
            return state.newsData.filter((item) => item.type === state.activeType);
        })



        const getNewsData = () => {
            state.newsData = news;
        }

        const changeTab = (type) => {
            state.activeType = type;
        }

        onMounted(() => {
            getNewsData();
        })

        return {
            ...toRefs(state),
            menu,
            changeTab,
            filterData
        }
    }

}

</script>
