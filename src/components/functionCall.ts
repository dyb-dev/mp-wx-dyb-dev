/*
 * @Author: dyb-dev
 * @Date: 2024-10-29 23:54:36
 * @LastEditors: dyb-dev
 * @LastEditTime: 2024-10-30 20:56:41
 * @FilePath: /mp-wx-dyb-dev/src/components/functionCall.ts
 * @Description: 组件函数式调用相关工具函数
 */

import { provide, ref } from "vue"

import type { Ref } from "vue"

/**
 * 默认选项接口
 */
interface IDefaultOptions {
    /** 是否显示 */
    show: boolean
    /** 组件唯一标识key */
    customKey: string
    /** 卸载组件回调 */
    unmount: (...args: any[]) => void
}

/**
 * 用于过滤掉默认选项的类型工具
 *
 * @template Target - 目标类型
 */
type TFilteredDefaultOptions<Target> = Omit<Target, TKeys<IDefaultOptions>>

/**
 * 提供组件选项
 *
 * @author dyb-dev
 * @date 29/10/2024/  21:55:37
 * @param {Key} customKey - 组件唯一标识key
 * @returns {*}  {Ref<Options>} - 组件选项
 */
const providerComponentOptions = <Key extends string = string, Options extends Record<string, any> = Record<string, any>>(
    customKey: Key
): Ref<Options> => {

    const _options = ref({}) as Ref<Options>

    provide(customKey, _options as any)

    return _options

}

export type { IDefaultOptions, TFilteredDefaultOptions }

export { providerComponentOptions }
