<template>
  <div class="search">
      <mt-header fixed title="fixed top">  
        <mt-button slot="left"  @click="back">
          <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
        </mt-button> 

        <span slot="right">搜索</span> 
      </mt-header>  
      <router-link to="./search">
        <mt-search v-model="value" placeholder="输入商品名、地名或菜品"></mt-search>
      </router-link>




<!--       <router-link to="./index">
        <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>ssssssssss
      </router-link>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> 

      <div class="page-navbar">-->  
          <!-- navbar -->  
          <!-- <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">国内</mt-tab-item>  
            <mt-tab-item id="2">海外</mt-tab-item>  
          </mt-navbar>  
        
          <div>  
            <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>  
          </div>   -->
        
          <!-- tabcontainer -->  
          <!-- <mt-tab-container v-model="selected">  
            <mt-tab-container-item id="1">  
              <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
              <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
            </mt-tab-container-item>    
          </mt-tab-container>  
        </div>   -->




  </div>
</template>

<script>
export default {   
  data () {  
    return {  
      value:"",
      selected: '1'
    }  
  },  
  mounted:function(){  
      
  },  
  methods: {  
    back:function(){
      this.$router.go(-1);
    }
  }  
}  
</script>

<style>
/*固定头部*/
.search .mint-header{
  height: 50px;
  background-color: white;
  color: #f63;
}

.search .mint-header .mint-header-button{
  -webkit-box-flex: 0;
  flex: 0;
}

.search .mint-header .mint-button label{
  position: relative;
}

.search .mint-header .mint-button img{
  position: relative;
  top: 5px;
}

/*搜索框*/
.search .mint-search{
  height: 50px;
}

.search .mint-search .mint-searchbar{
  padding: 0 !important;
  width: 78% !important;
  margin: 0 auto;
  position: fixed;
  margin-left: 6%;
}

.search .mint-searchbar{
  left: 12px;
  top: 7px;
  /*背景设为不显示*/
  background-color:transparent !important;
}

.search .mint-searchbar-inner{
  border-radius: 30px;
  background-color: #f0f0f0;
} 

.search .mint-searchbar-core{
  background-color: #f0f0f0;
}

.search .mint-searchbar-inner .mintui-search{
  font-size: 18px;
  margin-right: 6px;
}

/*隐藏取消按钮*/
.search .mint-searchbar-cancel{
  display: none;
}
</style>
