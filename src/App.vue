<template>
  <div class="wrap">
    <main>
      <router-view></router-view>
    </main>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "@/components/FooterGuide/FooterGuide";
export default {
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './common/stylus/mixins.styl';

.wrap
  position relative
  width 100%
  height 100%
  main 
    width 100%
  

</style>

