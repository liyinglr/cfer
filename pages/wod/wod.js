// pages/wod/wod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    part:[
      {
        image:'../../image/reps.png',
        title:'3 reps',
      },
      {
        image: '../../image/cal.png',
        title: '10 cal',
      },
      {
        image: '../../image/lb.png',
        title: '75 lbs',
      },
      {
        image: '../../image/time.png',
        title: '4 mins',
      }
    ],
    hideview:true
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