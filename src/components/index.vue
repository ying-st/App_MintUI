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
        <mt-swipe :auto="0">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>

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
.index .mint-swipe{
  height: 200px;
} 











/*底部导航*/
.index .mint-tabbar > .mint-tab-item.is-selected{
  color: #f63;
  background-color:transparent;
}
</style>
