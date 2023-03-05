<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar';
import {getHomeMultidata} from "network/home";
// import {Swiper} from "components/common/swiper";
// import {SwiperItem} from "components/common/swiper";
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    // 把请求的数据保存
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-nav {
  /*Home-NavBar的背景颜色*/
  background-color: var(--color-tint);
  color: #fff;
}
</style>
