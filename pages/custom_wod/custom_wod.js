// pages/custom_wod/custom_wod.js
var mytabbar = require('../../components/my-tabbar/my-tabbar');
Page(Object.assign({}, mytabbar, 
{
  /**
   * 页面的初始数据
   */
  data:{
    tab: {
      list: [{
        id: 0,
        title: 'Part 0'
      },{
        id: 0xff,
        title: 'Add Part'
      }],
      selectedId: 0,
      scroll: false
    },
    activeIndex:0,
    tabContents:[
      {id:0}
    ]
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
  handleZanTabChange(e) {
    // wx.createSelectorQuery().select('.weui-page__hd').fields({
    //   properties: ['style']
    // }, function (res) {
    //   console.log(res)    // 节点的dataset
    // }).exec()
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    if (selectedId === 0xff){
      let tab = this.data.tab;
      let tabContents = this.data.tabContents;
      let tabCnt = tab.list.length
      // console.log(tabCnt)
      tab.list.splice(tabCnt-1,0,{
        id: tabCnt-1,
        title: 'Part ' + (tabCnt-1)
      });
      tabContents.push({id:tabCnt-1})
      this.setData({ tab: tab, tabContents: tabContents });
    }else{
      this.setData({
        [`${componentId}.selectedId`]: selectedId,
        activeIndex:selectedId,
      });
      console.log(this.data.activeIndex)
    }
  },
  deletePart:function(e){
    console.log('deletepart',e.detail)
    let tab = this.data.tab;
    tab.list.splice(e.detail.partIndex, 1);
    tab.selectedId=0;
    let tabContents = this.data.tabContents;
    tabContents.splice(e.detail.partIndex, 1);
    this.setData({ tab: tab, 
      tabContents: tabContents, 
      activeIndex: 0}); 
    // console.log(this.data);
  }
}))