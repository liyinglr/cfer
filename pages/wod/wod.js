// pages/wod/wod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [{
      title: '步骤1',
      desc: '注册，登录'
    }, {
      title: '步骤2',
      desc: '进入详情页，点击立即购买'
    }, {
      title: '步骤3',
      desc: '支付成功'
    }],
    current: 1
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log(this.childrens)  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  bindView: function(){ 
    //   console.log(this)   
    //   message.show.call(this,{
    //   content: '请输入内容',
    //   icon: 'info',
    //   duration: 1500
    // });
    // console.log(this)
  }
})