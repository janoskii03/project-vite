<template>
    <div class="modal-wrap">
        <a-style-provider hash-priority="high">
            <a-button class="modal-button" @click="showModal">預約</a-button>
            <a-modal v-model:open="open" centered title="您的預約資訊" @ok="handleOk" v-if="props.roomInfo['adult']">
                <p>入住日期:{{ props.roomInfo['checkInDate'] }}</p>
                <p>離開日期:{{ props.roomInfo['checkOutDate'] }}</p>
                <p>選擇房間:{{ props.roomInfo['room'] }}</p>
                <p>人數:{{ props.roomInfo['adult'] }}位大人，{{ props.roomInfo['children'] }}位小孩</p>
                <p> 金額: {{ props.roomInfo['price'] }}</p>
            </a-modal>
            <a-modal v-model:open="open" centered title="您好" @ok="handleOk" v-else>
                <p>請填寫詳細</p>

            </a-modal>
        </a-style-provider>
    </div>
</template>
<script lang="ts" setup>
export interface Props {
    roomInfo?: string | Object

}

import { ref } from 'vue';
const open = ref<boolean>(false);
const props = defineProps<Props>()

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
