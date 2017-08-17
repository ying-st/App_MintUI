<template>  
  <div class="index">
  <!-- 头部   -->
        <mt-header fixed title="fixed top">  
          <router-link to="./location" slot="left">  
            <mt-button>
            	{{place}}
            	<img src="../assets/down_slide.png" width="20"> 
            </mt-button> 
          </router-link>  
          <!-- <mt-button icon="more" @click=""></mt-button> -->
          <i class="fa fa-plus-circle fa-2x" slot="right" aria-hidden="true"></i>  
        </mt-header>  
        <mt-search v-model="value" placeholder="输入商品名、地名或菜品"></mt-search>

  <!-- 头部轮播    -->
      <div class="swipe">
        <mt-swipe :auto="0">
          <mt-swipe-item>
          <!-- element的Layout 布局 -->
            <el-row :gutter="1">
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon1.png"><div>美食</div>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon2.png"><div>电影/演出</div>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon3.png"><div>酒店</div>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon4.png"><div>休闲娱乐</div>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon5.png"><div>外卖</div>
              </div></el-col>
            </el-row>

            <el-row :gutter="1">
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon1.png"><div>美食</div></div>
              </el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon2.png"><div>电影/演出</div>
              </div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon3.png"><div>酒店</div>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon4.png"><div>休闲娱乐</div>
              </div></el-col>
              <el-col :span="5"><div class="grid-content bg-purple">
                <img slot="icon" src="../assets/icon5.png"><div>外卖</div>
              </div></el-col>
            </el-row>
          </mt-swipe-item>
          <mt-swipe-item>
              <el-row :gutter="1">
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon1.png"><div>美食</div></div>
                </el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon2.png"><div>电影/演出</div>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon3.png"><div>酒店</div>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon4.png"><div>休闲娱乐</div>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon5.png"><div>外卖</div>
                </div></el-col>
              </el-row>

<!--               <el-row :gutter="1">
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon1.png"><div>美食</div></div>
                </el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon2.png"><div>电影/演出</div>
                </div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon3.png"><div>酒店</div>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon4.png"><div>休闲娱乐</div>
                </div></el-col>
                <el-col :span="5"><div class="grid-content bg-purple">
                  <img slot="icon" src="../assets/icon5.png"><div>外卖</div>
                </div></el-col>
              </el-row> -->
          </mt-swipe-item>
        </mt-swipe>
      </div>

  <!-- 头部图案 -->
      <div class="top_banner">
        <img slot="icon" src="../assets/top-banner.png">
      </div>

  <!-- 外卖招牌菜 -->
      <div class="m_content">
        <el-row :gutter="3">
          <el-col :span="12"><div class="grid-content bg-purple">
            <div class="title">外卖招牌菜</div>
            <div>大家都爱吃</div>
            <img src="../assets/content1.png">
          </div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple">
            <div class="title">颜值即正义</div>
            <div>刷脸赢手机</div>
            <img src="../assets/content2.png">
          </div></el-col>
        </el-row>
      </div>

  <!-- 底部导航  -->
        <mt-tabbar v-model="selected">
          <mt-tab-item id="tab1">
            <i slot="icon" class="fa fa-envira" aria-hidden="true"></i>
            首页
          </mt-tab-item>
          <mt-tab-item id="tab2">
            <i slot="icon" class="fa fa-diamond" aria-hidden="true"></i>
            品质优惠
          </mt-tab-item>
          <mt-tab-item id="tab3">
            <i slot="icon" class="fa fa-history" aria-hidden="true"></i>
            发现
          </mt-tab-item>
          <mt-tab-item id="tab4">
            <i slot="icon" class="fa fa-user-circle-o" aria-hidden="true"></i>
            我的
          </mt-tab-item>
        </mt-tabbar>



  </div>  
</template>  
  
<script>  
export default {  
  // name: 'app',  
  data () {  
    return {  
        place:"广州",
        value:"",
        selected:""
    }  
  },  
  mounted:function(){  
      
  },  
  methods: {  
    // handleClose: function(){  
    //     console.log("返回")  
    // },  
    // more: function(){  
    //     console.log("更多")  
    // }  
  }  
}  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*固定头部*/
.index .mint-header{
	height: 50px;
	background-color: #f63;
}

.index .mint-header .mint-button label{
	position: relative;
}

.index .mint-header .mint-button img{
	position: relative;
  top: 5px;
}

/*搜索框*/
.index .mint-search{
  height: 50px;
}

.index .mint-search .mint-searchbar{
  background-color:none;
  padding: 0 !important;
  width: 66% !important;
  margin: 0 auto;
}

.index .mint-searchbar{
  left: 12px;
  top: 7px;
  /*背景设为不显示*/
  background-color:transparent !important;
}

.index .mint-searchbar-inner{
  border-radius: 30px;
} 

.index .mint-searchbar-inner .mintui-search{
  font-size: 18px;
  color: #f63;
  margin-right: 6px;
}

/*隐藏取消按钮*/
.index .mint-searchbar-cancel{
  display: none;
}


/*头部轮播*/
.index .swipe{
  background-color: white;
}

.index .swipe .mint-swipe{
  height: 200px;
}

.index .mint-swipe-indicator.is-active {
  background-color: #f63;
  opacity: 1;
}

/*element的Layout 布局*/
.index .swipe .bg-purple {
  /*background: #d3dce6;*/
}
.index .swipe .grid-content {
  min-height: 74px;
  padding: 13px 0 0;
  font-size: 13px;
}

.index .swipe .grid-content img{
  width: 44px;
  height: 44px;
  margin-bottom: 3px;
}

/*头部图片*/
.index .top_banner{
  background-color: white;
}

.index .top_banner img{
  width: 100%;
  border-radius: 50px;
}

/*外卖招牌菜*/
.index .m_content {
  margin-top: 10px;
  text-align: left;
}

.index .m_content .bg-purple{
  background: white;
  padding-left: 15px;
  font-size: 12px;
  color: #999;
  position: relative;
}

.index .m_content .grid-content {
  min-height: 75px;
  /*padding: 13px 0 0;*/
}

.index .m_content .bg-purple .title{
  font-size: 16px;
  padding-top: 15px;
  color: #3da8db;
}

.index .m_content .bg-purple img{
    height: 53px;
    position: absolute;
    top: 12px;
    right: 5px;
}


/*底部导航*/
.index .mint-tabbar > .mint-tab-item.is-selected{
  color: #f63;
  background-color:transparent;
}
</style>
