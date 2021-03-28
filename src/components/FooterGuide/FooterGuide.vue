<template>
  <div class="footer-guide">
    <span class="guide-item" :class="{on: $route.path === '/msite'}" @click="gotoroute('/msite')">
      <span><i class="iconfont icon-shouye"></i></span>
      <span>首页</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/search'}" @click="gotoroute('/search')">
      <span><i class="iconfont icon-search"></i></span>
      <span>搜索</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/order'}" @click="gotoroute('/order')">
      <span><i class="iconfont icon-tuanduicankaoxian-"></i></span>
      <span>订单</span>
    </span>
    <span class="guide-item" :class="{on: $route.path === '/personal'}" @click="gotoroute('/personal')">
      <span><i class="iconfont icon-gerenzhongxin"></i></span>
      <span>个人中心</span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FooterGuide' ,
  methods:{
    
    gotoroute(path){
      // 编程式路由跳转
      this.$router.replace(path)
    }

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

@import "../../common/stylus/mixins.styl";

.footer-guide
  top-border-1px($green)
  position fixed
  bottom 0
  display flex 
  justify-content space-evenly
  align-items center
  width 100%
  height 47px
  .guide-item
    width 25%
    height 47px
    text-align center
    display flex 
    flex-direction column
    justify-content space-evenly
    &.on 
      color $sky 
    span 
      font-size 12px
      i 
        font-size 22px


</style>
