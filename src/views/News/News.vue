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
                    <div class="news-btns">
                        <button class="btns btn-all"><a href="#">所有訊息</a></button>
                        <button class="btns btn-tour"><a href="#">旅遊訊息</a></button>
                        <button class="btns btn-art"><a href="#">藝術亮點</a></button>
                        <button class="btns btn-media"><a href="#">媒體分享</a></button>
                    </div>

                    <div class="news-card-list">

                        <div class="news-card " v-for="(item, index) in newsData" :key="index">
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
        const state = {
            avtiveType: '',
            newsData: [],

        }

        const menu = computed(() => {
            const filterMenu = [{ type: 'all' }]

            return filterMenu
        })

        const getNewsData = () => {
            state.newsData = news;
        }

        onMounted(() => {
            getNewsData();
        })

        return {
            ...toRefs(state),
            menu
        }
    }

}

</script>
