<template>
  <div class="m-nav">
    <ul>
      <template v-for="(item,index) in list">
        <router-link :key="index" :to="item.url" tag="li">
          <span class="fa img" :class="item.icon"></span>
          <span class="txt">{{item.name}}</span>
        </router-link>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          name:"体温监测",
          url:"/home/temp",
          icon:"fa-thermometer-half"
        },
        {
          name:"输液报警",
          url:"/home/alarm",
           icon:"fa-exclamation-circle"
        },
        {
          name:"输液监测",
          url:"/home/trans",
           icon:"fa-hospital-o"
        }
      ]
    }
  },
}
</script>
<style lang="stylus" scoped>
.m-nav>ul
  display flex
  height 49px
.m-nav>ul>li
  flex 1
  display flex
  flex-direction column
  justify-content space-around
  align-items center
  height 100%
  .img
    font-size 18px
    color #7a7e83
  .txt
    font-size 14px
    color #939393
    letter-spacing 2px
  &.router-link-exact-active
    .img,.txt
      color #2782d7
</style>
