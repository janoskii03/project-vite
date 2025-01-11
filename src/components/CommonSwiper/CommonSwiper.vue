<template>
  <div class="common-swiper" :class="[{ isOverflowContainer, fit }, `${name}-swiper`]"
    :style="{ gap: `${options?.spaceBetween ?? 0}px` }">
    <template v-if="showArrow">
      <div class="swiper-arrow prev" :class="`${name}-prev`" slot="button-prev">
        <slot name="arrowLeft">
          <img src="@/assets/images/svg/arrow-left.svg" alt="">
        </slot>
      </div>
    </template>
    <swiper :options="swiperOption" :key="`${swiperKey}`" ref="swiperRef">
      <swiper-slide v-for="(item, index) in data" :key="`${name}_${index}`">
        <slot :item="item" :index="index" />
      </swiper-slide>
      <template v-if="showPagination">
        <div class="swiper-pagination" slot="pagination" :class="`${name}-pagination`"></div>
      </template>
    </swiper>
    <template v-if="showArrow">
      <div class="swiper-arrow next" :class="`${name}-next`" slot="button-next">
        <slot name="arrowRight">
          <img src="@/assets/images/svg/arrow-right.svg" alt="">
        </slot>
      </div>
    </template>
  </div>
</template>
<script>
import { reactive, toRefs, computed, ref, watch, nextTick } from "vue";
import { uniqueId } from "lodash";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default: () => { },
    },
    showPagination: {
      type: Boolean,
      default: false,
    },
    showArrow: {
      type: Boolean,
      default: false,
    },
    fit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      isOverflowContainer: false,
    });
    const swiperRef = ref(null);

    const swiperOption = computed(() => ({
      slidesPerView: "auto",
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      navigation: {
        prevEl: `.${props.name}-prev`,
        nextEl: `.${props.name}-next`,
      },
      pagination: {
        el: `.${props.name}-pagination`,
        clickable: true,
      },
      ...props.options,
    }));

    const slideIsOverflow = (data) => {
      if (!data?.length) {
        return false;
      }
      nextTick(() => {
        const $swiper = swiperRef.value?.$el;
        const $slides = $swiper?.querySelectorAll(".swiper-slide");
        const gap = (props.options?.spaceBetween ?? 0) * (data.length - 1);
        const slidesWidth = Array.from($slides || []).reduce((prev, curr) => (prev += curr.offsetWidth), 0) + gap;
        state.isOverflowContainer = slidesWidth > $swiper?.offsetWidth;
      });
    };

    watch(() => props.data, slideIsOverflow, { immediate: true });

    return {
      ...toRefs(state),
      swiperOption,
      swiperKey: uniqueId("swiper"),
      swiperRef,
    };
  },
};
</script>

<style lang="scss">
.common-swiper {
  width: 100%;
  @include flex-center;

  &.isOverflowContainer .swiper-arrow {
    display: flex;
  }

  &.fit .swiper-slide {
    width: fit-content;
  }

  .swiper-arrow {
    display: none;
  }

  .swiper-container {
    flex: 1;
    height: 100%;
  }
}
</style>
