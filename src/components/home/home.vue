<template>
  <div class="home">
    <!-- 头部标题 -->
    <div class="home-top">
      <header>
        <h1>{{$store.state.headText}}</h1>
      </header>
    </div>
    <!-- 内容-->
    <div class="home-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>      
    </div>
    <div class="home-bottom">
      <!-- m-nav -->
      <m-nav></m-nav>
    </div>
  </div>
</template>
<script>
import MNav from 'components/m-nav/m-nav'
export default {
  components:{
    MNav
  }
}
</script>
<style lang="stylus" scoped>
.home
  height 100%
  overflow hidden
  display block

.home-content
  height calc(100% - 95px)
.home-bottom
  height 50px
  background-color #f8f8f9
  border-top 1px solid #b2b2b2
</style>
