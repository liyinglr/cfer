// pages/wod/wod.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trains:[
        {
            title:"Warm Up",
            movements:[
                {
                    title: "Front Squats",
                    reps: [
                        {
                            image: '../../image/reps.png',
                            title: '3 reps',
                        },
                        {
                            image: '../../image/cal.png',
                            title: '10 cal',
                        }
                    ],
                    setResults: ["","",""],
                    setsCount: 3,
                    note: "The points of performance, common faults, and corrections carry over from the air squat.The new element of the front squat is the addition of a loaded barbell to the front of the body. The barbell is supported by the torso in the front-rack position."
                },
                {
                    title: "AIR SQUAT",
                    reps: [
                        {
                            image: '../../image/reps.png',
                            title: '3 reps',
                        },
                        {
                            image: '../../image/cal.png',
                            title: '10 cal',
                        }
                    ],
                    setResults: [],
                    setsCount: 0,
                    note: ""
                }
            ]
        },
        {
            title: "WOD",
            movements: [
                {
                    title: "Pull Up",
                    reps: [
                        {
                            image: '../../image/reps.png',
                            title: '3 reps',
                        }
                    ],
                    setResults: [5, 4, 3, 2],
                    setsCount:4,
                    note: "The kipping pull-up is CrossFit’s default pull-up. It allows the athlete to accomplish more work in less time (higher power) due to the hips assisting the upper-body pull. CrossFit recommends athletes have at least one strict pull- up before performing kipping pull- ups."
                },
                {
                    title: "Air Bike",
                    reps: [
                        {
                            image: '../../image/cal.png',
                            title: '10 cal',
                        }
                    ],
                    setResults: [],
                    setsCount: 0,
                    note: ""
                }
            ]
        }
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
  },
  bindTapSet: function(e){
    console.log(e.currentTarget.dataset)
  }
})