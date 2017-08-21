<template>
  <div class="location">
      <i class="fa fa-angle-left fa-2x" @click="back" aria-hidden="true"></i>
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>

      <div class="page-navbar">  
          <!-- navbar -->  
          <mt-navbar class="page-part" v-model="selected">  
            <mt-tab-item id="1">国内</mt-tab-item>  
            <mt-tab-item id="2">海外</mt-tab-item>  
          </mt-navbar>  
        
          <div>  
            <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>  
          </div>  
        
          <!-- tabcontainer -->  
          <mt-tab-container v-model="selected">  
            <mt-tab-container-item id="1">  
              <mt-cell v-for="n in 10" :key="n" :title="'内容 ' + n" />  
            </mt-tab-container-item>  
            <mt-tab-container-item id="2">  
              <mt-cell v-for="n in 4" :key="n" :title="'测试 ' + n" />  
            </mt-tab-container-item>    
          </mt-tab-container>  
        </div>  




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
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.location .mint-search{
  height: 100% !important;
}
</style>
