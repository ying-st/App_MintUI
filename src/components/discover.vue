<template>
  <div class="discover">
  <!-- 头部   -->
      <mt-header fixed title="fixed top">  
        <router-link to="./location" slot="left">  
          <mt-button>
            {{place}}
            <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i> 
          </mt-button> 
        </router-link>  
      </mt-header>  
      <router-link to="./search">
        <mt-search v-model="value" placeholder="输入商品名、地名或菜品"></mt-search>
      </router-link>

  <!-- 好友去哪 -->
    <div class="go_where">
      <div>
        <span>好友去哪</span>
        <span class="friends_circle">吃喝玩乐朋友圈<i class="fa fa-angle-right" aria-hidden="true"></i></span>
      </div>
    </div>


  <!-- Navbar 切换页 -->
      <div class="page-navbar">  
          <!-- navbar -->  
          <mt-navbar class="page-part" v-model="select">  
            <mt-tab-item id="1">精选</mt-tab-item>  
            <mt-tab-item id="2">最新</mt-tab-item>  
          </mt-navbar>   
        
          <!-- tabcontainer -->  
          <mt-tab-container v-model="select">  
            <mt-tab-container-item class="tab1" id="1">  
              <ul v-for="excl in excl_Form" :key="excl.item_title">
                <li class="one">
                  <el-row>
                    <el-col :span="24"><div class="grid-content bg-purple">
                      <div class="img_panel"><img :src="excl.L_Img"></div>
                      <div class="info-panel">
                        <div class="item-title">{{ excl.item_title }}</div>
                        <div class="item-info">
                          <span class="item-tag">{{ excl.item_tag }}</span>
                          <span class="item-other">{{ excl.item_other }}</span>
                        </div>
                      </div>
                    </div></el-col>
                  </el-row>
                </li>
                <li class="two">
                  <el-row>
                    <el-col :span="16"><div class="grid-content bg-purple">
                      <div class="info-panel">
                        <div class="item-title">{{ excl.item_title2 }}</div>
                        <span class="item-other">{{ excl.item_other2 }}</span>
                        <div class="item-info">
                          <span class="item-tag">{{ excl.item_tag2 }}</span>
                        </div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="img-panel"><img :src="excl.S_Img"></div>
                    </div></el-col>
                  </el-row>
                </li>

                <li class="two gap">
                  <el-row>
                    <el-col :span="16"><div class="grid-content bg-purple">
                      <div class="info-panel">
                        <div class="item-title">{{ excl.item_title3 }}</div>
                        <span class="item-other">{{ excl.item_other3 }}</span>
                        <div class="item-info">
                          <span class="item-tag">{{ excl.item_tag3 }}</span>
                        </div>
                      </div>
                    </div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple">
                      <div class="img-panel"><img :src="excl.S_Img2"></div>
                    </div></el-col>
                  </el-row>
                </li>
              </ul> 
            </mt-tab-container-item>  
            <mt-tab-container-item class="tab2" id="2">  
              <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />  
            </mt-tab-container-item>    
          </mt-tab-container>  
      </div>

  </div>
</template>

<script>
import { api } from '@/global/api'

export default {  
  data () {  
    return {  
      place:"广州",
      value:"",
      select: "1",
      // selected: 'tab3',

      excl_Form:[{
        L_Img:"",
        item_title:"",
        item_tag:"",
        item_other:"",
        item_title2:"",
        item_other2:"",
        item_tag2:"",
        S_Img:"",
        item_title3:"",
        item_other3:"",
        item_tag3:"",
        S_Img2:"",
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
      //获取精选数据
      this.$http.get(api.q_exclusivelist).then(function(response){ 
        this.excl_Form = response.data.exclusiveData;
      },function(response){
        alert('q_exclusivelist.json请求失败了')
      })
    }

  }  
}  
</script>

<style>
/*固定头部*/
.discover .mint-header{
  height: 50px;
  background-color: white;
  color: #f63;
}

.discover .mint-header .mint-header-button{
  -webkit-box-flex: 0;
  flex: 0;
}

.discover .mint-header .mint-button label{
  position: relative;
  top: -4px;
}

.discover .mint-header .mint-button i{
  position: relative;
  top: 5px;
}

/*搜索框*/
.discover .mint-search{
  height: 50px;
}

.discover .mint-search .mint-searchbar{
  padding: 0 !important;
  width: 76% !important;
  margin: 0 auto;
  position: fixed;
  margin-left: 15%;
}

.discover .mint-searchbar{
  left: 12px;
  top: 7px;
  /*背景设为不显示*/
  background-color:transparent !important;
}

.discover .mint-searchbar-inner{
  border-radius: 30px;
  background-color: #f0f0f0;
} 

.discover .mint-searchbar-core{
  background-color: #f0f0f0;
}

.discover .mint-searchbar-inner .mintui-search{
  font-size: 18px;
  margin-right: 6px;
}

/*隐藏取消按钮*/
.discover .mint-searchbar-cancel{
  display: none;
}

/*好友去哪*/
.discover .go_where{
  width: 100%;
  height: 60px;
  background-color: white;
  margin: 8px 0 8px 0;
  text-align: left;
  position: relative;
}

.discover .go_where div{
  padding: 18px 10px 15px 10px;
}

.discover .go_where .friends_circle{
  position: absolute;
  right: 6%;
  font-size: 14px;
  color: #878787;
}

.discover .go_where .friends_circle i{
  margin-left: 7px;
}



/*Navbar 切换页*/
.discover .page-navbar{
  margin-bottom: 50px;
}

.discover .mint-navbar .mint-tab-item.is-selected{
  margin-bottom: 0;
  color: #f63;
  border-bottom: 3px solid #f63;
}

.discover .tab1 ul{
  margin: 0; 
}

.discover .tab1 .one{  
  margin: 0;
  width: 100%;
  height: 245px;
  background-color: white;
}

.discover .tab1 .grid-content {
  min-height: 20px;
}

.discover .tab1 .el-row{
  padding: 15px;
  text-align: left;
  font-size: 11px; 
}

.discover .tab1 .img_panel{
  height: 136px;
  width: 100%;
}

.discover .tab1 .img_panel img{
  width: 100%;
  height: 100%;
}

.discover .tab1 .item-info{
  position: relative;
  padding-top: 7px;
} 

.discover .tab1 .item-title{
  padding-top: 9px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #111;
}

.discover .tab1 .item-info .item-tag{
  padding: 0 3px;
  border: 1px solid #d2a156;
  color: #d2a156;
  border-radius: 2px;
  height: 17px;
  line-height: 17px;
  box-sizing: border-box;
}

.discover .tab1 .item-info .item-other{
  position: absolute;
  right: 0;
  bottom: 0;
}

.discover .tab1 .two{  
  margin: 0;
  margin-top: 3px;
  width: 100%;
  height: 142px;
  background-color: white;
}

.discover .tab1 .two .info-panel{
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 10px;
  overflow: hidden;
  min-height: 112px;
}

.discover .tab1 .two .info-panel .item-info{
  margin-top: 15px;
}

.discover .tab1 .two .item-title{
  margin-bottom: 8px;
  padding-top: 0;
}

.discover .tab1 .two .img-panel{
  position: relative;
  width: 112px;
  height: 112px;
}

.discover .tab1 .two .img-panel img{
  width: 100%;
  height: 100%;
}

.discover .tab1 .gap{
  margin-bottom: 12px;
}


</style>
