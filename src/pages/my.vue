<!--
 * @Author: dyb-dev
 * @Date: 2024-09-19 10:39:24
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-11-30 14:27:06
 * @FilePath: /mp-wx-dyb-dev/src/pages/my.vue
 * @Description: 我的页面
 */
-->

<script setup lang="ts">
import { onShareAppMessage } from "@dcloudio/uni-app"
import { setClipboardData } from "@uni-helper/uni-promises"
import { ref } from "vue"

import { useShare } from "@/hooks"

import type { ImageInterface } from "nutui-uniapp/components/imagepreview/types.js"

// LIFECYCLE: 分享钩子
onShareAppMessage(() => useShare())

/** STATIC: 头像图片路径ß */
const avatarImgPath = "/static/image/dyb-dev.jpg"

/** STATIC: 社交列表 */
const socialList = [
    {
        iconPath: "/static/image/my/social/csdn.png",
        link: "https://blog.csdn.net/m0_58830399"
    },
    {
        iconPath: "/static/image/my/social/juejin.svg",
        link: "https://juejin.cn/user/2458973846648856"
    }
]

/** STATIC: 技术列表 */
const technicalList = [
    {
        iconPath: "/static/image/my/technical/html5.svg"
    },
    {
        iconPath: "/static/image/my/technical/css3.svg"
    },
    {
        iconPath: "/static/image/my/technical/js.svg"
    },
    {
        iconPath: "/static/image/my/technical/ts.svg"
    },
    {
        iconPath: "/static/image/my/technical/vue.svg"
    },
    {
        iconPath: "/static/image/my/technical/uniapp.svg"
    },
    {
        iconPath: "/static/image/my/technical/mp-wx.svg"
    },
    {
        iconPath: "/static/image/my/technical/vitepress.svg"
    },
    {
        iconPath: "/static/image/my/technical/pixijs.svg"
    },
    {
        iconPath: "/static/image/my/technical/nodejs.svg"
    },
    {
        iconPath: "/static/image/my/technical/pnpm.svg"
    },
    {
        iconPath: "/static/image/my/technical/esbuild.svg"
    },
    {
        iconPath: "/static/image/my/technical/rollup.svg"
    },
    {
        iconPath: "/static/image/my/technical/vite.svg"
    },
    {
        iconPath: "/static/image/my/technical/postcss.svg"
    },
    {
        iconPath: "/static/image/my/technical/less.svg"
    },
    {
        iconPath: "/static/image/my/technical/sass.svg"
    },
    {
        iconPath: "/static/image/my/technical/eslint.svg"
    },
    {
        iconPath: "/static/image/my/technical/prettier.svg"
    },
    {
        iconPath: "/static/image/my/technical/stylelint.svg"
    },
    {
        iconPath: "/static/image/my/technical/markdownlint.svg"
    },
    {
        iconPath: "/static/image/my/technical/vscode.svg"
    },
    {
        iconPath: "/static/image/my/technical/iconfont.svg"
    },
    {
        iconPath: "/static/image/my/technical/git.svg"
    },
    {
        iconPath: "/static/image/my/technical/gitlab.svg"
    },
    {
        iconPath: "/static/image/my/technical/github.svg"
    }
]

/** STATIC: 运动列表 */
const sportsList = [
    {
        name: "跑步",
        imgPath: "/static/image/my/sports/4.jpg"
    },
    {
        name: "篮球",
        imgPath: "/static/image/my/sports/1.jpg"
    },
    {
        name: "羽毛球",
        imgPath: "/static/image/my/sports/2.jpg"
    },
    {
        name: "足球",
        imgPath: "/static/image/my/sports/5.jpg"
    },
    {
        name: "乒乓球",
        imgPath: "/static/image/my/sports/3.jpg"
    }
]

/** STATIC: 音乐列表 */
const musicList = [
    {
        name: "See You Again (feat. Charlie Puth)",
        singer: "Wiz Khalifa / Charlie Puth",
        imgPath: "/static/image/my/music/1.jpg"
    },
    {
        name: "Star Unkind",
        singer: "2Someone",
        imgPath: "/static/image/my/music/2.jpg"
    },
    {
        name: "My Heart Will Go On",
        singer: "满舒克 / MuSik I / 廖伟珊",
        imgPath: "/static/image/my/music/3.jpg"
    },
    {
        name: "Go Again (feat. ELYSA)",
        singer: "King CAAN / ELYSA",
        imgPath: "/static/image/my/music/4.jpg"
    },
    {
        name: "Hall of Fame",
        singer: "The Script / will.i.am",
        imgPath: "/static/image/my/music/5.jpg"
    }
]

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

// EVENT: 导航到web页面
const navigateToWebPage = (link: string) => {

    setClipboardData({
        data: link
    })

}
</script>

