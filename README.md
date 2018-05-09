# webapp

> 'just a simple webapp '
## 基本页面样式搭建
> 真机测试  打包运行
### 1.体温监测页面搭建
1. 列表页面
2. 列表详情页面 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 细节完善
  1. 添加token
  2. 页面刷新的时候分页没有改变 当前页面刷新 和 只有第一页刷新 两种
  3. 修改设备位置的时候可以为空
  4. 优化登录失败的时候提醒登录超时
  修改login.js 的promose
## 测试
// "port": "http://192.168.0.200:8888/webservice/"
// "port": "http://192.168.0.100/mcim-webservice"

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
