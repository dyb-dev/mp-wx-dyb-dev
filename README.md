# mp-wx-dyb-dev

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89)

## 项目简介

`mp-wx-dyb-dev` 是一个用于个人微信小程序功能测试的项目，基于 [uniapp-mp-wx-template](https://github.com/dyb-dev/uniapp-mp-wx-template) 实现。

## 安装与使用

推荐使用 `pnpm` 作为包管理器。以下为 `pnpm` 安装依赖及启动的示例。

### 环境要求

-   Node.js 版本 >= 18.0.0
-   `pnpm` 版本 >= 8.15.5

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

### 构建产物

```bash
pnpm build
```

## 项目脚本

-   **prepare**: 启动 `husky` 配置。
-   **dev**: 启动微信小程序开发服务器。
-   **build**: 运行类型检查并构建项目。
-   **build-only**: 仅构建项目。
-   **ts-check**: 使用 `vue-tsc` 执行类型检查。

## 许可证

本项目基于 `MIT 许可证` 开源。
