// pages/courseCategory/courseCategory.js
const DEFAULT_PAGE = 0;
Page({

    /**
     * 页面的初始数据
     */
    startPageX: 0,
    currentView: DEFAULT_PAGE,
    data: {
        hotCourse:['人工智能','数据挖掘','计算机视觉','自然语言处理'],
        category0:['计算机','商科','人文社会'],
        category1:['人工智能','计算机系统','计算机理论','交叉领域'],
        category2:['全部','人工智能','数据挖掘','计算机视觉','自然语言处理','信息检索','计算机网络','网络安全','数据库','嵌入式系统'],
        toView: `card_${DEFAULT_PAGE}`,
        startPageY:0,
        startPageX:0,
        currentView:0,
        chooseSubIndex:0,
        // list: ['Javascript', 'Typescript', 'Java', 'PHP', 'Go']
    },

    // 大类选择
    toTitleItem(e){
        console.log(e.currentTarget.dataset.totitleitem);
        this.setData({
            toView: `card_${e.currentTarget.dataset.totitleitem}`,
            currentView:e.currentTarget.dataset.totitleitem
        })
    },

    // 详情页
    toCourseDetail(e){
        wx.navigateTo({
          url: '/pages/courseDetail/courseDetail',
        })
    },

    //小类选择
    chooseSub(e){
        this.setData({
            chooseSubIndex:e.currentTarget.dataset.choosesub
        })
    },

    scrollTo() {
        // 1.使用wx.createSelectorQuery()查询到需要滚动到的元素位置
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
           
            // console.log(res.height);
          // 到这里，我们可以从res中读到class为bb4的top，即离顶部的距离（px）
          // 2使用wx.pageScrollTo()将页面滚动到对应位置
          wx.pageScrollTo({
            scrollTop: res.height, // 滚动到的位置（距离顶部 px）
            duration: 400 //滚动所需时间 如果不需要滚动过渡动画，设为0（ms）
          })
        }).exec()
    },



    touchStart(e) {
        this.data.startPageX = e.changedTouches[0].pageX;
        this.data.startPageY = e.changedTouches[0].pageY;
        console.log('开始',e.changedTouches[0].pageY);
      },
    
      touchEnd(e) {
        const moveX = e.changedTouches[0].pageX - this.data.startPageX;
        console.log('结束',e.changedTouches[0].pageY);
        const moveY=e.changedTouches[0].pageY - this.data.startPageY;
        // console.log('滑动距离',moveY);
        const maxPage = this.data.category1.length - 1;
        if (Math.abs(moveX) >= 50){
            // console.log('触发横向滚动条件',moveX);
          if (moveX > 0) {
              this.setData({
                currentView:this.data.currentView !== 0 ? this.data.currentView - 1 : 0
              })
          } else {
            this.setData({
                currentView:this.data.currentView !== maxPage ? this.data.currentView + 1 : maxPage
            })
          }
        }
        console.log(Math.abs(moveY));
        if(Math.abs(moveY)>15){
            
            if (moveY<0){
                console.log('moveY',moveY);
                this.scrollTo()
              }
        }
       
        
        this.setData({
          toView: `card_${this.data.currentView}`,
          toBottom:`card_${this.data.currentLocation}`
        });
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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