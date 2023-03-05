<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--<img src="../../assets/img/tabbar/home.svg" alt="">-->
    <!--<div>首页</div>-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!--<slot :class="{active: isActive}" name="item-text"></slot>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }

  },
  data() {
    return {
      // isActive: true

    }
  },
  computed: {
    isActive() {
      // home  -> Item1(/home) = true
      // home  -> Item1(/category) = false
      // home  -> Item1(/cart) = true
      // home  -> Item1(/profile) = true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      return this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>


.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  /*去除图片和文字的间隙*/
  vertical-align: middle;
  /*增加文字和图片的像素*/
  margin-bottom: 2px;
}

.active {
  color: red;
}

</style>
