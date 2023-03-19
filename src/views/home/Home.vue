<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="contentScroll"
            :pull-up-load="true">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"/>
      <!--点击切换goods-->
      <!--<goods-list :goods="goods[currentType].list"/>-->
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>


import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from 'components/common/navbar/NavBar';
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";


import {getHomeMultidata, getHomeGoods} from "network/home";


// import {Swiper} from "components/common/swiper";
// import {SwiperItem} from "components/common/swiper";
// import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  data() {
    // 把请求的数据保存
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    // 3. 监听item中图片加载完成

    this.$bus.$on('itemImageLoad', ()=>{
      //console.log(this.$bus);
      this.$refs.scroll.refresh();
    })

  },
  methods: {

    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },

    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0, 0,500);
      this.$refs.scroll.scrollTo(0, 0);

    },
    contentScroll(position) {
      // position.y < 1000
      this.isShowBackTop = -(position.y) > 1000
    },
    // loadMore() {
    //   this.getHomeGoods(this.currentType)
    // },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })

    },

    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1



      })
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
}

.home-nav {
  /*Home-NavBar的背景颜色*/
  background-color: var(--color-tint);
  color: #fff;


  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

/*实现吸顶的效果*/
.tab-control {
  position: sticky;
  top: 45px;
  z-index: 9;

}


/*.content {*/
/*  overflow: hidden;*/

/*  position: absolute;*/
/*  top: 44px;*/
/*  bottom: 49px;*/
/*  left: 0;*/
/*  right: 0;*/

/*}*/

.content {
  height: calc(100% - 49px);
  overflow: hidden;
  margin-top: 44px;

}


/*不设置的话 tab-control不会显示*/
.wrapper {
  height: 100%;
}
</style>
