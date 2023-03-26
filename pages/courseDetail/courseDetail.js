// pages/courseDetail/courseDetail.js
var app = getApp();
var urls = app.globalData.Testurl
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    
    onShareAppMessage (e) {
        return {
          title: '自定义标题',
          path: '/pages/home/main', // 好友点击分享之后跳转到的小程序的页面
          desc: '描述',  // 看你需要不需要，不需要不加
          imageUrl: '分享的图片路径',
          id:''
        }
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      this.setData({
          id:options.id
      })

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        let that=this;
        wx.getStorage({
            key:'token',
            success(res){
                wx.request({
                    url:urls+ '/course/listCourseDetail',
                    header:{
                        'Authorization': 'Bearer' + ' '+res.data,
                    },
                    data:{
                      courseId:that.data.id
                    },
                    success:function(res){
                        console.log('课程详情',res);
                    }
                  })
            }
        })
       
        wx.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline']
          })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})