<template>
    <Layout :nav-bar-props="{ bottomBorder: true }">
        <view class="my">
            <view class="my__card">
                <nut-avatar size="large">
                    <image :src="avatarImgPath" mode="aspectFit" @click="onClickPreviewImage(avatarImgPath)" />
                </nut-avatar>

                <view class="my__card__info">
                    <view class="my__card__info__name">
                        dyb-dev
                        <nut-animate type="twinkle" :loop="true">
                            <nut-icon name="people" custom-color="#29d446" />
                        </nut-animate>
                    </view>

                    <view class="my__card__info__desc">祝您天天开心，事事顺心，愿所有的美好都围绕着您！</view>
                </view>

                <view class="my__card__button" @click="navigateToWebPage('https://github.com/dyb-dev')">
                    <nut-icon name="github" custom-color="#333" />
                    主页
                    <nut-icon name="rect-right" custom-color="#333" />
                </view>
            </view>

            <TitleBar class="my__title-bar" desc="社交" />

            <view class="my__social">
                <view
                    class="my__social__item"
                    v-for="(item, index) in socialList"
                    :key="index"
                    @click="navigateToWebPage(item.link)"
                >
                    <image class="my__social__item__img" :src="item.iconPath" mode="widthFix" />

                    <nut-icon name="rect-right" custom-color="#333" />
                </view>
            </view>

            <TitleBar class="my__title-bar" desc="技术" />

            <view class="my__technical">
                <image
                    v-for="(item, index) in technicalList"
                    :key="index"
                    class="my__technical__img"
                    :src="item.iconPath"
                    mode="heightFix"
                    @click="onClickPreviewImage(item.iconPath)"
                />
            </view>

            <TitleBar class="my__title-bar" desc="运动" />

            <view class="my__sports">
                <view class="my__sports__item" v-for="(item, index) in sportsList" :key="index">
                    <image
                        class="my__sports__item__img"
                        :src="item.imgPath"
                        mode="aspectFit"
                        @click="onClickPreviewImage(item.imgPath)"
                    />

                    <view class="my__sports__item__name">{{ item.name }}</view>
                </view>
            </view>

            <TitleBar class="my__title-bar" desc="音乐" />

            <view class="my__music" v-for="(item, index) in musicList" :key="index">
                <image class="my__music__img" :src="item.imgPath" mode="aspectFit" @click="onClickPreviewImage(item.imgPath)" />

                <view class="my__music__info">
                    <view class="my__music__info__top">
                        <view class="my__music__info__top__name">{{ item.name }}</view>
                        <view class="my__music__info__top__singer">{{ item.singer }}</view>
                    </view>

                    <view class="my__music__info__bottom">
                        <view class="my__music__info__bottom__bar" v-for="barItem in 60" :key="barItem" />
                    </view>
                </view>
            </view>
        </view>

        <template #extra-content>
            <nut-image-preview
                :show="showPreview"
                :images="imgData"
                :show-index="false"
                :scale="true"
                @close="showPreview = false"
            />
        </template>
    </Layout>
</template>

<style lang="scss" scoped>
.my {
    position: relative;
    display: flow-root;
    box-sizing: border-box;
    padding: 30rpx;

    &__card {
        position: relative;
        display: flex;
        gap: 0 30rpx;
        align-items: center;
        width: 100%;
        margin: 0 auto 40rpx;

        &__info {
            width: 370rpx;

            &__name {
                display: flex;
                gap: 0 4rpx;
                align-items: center;
                color: $uni-text-color;
                font-weight: 500;
                font-size: 38rpx;
            }

            &__desc {
                margin-top: 10rpx;
                color: $uni-text-color-grey;
                font-size: 23rpx;
            }
        }

        &__button {
            position: absolute;
            top: 50%;
            right: 0;
            display: flex;
            align-items: center;
            color: $uni-text-color;
            font-size: 28rpx;
            transform: translateY(-50%);
        }
    }

    &__title-bar {
        margin: 0 auto 25rpx;
    }

    &__social {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 40rpx;

        &__item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 35%;

            &__img {
                flex-shrink: 0;
                width: 150rpx;
            }
        }
    }

    &__technical {
        display: flex;
        flex-wrap: wrap;
        gap: 15rpx 10rpx;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 40rpx;

        &__img {
            height: 40rpx;
            box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.3);
        }
    }

    &__sports {
        display: flex;
        gap: 0 30rpx;
        width: 100%;
        margin-bottom: 40rpx;

        @include open-scroll-mixin("x");
        @include hide-scroll-bar-mixin;

        &__item {
            display: flex;
            flex-direction: column;
            gap: 15rpx 0;
            align-items: center;

            &__img {
                width: 150rpx;
                height: 150rpx;
                border-radius: 50%;
                box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.3);
            }

            &__name {
                width: fit-content;
                color: $uni-text-color;
                font-size: 28rpx;
            }
        }
    }

    &__music {
        display: flex;
        gap: 0 30rpx;
        width: 100%;
        margin-bottom: 40rpx;

        &__img {
            flex-shrink: 0;
            width: 150rpx;
            height: 150rpx;
            border-radius: 8rpx;
            box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.3);
        }

        &__info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;

            &__top {
                display: flex;
                flex-direction: column;
                gap: 0 10rpx;

                &__name {
                    color: $uni-text-color;
                    font-weight: bold;
                    font-size: 28rpx;
                }

                &__singer {
                    color: $uni-text-color-grey;
                    font-size: 23rpx;
                }
            }

            &__bottom {
                display: flex;
                gap: 0 2rpx;
                align-items: flex-end;
                width: 100%;

                &__bar {
                    flex: 1;
                    height: 6rpx;
                    background: #29d446;
                    animation: sound 0ms -800ms linear infinite alternate;

                    @for $i from 1 through 60 {
                        &:nth-child(#{$i}) {
                            animation-duration: #{random(500) + 800}ms;
                        }
                    }

                    @keyframes sound {
                        0% {
                            height: 6rpx;
                            opacity: 0.35;
                        }
                        100% {
                            height: 30rpx;
                            opacity: 0.95;
                        }
                    }
                }
            }
        }
    }
}
</style>
