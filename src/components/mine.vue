<template>  
  <div class="mine">
  <!-- 头部 -->
    <div class="m_top">
      <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
    </div>

  <!-- 点击登录 -->
  <div class="m_login">
    <img src="../assets/head.png">
    
    <div class="click_login">
      <div class="login_title">点击登录</div>
      <span>登录享优惠</span>
      <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
    </div>
  </div>

  <!-- 订单 -->
  <div class="order">
    <el-row :gutter="2">
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-credit-card fa-2x" aria-hidden="true"></i><div>待付款</div>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-calendar-check-o fa-2x" aria-hidden="true"></i><div>可使用</div>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-credit-card fa-2x" aria-hidden="true"></i><div>退款/售后</div>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-credit-card fa-2x" aria-hidden="true"></i><div>我的订单</div>
      </div></el-col>
    </el-row>
  </div>

  <!-- 卡券 -->
  <div class="credits">
    <el-row :gutter="2">
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-money fa-2x" aria-hidden="true"></i><div>卡券</div><span>0张</span>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-money fa-2x" aria-hidden="true"></i><div>积分</div><span>0</span>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-money fa-2x" aria-hidden="true"></i><div>余额</div><span>￥0.00</span>
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <i class="fa fa-money fa-2x" aria-hidden="true"></i><div>我的钱包</div><span>办信用卡</span>
      </div></el-col>
    </el-row>
  </div>


  <!-- 收藏，列表 -->
  <div class="collect">
    <ul>
      <li>
        <div>
          <i class="fa fa-commenting" aria-hidden="true" style="color:green;"></i><span>待点评</span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
      <li>
        <div>
          <i class="fa fa-heart" aria-hidden="true" style="color:red;"></i><span>收藏</span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
      <li>
        <div>
          <i class="fa fa-clock-o" aria-hidden="true" style="color:gray;"></i><span>最近浏览</span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
      <li>
        <div>
          <i class="fa fa-black-tie" aria-hidden="true" style="color:rgb(255, 198, 54);"></i><span>会员等级</span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>
      <li>
        <div>
          <i class="fa fa-cog" aria-hidden="true" style="color:rgb(74, 165, 240);"></i><span>设置</span>
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </li>
      <hr></hr>


    </ul>
  </div>


  </div>  
</template>  
  
<script> 

export default {  
  data () {  
    return {  


    }  
  },  
  mounted:function(){  

  },  
  watch: {

  },
  methods: {  
    
  }  
}  
</script>

<style>
/*头部*/
.mine .m_top{
  height: 26px;
  background-color: #CDAD00;
  text-align: right;
  padding: 10px 20px 10px 0px;
}

.mine .m_top i{
  font-size: 26px;
  color: white;
}
  

/*点击登录*/
.mine .m_login{
  height: 70px;
  background-color: #CDAD00;
  padding: 2px 20px 15px 30px;
  position: relative;
}

.mine .m_login img{
  background-color: #ccc;
  height: 100%;
  width: 21%;
  float: left;
  border-radius: 35px;
}

.mine .m_login .click_login{
  float: left;
  width: 46%;
  height: 100%;
  padding-left: 16px;
  color: white;
  text-align: left;
  letter-spacing: 2px;
  position: left;
}

.mine .m_login .click_login .login_title{
  font-weight: 500;
  padding: 6px 0px 6px 0px;
}
    
.mine .m_login .click_login span{
  font-size: 2px;
}

.mine .m_login .click_login i{
  position: absolute;
  right: 12px;
  top: 22px;
}

/*订单*/
.mine .order{
  height: 52px;
  background-color: white;
  padding: 14px 0px 14px 0px;
  font-size: 13px;
  margin-bottom: 12px;
}

.mine .order .grid-content {
  min-height: 52px;
}

.mine .order .bg-purple div{
  margin-top: 8px;
}

/*卡券*/
.mine .credits{
  height: 73px;
  background-color: white;
  padding: 14px 0px 14px 0px;
  font-size: 13px;
  margin-bottom: 12px;
}

.mine .credits .grid-content {
  min-height: 52px;
}

.mine .credits .bg-purple div{
  margin-top: 8px;
  margin-bottom: 6px;
}

.mine .credits .bg-purple span{
  color: #ccc;
  font-size: 12px;
}


/*收藏，列表*/
.mine .collect{
  height: 275px;
  background-color: white;
  text-align: left;
}

.mine .collect ul{
  margin: 0; 
}

.mine .collect ul hr{
  margin: 0; 
  border: 1px solid #EDEDED;
}

.mine .collect li{
  margin: 0;
  background-color: white;
  width: 100%;
  position: relative;
}

.mine .collect li div{
  height: 22px;
  padding: 12px 10px 12px 20px;  
}

.mine .collect li span{
  margin-left: 10px;
}

.mine .collect li .fa-angle-right{
  position: absolute;
  right: 18px;
  top: 13px;
}

</style>
