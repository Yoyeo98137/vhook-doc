# 介绍

## 为什么

在笔者日常的 Vue3 项目开发过程中，发现对于请求中的一些状态控制比如 `loading`、`error` 总是比较繁琐，而响应式 API 的出现是完全有能力改善这种情况的。

于是在学习了社区中一些优秀的 Vue3 hooks 库之后，我针对网络请求开发了相关 hook 并落地在自己的项目中。

随着项目周期变长，所需要的业务 hook 越来越多，我开始寻找一些合适的 hook 库。官方的 vueuse 确实提供了一些相当不错的 hook，但由于学习成本以及业务扩展等方面的考虑，我并没有选择 vueuse。

于是在这个过程中，我萌生了开发一个 **Vue3 hooks** 库的想法，当然也理所应当的想到了 React 那边的 ahooks，这就是 vhooks 命名的由来。

> 当然社区现在也已经出现了很多的 “vhooks” 了。

## 声明

本质还是服务于自己的业务场景，在此基础上来提取 hook，同时也抱着一个学习的态度来开发。

## 学习

站在巨人的肩膀上学习

- [VueRequest](https://github.com/AttoJS/vue-request)
- [alibaba/hooks](https://ahooks.js.org/zh-CN/)