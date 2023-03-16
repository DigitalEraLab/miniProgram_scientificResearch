// pages/course/course.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        chooseIndex:0,
        course:['金融商科','计算机科学','人文社科','艺术','课程辅导'],
        chooseSubIndex:0,
        subclass:['全部','市场营销','市场营销','市场营销','市场营销','市场营销','市场营销','市场营销','市场营销','市场营销']
    },
    // 右边小类选择
    chooseSub(e){
        console.log(e);
        this.setData({
            chooseSubIndex:e.currentTarget.dataset.choosesub
        })
    },


    // 左边导航栏
    chooseCourse(e){
        console.log(e.currentTarget.dataset.choose);
        this.setData({
            chooseIndex:e.currentTarget.dataset.choose
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '课程超市'
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

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