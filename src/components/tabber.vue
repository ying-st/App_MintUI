<template>
  <div class="tabber"> 
	    <!-- 底部导航切换页 -->  
<!-- 	    <mt-tab-container class="page-tabbar-container" v-model="selected">  
	      <mt-tab-container-item id="tab1">  
	        <Index></Index>
	      </mt-tab-container-item>  
	      <mt-tab-container-item id="tab2">  
	        <Quality></Quality>
	      </mt-tab-container-item>  
	      <mt-tab-container-item id="tab3">  
	        <Discover></Discover>
	      </mt-tab-container-item>  
	      <mt-tab-container-item id="tab4">  
	        <Mine></Mine>
	      </mt-tab-container-item>  
	    </mt-tab-container> -->  
	    <router-view></router-view>

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
// import Index from './index'
// import Quality from './quality'
// import Discover from './discover'
// import Mine from './mine'


export default {   
  // components: { Index, Quality, Discover, Mine },
  data () {  
    return {  
    	selected:"tab1"
    }
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
        if(val == "tab3"){
          this.$router.push('./discover');
        }
        if(val == "tab4"){
          this.$router.push('./mine');
        }
    }
  }
  
}
</script>

<style>
.tabber .mint-tabbar > .mint-tab-item.is-selected{
  color: #f63;
  background-color:transparent;
}
</style>