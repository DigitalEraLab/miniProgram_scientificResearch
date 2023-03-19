// pages/index_scroll/index_scroll.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        category1: [
            {
                proName: 'A项目',
                pages: [{
                    'proIntroduce': ['目前，【銥计划】科研实习项目独一无二地根据高校研究生科研教育的培养标准和流程，制定学员参加名校教授科研项目的培养方案，让学员参与到真正的科研当中去，提前收获同等高校研究生科研教育的培养和锻炼。'],
                    'pro_item':[{
                        t1:'真正的科研项目',
                        t2:'(依据高校研究生科研教育的培养方案)'
                    },{
                        t1:'科研和实习',
                        t2:'(同时收获科研经历和实习经历)' 
                    },{
                        t1:'业界大佬指点',
                        t2:'(顶尖名校教授、行业大厂专家、知名期刊主编)' 
                    },{
                        t1:'背景提升',
                        t2:'(丰富个人简历和背景，收获申请院校的offer )' 
                    },{
                        t1:'真正的科研项目',
                        t2:'(依据高校研究生科研教育的培养方案)' 
                    },{
                        t1:'综合素质提升',
                        t2:'(培养探索问题和解决问题能力)' 
                    }],
                    'proName': ['项目介绍', 'Project introduction'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-professor',
                        content: '名校教授网申推荐信(定制化)'
                    }, {
                        iconfont: 'icon-lunwentimu',
                        content: '论文发表(E/CPCI/IEEE及以上)'
                    }, {
                        iconfont: 'icon-jiaoyu- ',
                        content: '实习证明(三个月以上)'
                    }, {
                        iconfont: 'icon-chengjidan ',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyi',
                        content: 'EI级学术会议(参会资格和证明)'
                    }, {
                        iconfont: 'icon-jihuashu',
                        content: '个人学术研究计划书(Research Proposal)'
                    }, {
                        iconfont: 'icon-zhengshu',
                        content: '项目参与证书(定制化)'
                    },  {
                        iconfont: 'icon-wodexuesheng',
                        content: '真正完整的科研经历和实习经历'
                    },  {
                        iconfont: 'icon-jiangbei',
                        content: '个人素质软实力和背景实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project harvest'],
                }, {
                    'proPeriod': {
                        'Alltime': '16',
                        'ResearchTime': '12',
                        'WriteTime': '4',
                        'Research': ['项目准备：3周（名校科研教授）', '开题汇报：1周（名校科研教授）', '前期研究：3周（名校科研教授+大厂行业专家）', '中期考核：1周（名校科研教授）', '后期研究：3周（名校科研教授+大厂行业专家）', '结题验收：1周（名校科研教授）','全程安排硕博导师辅助学员参与教授和专家的项目'],
                        'Write': ['论文写作：4周（知名期刊主编）','全程安排论文导师辅助学员进行学术论文写作和投稿'],
                        PageIntroduction: [0, 1, 2]
                    },
                    'proName': ['项目周期', 'Project cycle'],
                }]
            },
            {
                proName: 'B项目',
                pages: [{
                    'proIntroduce': ['目前，【銥计划】科研实习项目独一无二地根据高校研究生科研教育的培养标准和流程，制定学员参加名校教授科研项目的培养方案，让学员参与到真正的科研当中去，提前收获同等高校研究生科研教育的培养和锻炼。'],
                    'pro_item':[{
                        t1:'真正的科研项目',
                        t2:'(依据高校研究生科研教育的培养方案)'
                    },{
                        t1:'科研和实习',
                        t2:'(同时收获科研经历和实习经历)' 
                    },{
                        t1:'业界大佬指点',
                        t2:'(顶尖名校教授、行业大厂专家、知名期刊主编)' 
                    },{
                        t1:'背景提升',
                        t2:'(丰富个人简历和背景，收获申请院校的offer )' 
                    },{
                        t1:'真正的科研项目',
                        t2:'(依据高校研究生科研教育的培养方案)' 
                    },{
                        t1:'综合素质提升',
                        t2:'(培养探索问题和解决问题能力)' 
                    }],
                    'proName': ['项目介绍', 'Project introduction'],
                }, {
                    'harvest': [{
                        iconfont: 'icon-professor',
                        content: '名校教授网申推荐信(定制化)'
                    }, {
                        iconfont: 'icon-lunwentimu',
                        content: '论文发表(E/CPCI/IEEE及以上)'
                    }, {
                        iconfont: 'icon-jiaoyu- ',
                        content: '实习证明(三个月以上)'
                    }, {
                        iconfont: 'icon-chengjidan ',
                        content: '项目成绩单'
                    }, {
                        iconfont: 'icon-huiyi',
                        content: 'EI级学术会议(参会资格和证明)'
                    }, {
                        iconfont: 'icon-jihuashu',
                        content: '个人学术研究计划书(Research Proposal)'
                    }, {
                        iconfont: 'icon-zhengshu',
                        content: '项目参与证书(定制化)'
                    },  {
                        iconfont: 'icon-wodexuesheng',
                        content: '真正完整的科研经历和实习经历'
                    },  {
                        iconfont: 'icon-jiangbei',
                        content: '个人素质软实力和背景实力提升'
                    }, ],
                    'proName': ['项目收获', 'Project harvest'],
                }, {
                    'proPeriod': {
                        'Alltime': '12',
                        'ResearchTime': '8',
                        'WriteTime': '4',
                        'Research': ['项目准备：3周（名校科研教授）', '开题汇报：1周（名校科研教授）', '前期研究：3周（名校科研教授+大厂行业专家）', '中期考核：1周（名校科研教授）', '后期研究：3周（名校科研教授+大厂行业专家）', '结题验收：1周（名校科研教授）','全程安排硕博导师辅助学员参与教授和专家的项目'],
                        'Write': ['论文写作：4周（知名期刊主编）','全程安排论文导师辅助学员进行学术论文写作和投稿'],
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
    // 底部页面滚动
    bottomPageChange(e) {
        console.log(e.detail.current);
        this.setData({
            bottom_currentPage: e.detail.current
        })
    },
    goToNextPage: function (e) {
        console.log(e);
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
        console.log(e);
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