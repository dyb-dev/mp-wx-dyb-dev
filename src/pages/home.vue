<!--
 * @Author: dyb-dev
 * @Date: 2024-09-19 10:38:39
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-12-07 20:29:21
 * @FilePath: /mp-wx-dyb-dev/src/pages/home.vue
 * @Description: 首页
-->

<script setup lang="ts">
import { onShareAppMessage } from "@dcloudio/uni-app"
import { useToast } from "nutui-uniapp/composables"
import { ref } from "vue"

import { useShare, type IPaginationFetchDataFnParam, type TPaginationDataItem, type TPaginationFetchDataFnReturn } from "@/hooks"

import type { ImageInterface } from "nutui-uniapp/components/imagepreview/types.js"

// LIFECYCLE: 分享钩子
onShareAppMessage(() => useShare())

/** STATIC: 卡片列表 */
const carkList = [
    {
        id: 1,
        name: "漩涡鸣人",
        desc: "成为火影没有捷径！"
    },
    {
        id: 2,
        name: "漩涡鸣人",
        desc: "命运，并不是由谁来决定的！"
    },
    {
        id: 3,
        name: "宇智波佐助",
        desc: "放弃就代表了结束。"
    },
    {
        id: 4,
        name: "宇智波佐助",
        desc: "因为有亲情的羁绊，失去了就会痛苦。"
    },
    {
        id: 5,
        name: "宇智波鼬",
        desc: "并不是成为火影的人才会受到大家认可，而是受到大家认可的人才会成为火影，别忘了你的伙伴。"
    },
    {
        id: 6,
        name: "宇智波鼬",
        desc: "不管村子存在着什么样的矛盾和黑暗，我依然是木业忍者村的宇智波鼬。"
    }
]

const toast = useToast()

// EVENT: 点击卡片点赞按钮
const onClickCardLikeButton = () => {

    toast.text("谢谢您的点赞❤️，您今天看上去很棒！", {
        icon: "fabulous"
    })

}

// 图片接口
interface ICommentImage {
    /** 小图URL */
    smallImgUrl: string
    /** 大图URL */
    bigImgUrl: string
    /** 图片URL */
    imgUrl: string
}

// 评论信息接口
interface ICommentInfo {
    /** 用户昵称 */
    nickName: string
    /** 评论内容 */
    content: string
    /** 评分 */
    score: number
    /** 用户头像 */
    avatar: string
    /** 评论时间 */
    time: string
    /** 评论尺寸描述 */
    size: string
    /** 回复数量 */
    replay: number
    /** 点赞数量 */
    like: number
    /** 回复文本 */
    replyText: string
}

// 评论列表项接口
interface ICommentItem {
    /** 评论信息 */
    info: ICommentInfo
    /** 评论图片列表 */
    images: ICommentImage[]
}

// FUN 请求数据函数
const fetchData = async({
    currentPageSize,
    currentPage
}: IPaginationFetchDataFnParam): TPaginationFetchDataFnReturn<TPaginationDataItem> => {

    // 模拟请求
    await delay(500)

    // 随机判断是否加载失败
    if (Math.random() < 0.1) {

        return

    }

    return {
        currentPageData: generateDataList(currentPage, currentPageSize),
        totalSize: total
    }

}

/** STATIC: 数据总量 */
const total = 30

/**
 * FUN: 生成模拟数据列表
 *
 * @param {number} pageNo - 当前的页码
 * @param {number} pageSize - 每页的数据条数
 * @returns {string[]} 生成的模拟数据列表
 */
const generateDataList = (pageNo: number, pageSize: number): ICommentItem[] => {

    const _list: ICommentItem[] = []

    // 计算当前页的起始索引
    const start = (pageNo - 1) * pageSize
    const end = Math.min(start + pageSize, total)

    // 生成数据
    for (let i = start; i < end; i++) {

        const randomIndex = Math.floor(Math.random() * carkList.length) // 随机获取carkList的索引
        const randomScore = Math.floor(Math.random() * 5) + 1 // 随机评分1-5
        const randomReplay = Math.floor(Math.random() * 100) + 1 // 随机回复数1-100
        const randomLike = Math.floor(Math.random() * 100) + 1 // 随机点赞数1-100
        const randomDay = Math.floor(Math.random() * 30) + 1 // 随机生成日期（1-30）

        _list.push({
            info: {
                nickName: carkList[randomIndex].name,
                content: carkList[randomIndex].desc,
                score: randomScore,
                avatar: `/static/image/home/card/${randomIndex + 1}.jpg`,
                time: `2024-10-${randomDay}`, // 保持固定的年份和月份
                size: "只要有树叶飞舞的地方就会有火在燃烧，那火光会照耀着村子，然后新的树叶会再次发芽.",
                replay: randomReplay,
                like: randomLike,
                replyText: "祝您天天开心，事事顺心，愿所有的美好都围绕着您！"
            },
            images: [
                {
                    smallImgUrl: "",
                    bigImgUrl: "",
                    imgUrl: `/static/image/home/card/${randomIndex + 1}.jpg`
                },
                {
                    smallImgUrl: "",
                    bigImgUrl: "",
                    imgUrl: `/static/image/home/card/${randomIndex + 1}.jpg`
                },
                {
                    smallImgUrl: "",
                    bigImgUrl: "",
                    imgUrl: `/static/image/home/card/${randomIndex + 1}.jpg`
                },
                {
                    smallImgUrl: "",
                    bigImgUrl: "",
                    imgUrl: `/static/image/home/card/${randomIndex + 1}.jpg`
                },
                {
                    smallImgUrl: "",
                    bigImgUrl: "",
                    imgUrl: `/static/image/home/card/${randomIndex + 1}.jpg`
                }
            ]
        })

    }

    return _list

}

