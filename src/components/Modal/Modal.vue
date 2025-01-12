<template>
    <div class="modal-wrap">
        <a-style-provider hash-priority="high">
            <a-button class="modal-button" @click="showModal">預約</a-button>
            <a-modal v-model:open="open" centered title="您的預約資訊" @ok="handleOk">
                <p>入住日期:{{ props.roomInfo['checkInDate'] }}</p>
                <p>離開日期:{{ props.roomInfo['checkOutDate'] }}</p>
                <p>選擇房間:{{ props.roomInfo['room'] }}</p>
                <p>人數:{{ props.roomInfo }}</p>
                <p> 金額: {{ props.roomInfo['price'] }}</p>
            </a-modal>
        </a-style-provider>
    </div>
</template>
<script lang="ts" setup>


import { ref } from 'vue';
const open = ref<boolean>(false);
const props = defineProps({
    roomInfo: String || Object,
})

const showModal = () => {
    open.value = true;
};

const handleOk = (e: MouseEvent) => {
    open.value = false;
};
</script>

<style lang="scss" scoped>
.modal-wrap {

    .modal-button {
        width: fit-content;
        height: 100%;
        color: #fff;
    }

    .ant-btn {
        background-color: #fff;
    }
}
</style>
