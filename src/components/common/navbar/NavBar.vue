<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  /*上下居中*/
  line-height: 44px;
  /*height: 40px;*/
  /*文字居中对齐*/
  text-align: center;
  /*设置NavBar的边界线*/
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);


}

.left, .right {
  width: 60px;
}

.center {
  flex: 1;

}
</style>
