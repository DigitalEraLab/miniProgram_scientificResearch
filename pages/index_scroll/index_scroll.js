// pages/index_scroll/index_scroll.js
// var app=getApp()
// var ImgUrl=app.globalData.ImgUrl;

var ImgUrls = "https://www.eralab.cn/static"

Page({

    /**
     * 页面的初始数据
     */
    data: {
        category1: [{
                proName: 'RI-A深度版',
                proImgUrl: "",
                pages: [{
                    'proIntroduce': ["“金衣计划”是纪元教育公司2023年推出的科研实习项目，提供全方位的科研实践和实习经验。学生通过RI-A和RI-B两种模式参与教授和行业大厂专家的项目，并得到硕士和博士导师的辅助。学生通过该计划获得研究经验和论文写作技能，为未来学术和职业发展打下坚实基础。"],
                    'pro_item': [{
                        t1: '真正的科研项目',
                        t2: '(依据高校研究生科研教育的培养方案)'
                    }, {
                        t1: '科研和实习',
                        t2: '(同时收获科研经历和实习经历)'
                    }, {
                        t1: '业界大佬指点',
                        t2: '(顶尖名校教授、行业大厂专家、知名期刊主编)'
                    }, {
                        t1: '背景提升',
                        t2: '(丰富个人简历和背景，收获申请院校的offer )'
                    }, {
                        t1: '真正的科研项目',
                        t2: '(依据高校研究生科研教育的培养方案)'
                    }, {
                        t1: '综合素质提升',
                        t2: '(培养探索问题和解决问题能力)'
                    }],
                    'proName': ['项目介绍', 'Project introduction'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-youxiang',
                        color: '#fd9946',
                        content: '名校教授推荐信',
                        other: ''

                    }, {
                        iconfont: 'icon-xuekefenxi',
                        color: '#00eec4',
                        content: "论文发表 ",
                        other: ''
                    }, {
                        iconfont: 'icon-yuanxiaodashuju',
                        color: '#55bcfe',
                        content: '实习证明',
                        other: ''
                    }, {
                        iconfont: 'icon-xiangmu2',
                        color: '#fcd82e',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyiguanli',
                        color: '#ff5678',
                        content: 'EI级学术会议',
                        other: ''
                    }, {
                        iconfont: 'icon-zhengce2',
                        color: '#5396ff',
                        content: '学术计划书',
                        other: ''
                    }, {
                        iconfont: 'icon-renzheng2',
                        color: '#fca603',
                        content: '项目参与证书',
                        other: ''
                    }, {
                        iconfont: 'icon-zhishi',
                        color: '#05c4a3',
                        content: '科研和实习经历'
                    }, {
                        iconfont: 'icon-chengguo2',
                        color: '#feab38',
                        content: '个人实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project harvest'],
                }, {
                    'proPeriod': {
                        'proImgUrl': "",
                        'Alltime': '16',
                        'ResearchTime': '12',
                        'WriteTime': '4',
                        'Research': {
                            step: ['1.项目准备', '2.开题汇报', '3.前期研究', '4.中期考核', '5.后期研究', '6.结题验收'],
                            characteristic: ['(顶尖名校教授和行业大厂专家进行科研指导)', '全程安排硕博导师辅导学员参与教授和专家的项目']
                        },
                        'Write': {
                            step: ['7.论文写作'],
                            characteristic: ['(知名期刊主编进行论文指导)', '全程安排论文导师辅导学员进行论文写作和投稿']
                        },
                        PageIntroduction: [0, 1, 2]
                    },
                    'proName': ['项目周期', 'Project cycle'],
                }]
            },
            {
                proName: 'RI-B标准版',
                proImgUrl: "",
                pages: [{
                    'proIntroduce': ["“金衣计划”是纪元教育公司2023年推出的科研实习项目，提供全方位的科研实践和实习经验。学生通过RI-A和RI-B两种模式参与教授和行业大厂专家的项目，并得到硕士和博士导师的辅助。学生通过该计划获得研究经验和论文写作技能，为未来学术和职业发展打下坚实基础。"],
                    'pro_item': [{
                        t1: '真正的科研项目',
                        t2: '(依据高校研究生科研教育的培养方案)'
                    }, {
                        t1: '科研和实习',
                        t2: '(同时收获科研经历和实习经历)'
                    }, {
                        t1: '业界大佬指点',
                        t2: '(顶尖名校教授、行业大厂专家、知名期刊主编)'
                    }, {
                        t1: '背景提升',
                        t2: '(丰富个人简历和背景，收获申请院校的offer )'
                    }, {
                        t1: '真正的科研项目',
                        t2: '(依据高校研究生科研教育的培养方案)'
                    }, {
                        t1: '综合素质提升',
                        t2: '(培养探索问题和解决问题能力)'
                    }],
                    'proName': ['项目介绍', 'Project introduction'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-youxiang',
                        color: '#fd9946',
                        content: '名校教授推荐信',
                        other: ''

                    }, {
                        iconfont: 'icon-xuekefenxi',
                        color: '#00eec4',
                        content: "论文发表 ",
                        other: ''
                    }, {
                        iconfont: 'icon-yuanxiaodashuju',
                        color: '#55bcfe',
                        content: '实习证明',
                        other: ''
                    }, {
                        iconfont: 'icon-xiangmu2',
                        color: '#fcd82e',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyiguanli',
                        color: '#ff5678',
                        content: 'EI级学术会议',
                        other: ''
                    }, {
                        iconfont: 'icon-zhengce2',
                        color: '#5396ff',
                        content: '学术计划书',
                        other: ''
                    }, {
                        iconfont: 'icon-renzheng2',
                        color: '#fca603',
                        content: '项目参与证书',
                        other: ''
                    }, {
                        iconfont: 'icon-zhishi',
                        color: '#05c4a3',
                        content: '科研和实习经历'
                    }, {
                        iconfont: 'icon-chengguo2',
                        color: '#feab38',
                        content: '个人实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project harvest'],
                }, {
                    'proPeriod': {
                        'proImgUrl': "",
                        'Alltime': '12',
                        'ResearchTime': '9',
                        'WriteTime': '3',
                        'Research': {
                            step: ['1.项目准备', '2.开题汇报', '3.前期研究', '4.中期考核', '5.后期研究', '6.结题验收'],
                            characteristic: ['(顶尖名校教授和行业大厂专家进行科研指导)', '全程安排硕博导师辅导学员参与教授和专家的项目']
                        },
                        'Write': {
                            step: ['7.论文写作'],
                            characteristic: ['(知名期刊主编进行论文指导)', '全程安排论文导师辅导学员进行论文写作和投稿']
                        },
                        PageIntroduction: [0, 1, 2]
                    },
                    'proName': ['项目周期', 'Project cycle'],
                }]
            },
        ],
        currentPage: 0,
        top_currentPage: 0,
        bottom_currentPage: 0,
    },


    /**
     * 生命周期函数--监听页面加载
     */
    // onLoad(options) {
    //     var that = this;
    //     for (let i = 0; i < this.data.category1.length; i++) {
    //         wx.showLoading({
    //             title: '加载中',
    //         })
    //         wx.getImageInfo({
    //             // 测试地址
    //             src: `https://eralab.oss-cn-guangzhou.aliyuncs.com/static/logo.jpg`,
    //             // 上线地址
    //             // src: ImgUrls + `/image/index/bg${i}.svg`,
    //             success: function (res) {
    //                 console.log('成功',res);
    //                 that.data.category1[i].proImgUrl = res.path
    //                 wx.hideLoading();
    //             },
    //             fail: function (res) {
    //                 wx.hideLoading();
    //                 wx.showModal({
    //                     title: '获取资源失败',
    //                     content: '是否确认重新进入小程序？',
    //                     success(res) {
    //                       if (res.confirm) {
    //                         wx.reLaunch({
    //                           url: '/pages/index_scroll/index_scroll'
    //                         })
    //                       }
    //                     }
    //                   })
    //             }
    //         })
    //         for (let j = 0; j < this.data.category1[i].pages.length; j++) {
    //             if (this.data.category1[i].pages[j].proPeriod != undefined) {
    //                 wx.getImageInfo({
    //                     // 测试
    //                     // src: ImgUrls + `/image/index/period${i}.svg`,
    //                     // 发布
    //                     src: `https://eralab.oss-cn-guangzhou.aliyuncs.com/static/logo.jpg`,
    //                     success: function (res) {
    //                         that.data.category1[i].pages[j].proPeriod.proImgUrl =res.path;
    //                     },
    //                     // fail: function (res) {
    //                     //     wx.hideLoading();
    //                     //     wx.showToast({
    //                     //         title: '资源请求失败,请重新进入小程序',
    //                     //         icon: 'none',
    //                     //         duration: 2000
    //                     //     })
    //                     // }
    //                 })
    //             }
    //         }
    //     }
    // },


    // 底部页面滚动

    onLoad(optios) {
        const urls = [
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/bg1.svg',
            'https://eralab.oss-cn-guangzhou.aliyuncs.com/static/period1.svg',
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


    bottomPageChange(e) {
        this.setData({
            bottom_currentPage: e.detail.current
        })

    },
    //底部页面左右滚动
    bottomSwiperChange(e) {
        this.setData({
            top_currentPage: e.detail.current
        })
    },
    goToNextPage: function (e) {
        this.setData({
            currentPage: 1
        })
    },
    toTop() {
        this.setData({
            currentPage: 0
        })
    },
    choosePro(e) {
        this.setData({
            top_currentPage: e.currentTarget.dataset.choose
        })
    },
    choosePro1(e) {
        this.setData({
            top_currentPage: e.detail.current
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

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