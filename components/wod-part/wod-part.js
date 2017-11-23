// components/wod-part/wod-part.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    partIndex:{
      type:Number,
      value:0,
    },
    partHidden: {
      type:Boolean,
      value:false,
    },
    partStyle:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    wodsName:[
      'AMRAP',
      'x Sets For Time Of',
      '9-12-15 reps for time'
    ],
    defaultWod:1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindWodChange: function(e){
      this.setData({defaultWod: e.detail.value});
    },
    _btnDeletePartBind:function(){
      console.log("_btnDeletePartBind")
      var myEventDetail = { partIndex: this.properties.partIndex} // detail对象，提供给事件监听函数
      var myEventOption = { bubbles: true } // 触发事件的选项
      this.triggerEvent('deletepart', myEventDetail)
    }
  }
})
