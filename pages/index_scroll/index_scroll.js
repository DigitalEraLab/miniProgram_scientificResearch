// pages/index_scroll/index_scroll.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category1:[
            {proName:'A项目',pages:[{
                'proIntroduce':[' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦',' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦'],
                'proName':['项目介绍','Project introduction'],
            },{
                'harvest':['收获1','收获2','收获3','收获4','收获5','收获6','收获7','收获8','收获9',],
                'proName':['项目收获','Project harvest'],
            },{
                'proPeriod':{'Alltime':'16','ResearchTime':'12','WriteTime':'4','Research':['过程1','过程2','过程3','过程1','过程2','过程3'],'Write':['过程7'],PageIntroduction:[0,1,2]},
                'proName':['项目周期','Project cycle'],
            }]},
            {proName:'B项目',
            pages:[
                {
              
                'proIntroduce':[' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦',' 送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦送哦吧v哦对吧v哦不对吧v哦啊吧v哦不波v宝宝v哦'],
                'proName':['项目介绍','Project introduction'],
            },
            {
                'harvest':['收获1','收获2','收获3','收获4','收获5','收获6','收获7','收获8','收获9',],
            },{
                'proPeriod':{'time':'16','research':['过程1','过程2','过程3','过程1','过程2','过程3'],'Write':['过程7'],PageIntroduction:[0,1,2]}
            }]},
        ],
        currentPage: 0,
        top_currentPage:0,
        bottom_currentPage:0
    },
    // 底部页面滚动
    bottomPageChange(e){
        console.log(e.detail.current);
        this.setData({
            bottom_currentPage:e.detail.current
        })
    },
    goToNextPage: function(e) {
        console.log(e);
       this.setData({
        currentPage:1
       })
      },
      toTop(){
        this.setData({
            currentPage:0
           })
      },
      choosePro(e){
          console.log(e);
        this.setData({
            top_currentPage:e.currentTarget.dataset.choose
           }) 
      },
      choosePro1(e){
      this.setData({
          top_currentPage:e.detail.current
         }) 
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
        setTimeout(() => {
            const myElement = this.selectComponent('swiper-container')
            console.log(myElement)
          }, 500)
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