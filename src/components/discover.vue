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

  </div>
</template>

<script>
export default {   
  data () {  
    return {  
      place:"广州",
      value:"",
      select: "1",
      // selected: 'tab3',

    }  
  },  
  mounted:function(){  

  },  
  methods: {  

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
</style>