/**
 * FUN: 延时指定的毫秒数
 *
 * @param {number} ms - 延迟的时间（毫秒）
 * @returns {Promise<void>} 返回一个 Promise，当延迟时间结束时 `resolve`
 */
const delay = (ms: number): Promise<void> => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve()

        }, ms)

    })

}

/** REF: 是否显示图片预览 */
const showPreview = ref(false)

/** REF: 图片数据 */
const imgData = ref<ImageInterface[]>([])

// EVENT: 点击预览图片
const onClickPreviewImage = (imgPath: string) => {

    imgData.value[0] = {
        src: imgPath
    }
    showPreview.value = true

}
</script>

<template>
    <Layout :nav-bar-props="{ bottomBorder: true }">
        <List class="home" :fetch-data-fn="fetchData">
            <template #top>
                <nut-noticebar
                    class="home__noticebar"
                    text="尊敬的朋友，感谢您光临我的个人小程序，祝您体验愉快！"
                    :scrollable="true"
                    :background="`rgba(41, 212, 70, 0.8)`"
                    :custom-color="`#FFFFFF`"
                >
                    <template #leftIcon>
                        <nut-animate type="twinkle" :loop="true"><nut-icon name="star" /> </nut-animate>
                    </template>
                </nut-noticebar>

                <nut-swiper
                    class="home__swiper"
                    :init-page="0"
                    :pagination-visible="true"
                    pagination-color="#29d446"
                    pagination-unselected-color="#808080"
                    auto-play="2000"
                >
                    <nut-swiper-item v-for="(item, index) in 5" :key="item">
                        <image
                            class="home__swiper__img"
                            :src="`/static/image/home/swiper/${index + 1}.jpg`"
                            mode="aspectFill"
                            alt=""
                            @click="onClickPreviewImage(`/static/image/home/swiper/${index + 1}.jpg`)"
                        />
                    </nut-swiper-item>
                </nut-swiper>

                <TitleBar class="home__title-bar" desc="卡片" />

                <view class="home__card-box">
                    <view v-for="item in carkList" :key="item.id" class="home__card-box__item">
                        <image
                            class="home__card-box__item__img"
                            :src="`/static/image/home/card/${item.id}.jpg`"
                            mode="aspectFill"
                            @click="onClickPreviewImage(`/static/image/home/card/${item.id}.jpg`)"
                        />
                        <view class="home__card-box__item__name"> {{ item.name }}<nut-tag type="primary">忍者</nut-tag> </view>
                        <view class="home__card-box__item__desc"> {{ item.desc }} </view>

                        <nut-button
                            class="home__card-box__item__button"
                            type="primary"
                            @click="onClickCardLikeButton"
                        >点赞</nut-button>
                    </view>
                </view>

                <TitleBar class="home__title-bar" desc="论坛" />
            </template>

            <template #default="{ list: _list }">
                <nut-comment
                    v-for="(item, index) in _list"
                    :key="index"
                    class="home__comment"
                    ellipsis="6"
                    :images="item.images"
                    :info="item.info"
                    :operation="['replay', 'like']"
                >
                    <template #commentLabels>
                        <nut-animate
                            type="ripple"
                            :loop="true"
                        ><nut-icon name="heart-fill" custom-color="#FF4D4F" size="25rpx" />
                        </nut-animate>
                    </template>

                    <template #commentShopReply>
                        <view class="nut-comment-shop">
                            <text style="display: inline-block">祝福语：</text>{{ item.info.replyText }}
                        </view>
                    </template>
                </nut-comment>
            </template>
        </List>

        <template #extra-content>
            <nut-image-preview
                :show="showPreview"
                :images="imgData"
                :show-index="false"
                :scale="true"
                @close="showPreview = false"
            />

            <nut-toast />
        </template>
    </Layout>
</template>

<style lang="scss" scoped>
.home {
    &__noticebar {
        width: 100%;
    }

    &__swiper {
        width: 100vw;
        height: 400rpx;
        margin-bottom: 40rpx;
        box-shadow: 0 4rpx 6rpx rgba(0, 0, 0, 0.15);

        &__img {
            width: 100%;
            height: 100%;
        }
    }

    &__title-bar {
        width: 680rpx !important;
        margin: 0 auto 25rpx;
    }

    &__card-box {
        display: flex;
        gap: 25rpx;
        align-items: center;
        width: 100%;
        margin-bottom: 40rpx;
        overflow: scroll hidden;

        @include hide-scroll-bar-mixin;

        &__item {
            flex-shrink: 0;
            width: 302rpx;
            height: fit-content;
            overflow: hidden;
            border-radius: 12rpx;

            &:first-child {
                padding-left: 35rpx;
            }

            &:last-child {
                padding-right: 35rpx;
            }

            &__img {
                width: 100%;
                height: 302rpx;
                border-radius: 12rpx;
                box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.3);
            }

            &__name {
                display: flex;
                gap: 0 10rpx;
                align-items: center;
                margin-bottom: 7rpx;
                font-weight: 500;
                font-size: 32rpx;
            }

            &__desc {
                margin-bottom: 30rpx;
                color: $uni-text-color-placeholder;
                font-size: 20rpx;
                @include text-ellipsis-mixin;
            }

            &__button {
                width: 100%;
                height: 70rpx;
                border-radius: 12rpx;
            }
        }
    }

    &__comment {
        width: 680rpx;
        margin: 0 auto 40rpx;
    }
}
</style>
