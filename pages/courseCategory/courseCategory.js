// pages/courseCategory/courseCategory.js
const DEFAULT_PAGE = 0;
var app = getApp();
var urls = app.globalData.Testurl;
var ImgUrls="https://www.eralab.cn/static";
Page({

    /**
     * 页面的初始数据
     */
    startPageX: 0,
    currentView: DEFAULT_PAGE,
    data: {
        imgurls:ImgUrls,
        category0: ['计算机科学','金融商科','理工科','人文社科'],
        course: [{
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, 
        {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': '99'
        }, {
            'courseName': '系统及信息安全方向',
            'EName':'System Security',
            'startTime': '5月6日',
            'school': '麻省理工学院',
            'enterprise': '阿里巴巴（中国）有限公司',
            'Surplus': 99
        }],

        toView: `card_${DEFAULT_PAGE}`,
        startPageY: 0,
        startPageX: 0,
        currentView: 0,
        chooseSubIndex: 0,
        isFixed: false, //页面吸顶
        showDialog: false, //弹出框
        dialogTitle: "提示",
        dialogContent: "请登录查看课程详情!"
    },



    // 大类选择
    toTitleItem(e) {
        console.log('选择了',e.currentTarget.dataset.totitleitem);
        this.setData({
            toView: `card_${e.currentTarget.dataset.totitleitem}`,
            currentView: e.currentTarget.dataset.totitleitem
        })
        this.getCourse(this.data.category0[e.currentTarget.dataset.totitleitem])
    },



    // dialout传值过来
    fromDialogData(e) {
        console.log(e.detail.showDialog);
        this.setData({
            showDialog: e.detail.showDialog
        })
    },

    // 详情页
    toCourseDetail(e) {
        let that = this
        let id = e.currentTarget.dataset.id
           wx.navigateTo({
                    url: '/pages/courseDetail/courseDetail?id=' + id,
                })
        // wx.getStorage({
        //     key: 'token',
        //     success(res) {
        //         wx.navigateTo({
        //             url: '/pages/courseDetail/courseDetail?id=' + id,
        //         })
        //     },
        //     fail(res) {
        //         that.setData({
        //             showDialog: true
        //         })
             
        //     },
        // })
    },

    //小类选择
    chooseSub(e) {
        this.setData({
            chooseSubIndex: e.currentTarget.dataset.choosesub
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
    toFixed() {

    },
    onPageScroll(e) {
        wx.createSelectorQuery().select('#top').boundingClientRect(res => {
            // console.log('具体高度',res.height);
            if (e.scrollTop > 50) {

            }
            if (e.scrollTop > res.height - 50 && e.scrollTop > 200) {
                this.setData({
                    isFixed: true
                })
            } else {
                this.setData({
                    isFixed: false
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
        const moveY = e.changedTouches[0].pageY - this.data.startPageY;
        // console.log('滑动距离',moveY);
        const maxPage = this.data.category0.length - 1;
        console.log(maxPage);
        if (Math.abs(moveX) >= 50) {
            // console.log('触发横向滚动条件',moveX);
            if (moveX > 0) {
                this.setData({
                    currentView: this.data.currentView !== 0 ? this.data.currentView - 1 : 0
                })

            } else {
                this.setData({
                    currentView: this.data.currentView !== maxPage ? this.data.currentView + 1 : maxPage
                })
            }
            this.getCourse(this.data.category0[this.data.currentView])
        }
        if (Math.abs(moveY) > 15) {

            if (moveY < 0) {
                this.scrollTo()
            }
        }


        this.setData({
            toView: `card_${this.data.currentView}`,
            toBottom: `card_${this.data.currentLocation}`
        });
        console.log(this.data.toView);
    },

    // 获取图片信息
    getImageInfo(url) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: url,
                responseType: 'arraybuffer',
                success: function (res) {
                    resolve(res);
                },
                fail: function (res) {
                    reject(err);
                }
            })
        })
    },

    
    // 加载图片

    loadImg(){
        const urls = [
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/计算机科学.svg',
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/计算机科学_s.svg',
        ];
        wx.showLoading({
            title: '加载中',
        })
        // Promise.all() 等待所有图片请求完成
        Promise.all(urls.map(url => this.getImageInfo(url)))
            .then((results) => {
                // 所有图片都已获取，关闭loading框
                wx.hideLoading()
                // 对获取到的图片进行操作
                console.log('所有图片已获取', results)
            })
            .catch((error) => {
                console.log('获取图片失败：', error)
                // 提示用户获取图片失败
                wx.showModal({
                    title: '提示',
                    content: '获取图片失败，请稍后重试',
                    showCancel: false
                })
            })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // this.getCourse();
        this.loadImg();
       
    },

    getCourse(e) {
        let that = this
        let data1;
        if (e) {
            data1 = e;
        }
        wx.showLoading({
            title: '加载中'
          })
        wx.request({
            url: urls + '/course/listCourseAndCategory',
            data: {
                category: data1
            },
            success: function (res) {
                let arr = [];
                let arr1 = [];
                // wx.hideLoading();
                if (res.data.data.CategoryList) {
                    for (let i = 0; i < res.data.data.CategoryList.length; i++) {
                        arr.push(res.data.data.CategoryList[i].name)
                    }
                    that.setData({
                        category0: arr
                    })
                }


                for (let i = 0; i < res.data.data.CourseList.length; i++) {

                    let date = new Date(res.data.data.CourseList[i].startTime);
                    let day = date.getDate();
                    let mon = date.getMonth() + 1;
                    res.data.data.CourseList[i].startTime = mon + '月' + day + '日';

                }
                that.setData({
                    course: res.data.data.CourseList
                })
                // 加载图片
                this.loadImg();
               
            },
            fail: function (res) {
                wx.hideLoading();
                wx.showModal({
                    title: '获取资源失败',
                    content: '是否确认重新进入小程序？',
                    success(res) {
                      if (res.confirm) {
                        wx.reLaunch({
                          url: '/pages/courseCategory/courseCategory'
                        })
                      }
                    }
                  })
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