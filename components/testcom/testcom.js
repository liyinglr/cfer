Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function(){},
  moved: function(){},
  detached: function(){},
})