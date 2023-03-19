// pages/courseCategory/courseCategory.js
const DEFAULT_PAGE = 0;
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    startPageX: 0,
    currentView: DEFAULT_PAGE,
    data: {
        category0:[],
        course:[{'courseName':'系统及信息安全方向System Security','startTime':'5月6日','school':'麻省理工学院','enterprise':'阿里巴巴（中国）有限公司','Surplus':'99'},{'courseName':'系统及信息安全方向System Security','startTime':'5月6日','school':'麻省理工学院','enterprise':'阿里巴巴（中国）有限公司','Surplus':'99'},{'courseName':'系统及信息安全方向System Security','startTime':'5月6日','school':'麻省理工学院','enterprise':'阿里巴巴（中国）有限公司','Surplus':'99'},{'courseName':'系统及信息安全方向System Security','startTime':'5月6日','school':'麻省理工学院','enterprise':'阿里巴巴（中国）有限公司','Surplus':'99'},{'courseName':'系统及信息安全方向System Security','startTime':'5月6日','school':'麻省理工学院','enterprise':'阿里巴巴（中国）有限公司','Surplus':99}],
        
        toView: `card_${DEFAULT_PAGE}`,
        startPageY:0,
        startPageX:0,
        currentView:0,
        chooseSubIndex:0,
        isFixed:false,//页面吸顶
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
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
          wx.pageScrollTo({
            scrollTop: res.height,
            duration: 400
          })
        }).exec()
    },
    toFixed(){
       
    },
    onPageScroll(e){
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
            // console.log('具体高度',res.height);
            if(e.scrollTop>50){
                
            }
            if(e.scrollTop>res.height-50 &&e.scrollTop>200){
               this.setData({
                   isFixed:true
               })
            }else{
                this.setData({
                    isFixed:false
                })
            }
          }).exec()

    },


    touchStart(e) {
        this.data.startPageX = e.changedTouches[0].pageX;
        this.data.startPageY = e.changedTouches[0].pageY;
        // console.log('开始',e.changedTouches[0].pageY);
      },
    
      touchEnd(e) {
        const moveX = e.changedTouches[0].pageX - this.data.startPageX;
        // console.log('结束',e.changedTouches[0].pageY);
        const moveY=e.changedTouches[0].pageY - this.data.startPageY;
        // console.log('滑动距离',moveY);
        const maxPage = this.data.course.length - 1;
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
        if(Math.abs(moveY)>15){
            
            if (moveY<0){
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
        let url=app.globalData.Testurl
        let that=this
        wx.request({
          url: url+'/course/listCourseAndCategory',
          success: function(res) {
            console.log(res.data.data);
            let arr=[];
            let arr1=[];
            for(let i=0;i<res.data.data.CategoryList.length;i++){
                arr.push(res.data.data.CategoryList[i].name)
            }
            for(let i=0;i<res.data.data.CourseList.length;i++){
              
                let date = new Date(res.data.data.CourseList[i].startTime);
                let day = date.getDate();
                let mon=date.getMonth()+1;
                res.data.data.CourseList[i].startTime=mon+'月'+day+'日';

            }
            that.setData({
                category0:arr,
                course:res.data.data.CourseList
            })
            console.log(that.data.course);
          }
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