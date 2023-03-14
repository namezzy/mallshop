<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav">
      <div slot="center">蘑菇街</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"/>
      <!--点击切换goods-->
      <!--<goods-list :goods="goods[currentType].list"/>-->
      <goods-list :goods="showGoods"/>
    </scroll>
    <ul>
      <li>商品列表1</li>
      <li>商品列表2</li>
      <li>商品列表3</li>
      <li>商品列表4</li>
      <li>商品列表5</li>
      <li>商品列表6</li>
      <li>商品列表7</li>
      <li>商品列表8</li>
      <li>商品列表9</li>
      <li>商品列表10</li>
      <li>商品列表11</li>
      <li>商品列表12</li>
      <li>商品列表13</li>
      <li>商品列表14</li>
      <li>商品列表15</li>
      <li>商品列表16</li>
      <li>商品列表17</li>
      <li>商品列表18</li>
      <li>商品列表19</li>
      <li>商品列表20</li>
      <li>商品列表21</li>
      <li>商品列表22</li>
      <li>商品列表23</li>
      <li>商品列表24</li>
      <li>商品列表25</li>
      <li>商品列表26</li>
      <li>商品列表27</li>
      <li>商品列表28</li>
      <li>商品列表29</li>
      <li>商品列表30</li>
      <li>商品列表31</li>
      <li>商品列表32</li>
      <li>商品列表33</li>
      <li>商品列表34</li>
      <li>商品列表35</li>
      <li>商品列表36</li>
      <li>商品列表37</li>
      <li>商品列表38</li>
      <li>商品列表39</li>
      <li>商品列表40</li>
      <li>商品列表41</li>
      <li>商品列表42</li>
      <li>商品列表43</li>
      <li>商品列表44</li>
      <li>商品列表45</li>
      <li>商品列表46</li>
      <li>商品列表47</li>
      <li>商品列表48</li>
      <li>商品列表49</li>
      <li>商品列表50</li>
      <li>商品列表51</li>
      <li>商品列表52</li>
      <li>商品列表53</li>
      <li>商品列表54</li>
      <li>商品列表55</li>
      <li>商品列表56</li>
      <li>商品列表57</li>
      <li>商品列表58</li>
      <li>商品列表59</li>
      <li>商品列表60</li>
      <li>商品列表61</li>
      <li>商品列表62</li>
      <li>商品列表63</li>
      <li>商品列表64</li>
      <li>商品列表65</li>
      <li>商品列表66</li>
      <li>商品列表67</li>
      <li>商品列表68</li>
      <li>商品列表69</li>
      <li>商品列表70</li>
      <li>商品列表71</li>
      <li>商品列表72</li>
      <li>商品列表73</li>
      <li>商品列表74</li>
      <li>商品列表75</li>
      <li>商品列表76</li>
      <li>商品列表77</li>
      <li>商品列表78</li>
      <li>商品列表79</li>
      <li>商品列表80</li>
      <li>商品列表81</li>
      <li>商品列表82</li>
      <li>商品列表83</li>
      <li>商品列表84</li>
      <li>商品列表85</li>
      <li>商品列表86</li>
      <li>商品列表87</li>
      <li>商品列表88</li>
      <li>商品列表89</li>
      <li>商品列表90</li>
      <li>商品列表91</li>
      <li>商品列表92</li>
      <li>商品列表93</li>
      <li>商品列表94</li>
      <li>商品列表95</li>
      <li>商品列表96</li>
      <li>商品列表97</li>
      <li>商品列表98</li>
      <li>商品列表99</li>
      <li>商品列表100</li>
      <li>商品列表101</li>
      <li>商品列表102</li>
      <li>商品列表103</li>
      <li>商品列表104</li>
      <li>商品列表105</li>
      <li>商品列表106</li>
      <li>商品列表107</li>
      <li>商品列表108</li>
      <li>商品列表109</li>
      <li>商品列表110</li>
      <li>商品列表111</li>
      <li>商品列表112</li>
      <li>商品列表113</li>
      <li>商品列表114</li>
      <li>商品列表115</li>
      <li>商品列表116</li>
      <li>商品列表117</li>
      <li>商品列表118</li>
      <li>商品列表119</li>
      <li>商品列表120</li>
      <li>商品列表121</li>
      <li>商品列表122</li>
      <li>商品列表123</li>
      <li>商品列表124</li>
      <li>商品列表125</li>
      <li>商品列表126</li>
      <li>商品列表127</li>
      <li>商品列表128</li>
      <li>商品列表129</li>
      <li>商品列表130</li>
      <li>商品列表131</li>
      <li>商品列表132</li>
      <li>商品列表133</li>
      <li>商品列表134</li>
      <li>商品列表135</li>
      <li>商品列表136</li>
      <li>商品列表137</li>
      <li>商品列表138</li>
      <li>商品列表139</li>
      <li>商品列表140</li>
      <li>商品列表141</li>
      <li>商品列表142</li>
      <li>商品列表143</li>
      <li>商品列表144</li>
      <li>商品列表145</li>
      <li>商品列表146</li>
      <li>商品列表147</li>
      <li>商品列表148</li>
      <li>商品列表149</li>
      <li>商品列表150</li>
      <li>商品列表151</li>
      <li>商品列表152</li>
      <li>商品列表153</li>
      <li>商品列表154</li>
      <li>商品列表155</li>
      <li>商品列表156</li>
      <li>商品列表157</li>
      <li>商品列表158</li>
      <li>商品列表159</li>
      <li>商品列表160</li>
      <li>商品列表161</li>
      <li>商品列表162</li>
      <li>商品列表163</li>
    </ul>
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
    Scroll
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
      currentType: 'pop'
    }
  },
  created() {
    // 1. 请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
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
  padding-top: 44px;
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

.content {
  height: 300px;
  overflow: hidden;

}
</style>
