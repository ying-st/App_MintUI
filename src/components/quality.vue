<template>
  <div class="quality">
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

  <!-- 附近优惠 -->
      <div class="near_discounts">
        <div class="n_title">附近优惠</div>
        <ul>
          <li>
            <i class="fa fa-cutlery  fa-2x" slot="icon" aria-hidden="true"></i><div>美食</div>
          </li>
          <li>
            <i class="fa fa-cutlery  fa-2x" slot="icon" aria-hidden="true"></i><div>电影</div>
          </li>
          <li>
            <i class="fa fa-cutlery  fa-2x" slot="icon" aria-hidden="true"></i><div>外卖</div>
          </li>
          <li>
            <i class="fa fa-cutlery  fa-2x" slot="icon" aria-hidden="true"></i><div>休闲娱乐</div>
          </li>
          <li>
            <i class="fa fa-cutlery  fa-2x" slot="icon" aria-hidden="true"></i><div>全部</div>
          </li>
        </ul>
      </div>



      <div class="page-navbar">  
          <!-- navbar -->  
          <mt-navbar class="page-part" v-model="select">  
            <mt-tab-item id="1">国内</mt-tab-item>  
            <mt-tab-item id="2">海外</mt-tab-item>  
          </mt-navbar>   
        
          <!-- tabcontainer -->  
          <mt-tab-container v-model="select">  
            <mt-tab-container-item id="1">  
              <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />  
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
              <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />  
            </mt-tab-container-item>    
          </mt-tab-container>  
        </div>




      <!-- 底部导航  -->
      <mt-tabbar fixed v-model="selected">
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
      select: "1",
      selected: 'tab2'
    }  
  },  
  mounted:function(){  
      
  },
  watch: {
    selected: function (val, oldVal) {
        // 这里就可以通过 val 的值变更来确定,切换底部导航
        // console.log(val)
        if(val == "tab1"){
          this.$router.push('./index');
        }
        if(val == "tab2"){
          this.$router.push('./quality');
        }
    }
  },  
  methods: {  

  }  
}  
</script>

<style>
/*固定头部*/
.quality .mint-header{
  height: 50px;
  background-color: white;
  color: #f63;
}

.quality .mint-header .mint-header-button{
  -webkit-box-flex: 0;
  flex: 0;
}

.quality .mint-header .mint-button label{
  position: relative;
  top: -4px;
}

.quality .mint-header .mint-button i{
  position: relative;
  top: 5px;
}

/*搜索框*/
.quality .mint-search{
  height: 50px;
}

.quality .mint-search .mint-searchbar{
  padding: 0 !important;
  width: 76% !important;
  margin: 0 auto;
  position: fixed;
  margin-left: 15%;
}

.quality .mint-searchbar{
  left: 12px;
  top: 7px;
  /*背景设为不显示*/
  background-color:transparent !important;
}

.quality .mint-searchbar-inner{
  border-radius: 30px;
  background-color: #f0f0f0;
} 

.quality .mint-searchbar-core{
  background-color: #f0f0f0;
}

.quality .mint-searchbar-inner .mintui-search{
  font-size: 18px;
  margin-right: 6px;
}

/*隐藏取消按钮*/
.quality .mint-searchbar-cancel{
  display: none;
}

/*附近优惠*/
.quality .near_discounts{
  background-color: lightpink;
  text-align: left;  
  padding: 10px; 
  margin-top: 3px;
}

.quality .near_discounts .n_title{
  font-size: 15px;
  font-weight: 600;
}


.quality .near_discounts ul{
 margin: 0;
  min-height: 74px;
  padding-top: 16px;
  font-size: 13px;
}

.quality .near_discounts ul li{
  width: 20%;
  height: 100%;
  margin: 0;
  float: left;
  text-align: center;
}

.quality .near_discounts ul li i{
  width: 44px;
  height: 36px;
  margin-top: 4px;
}






/*底部导航*/
.quality .mint-tabbar > .mint-tab-item.is-selected{
  color: #f63;
  background-color:transparent;
}
</style>
