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
          <i class="fa fa-plus-circle fa-2x" slot="right" aria-hidden="true"></i>  
        </mt-header>  
        <mt-search v-model="value" placeholder="输入商品名、地名或菜品"></mt-search>

  <!-- 头部轮播    -->
      <div class="swipe">
        <mt-swipe :auto="0">
          <mt-swipe-item>
          <!-- element的Layout 布局 -->
<!--             <el-row :gutter="1">
              <el-col :span="5" v-for="item in itemlist"><div class="grid-content bg-purple">
                <img slot="icon" :src="require(`../assets/${item.icon}`)"><div>{{item.name}}</div>
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
            </el-row> -->
            <ul>
              <li  v-for="item in itemlist">
                <img slot="icon" :src="item.icon"><div>{{item.name}}</div>
              </li>
            </ul>
          </mt-swipe-item>
          <mt-swipe-item>
            <ul>
              <li  v-for="item in itemlist">
                <img slot="icon" :src="item.icon"><div>{{item.name}}</div>
              </li>
            </ul>
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

  <!-- 猜你喜欢，图片懒加载 -->
      <div class="like">
        <div class="like_title">猜你喜欢</div>
        <ul>
          <li></li>
        </ul>
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
  data () {  
    return {  
        place:"广州",
        value:"",
        selected:"",

        itemlist:[{
          icon:"",
          name:""
        }]
    }  
  },  
  mounted:function(){  
      var vm = this;

      //获取json数据
      vm.getData();
  },  
  methods: {  
    //获取数据
    getData(){
      this.$http.get('../../static/dataJson/itemlist.json').then(function(response){ 
        this.itemlist = response.data.itemData;
      },function(response){
        alert('请求失败了')
      })
    },
  }  
}  
</script>

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
/*.index .swipe .grid-content {
  min-height: 74px;
  padding: 13px 0 0;
  font-size: 13px;
}

.index .swipe .grid-content img{
  width: 44px;
  height: 44px;
  margin-bottom: 3px;
}*/

.index .swipe ul{
  margin: 0;
  min-height: 74px;
  padding: 13px 0 0;
  font-size: 13px;
}

.index .swipe ul li{
  width: 20%;
  height: 100%;
  margin: 0;
  float: left;
  padding-bottom: 15px;
}

.index .swipe ul li img{
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

/*猜你喜欢，图片懒加载*/
.index .like{
  text-align: left;
  margin-top: 10px;
  background-color: white;
}

.index .like .like_title{
  height: 30px;
  line-height: 40px;
  padding-left: 15px;
  font-size: 14px;
  color: #777;
}

.index .like ul{
  margin: 0;
}

.index .like ul li{
  margin-left: 15px;
  padding: 11px 10px 11px 0;
  box-sizing: border-box;
  display: -webkit-box;
  height: 90px;
}

/*底部导航*/
.index .mint-tabbar > .mint-tab-item.is-selected{
  color: #f63;
  background-color:transparent;
}
</style>
