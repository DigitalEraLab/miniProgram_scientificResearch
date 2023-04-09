// pages/courseDetail/courseDetail.js
var app = getApp();
var urls = app.globalData.Testurl
const imgurl = "https://eralab.oss-cn-guangzhou.aliyuncs.com"
Page({
    /**
     * 页面的初始数据
     */
    data: {
        showIntro:false,
        showmore:null,
        id:'',
        type:"",
        name:"人工智能",
        enName: "System Security, Information Security",
        courseIntro:" 全球市场环境波云诡谲、变幻莫测。如何透过错综复杂的商业信息，把握企业的真实情况，完成投资等重大决策，已经成为决策者面临且吸需解不同类型的经济决策需要不同的决的实际问题。数据支撑。课程涵盖财务会计、管理学以及工程经济学的基础知识。学生将通过系统化学习.上述领域知识培养商业分析思维，借助案例提升解决实际问题。全球市场环境波云诡谲、变幻莫测。如何透过错综复杂的商业信息，把握企业的真实情况，完成投资等重大决策，已经成为决策者面临且吸需解不同类型的经济决策需要不同的决的实际问题。数据支撑。课程涵盖财务会计、管理学以及工程经济学的基础知识。学生将通过系统化学习.上述领域知识培养商业分析思维，借助案例提升解决实际问题。",
        researchPoints:[],
        teacher:[{
            name:'xxx教授',
            img:'',
            detail:'xxx大学xxx系专业教授'
        },{
            name:'xxx教授',
            img:'',
            detail:'xxx大学xxx系专业教授'
        },{
            name:'xxx教授',
            img:'',
            detail:'xxx大学xxx系专业教授'
        }],
        outline:[{title:'项目准备',content:'3周'},{title:'开题汇报',content:'1周'},{title:'前期研究',content:'2~3周'},{title:'中期考核',content:'1周'},{title:'后期研究',content:'1周'},{title:'接替验收',content:'1周'},{title:'论文写作',content:'3~4周'}],
        team:[
            {img:imgurl+'/static/清华.svg',name:'苏里联邦理工大学'},
            {img:imgurl+'/static/字节.svg',name:'苏里联邦理工大学'}
        ],
        Suitable:[],
        experience:[{
            txt:"说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑",
            offers:[{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"   学员录取通知书",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"  学员录取通知书"
            }],
            name:'x同学',
            school:'莱斯大学',
            head_img:'',
        },
        {
            txt:"说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑",
            offers:[{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"   学员录取通知书",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"  学员录取通知书"
            }],
            name:'x同学',
            school:'莱斯大学',
            head_img:'',
        },
        {
            txt:"说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑",
            offers:[{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"   学员录取通知书",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"   学员录取通知书"
            },{
                img:"",
                intro:"  学员录取通知书"
            }],
            name:'x同学',
            school:'莱斯大学',
            head_img:'',
        },
    
    ],
    },
    // 展开  课程介绍
    showIntro(){
        this.setData({
            showIntro:!this.data.showIntro
        })
    },
    // 折叠内容   学员故事
    fold(e){
        this.setData({
            showmore:null
        })

    },
    // 点击查看更多学员故事
    showMore(e){
        let index=e.currentTarget.dataset.showmore
        console.log('点解了',e.currentTarget.dataset.showmore);
        this.setData({
            showmore:index,
            txt:'说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑说实话参加了[金衣计划]我才对学术论文有了系统的了解，期刊主编站在他们的角度告诉我们什么样的论文是优秀的论文,这让我在以后的论文写作中能够更有针对性的着重优化一些内容，论文结构也更有逻辑'
        })
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
    // 图片加载完毕
    imgLoad(){
        wx.hideLoading()
    },
    // 通过id获取课程详情
    getCourseDetail(){
        const that=this;
        console.log('当前id',that.data.id);
        wx.request({
            url:urls+ '/course/listCourseDetail',
            // header:{
            //     'Authorization': 'Bearer' + ' '+'本地token',
            // },
            data:{
              courseId:that.data.id
            },
            success:function(res){
                console.log('课程详情',res);
                const res1=res.data.data
                that.setData({
                    name:res1.CourseDetail.name,
                    enName:res1.CourseDetail.enName,
                    courseIntro:res1.CourseDetail.introduction,
                    teacher:res1.ProfList
                })
            }
          })
    },
    // 切换swiper高度自适应
    swiperChange(e){
        console.log(e.detail.current);
        let index=e.detail.current;
        let that=this
        const query = wx.createSelectorQuery();
        query.select(`.research_swiper_${index}`).boundingClientRect(function (rect) {
            that.setData({
                itemsHeight:rect.height
            })
        }).exec();
    },
    // 页面加载时获取第一个swiper的高度
    swiperHeight(){
        let that=this
        const query = wx.createSelectorQuery();
        query.select(`.research_swiper_0`).boundingClientRect(function (rect) {
            that.setData({
                itemsHeight:rect.height
            })
        }).exec(); 
    },

    onLoad(options) {
        console.log('传过来的id',options);
        this.setData({
            type:options.type,
            id:options.id,
        })
//     this.setData({
//         Suitable:['适合对教育学领域和科研有浓厚兴趣和强烈愿望的本科生。','本项目不需要先修课程，但建议学生有一定的研究方法和数据分析基础，如统计学、SPSS等。','要求学生具备良好的自我学习和管理能力，能够独立完成项目的设计和实施。','适合在国际领域发展的学生，尤其是有海外留学申请计划的学生。'],
//         researchPoints:[{
//             title:'探索数学的本质与应用:',
//             content:"本课程将深入探讨数学基础及其应用，结合数学现实问题进行实际研究，为学员提供数学与实践双重启迪。通过理论与实践的结合，深入探索数学的本质与应用。"
//         },
//         {
//             title:'研究数学与实际问题的结合:',
//             content:"本课程的亮点在于将数学与应用结合，探索其在实际问题中的应用，让学员真正领会数学的实际价值。通过研究数学与实际问题的结合，拓展学员的科学思维与创新能力。"
//         },{
//             title:'涵盖多个数学领域与应用:',
//             content:"本课程将涵盖高等数学、微积分、线性代数、偏微分方程等数学领域，以及其在生物学、物理学、工程学等实际应用中的探索与研究。学员将可以了解到数学在不同领域中的应用。"
//         },{
//             title:'提高科学思维与创新能力:',
//             content:"通过理论与实践的结合，深入探索数学的本质与应用，拓展学员的科学思维与创新能力，让学员能够在数学领域中获得更大的成功。"
//         },{
//             title:'开拓学术视野与知识面:',
//             content:"本课程将拓展学员的知识面和学术视野，掌握最新的数学研究技术和应用方向，为学员的未来发展提供更广阔的空间和更多的机会。"
//         }
    
//     ],
//     itemsHeight:100
// });
    //   wx.showLoading({
    //     title: '加载中',
    //   })
      this.getCourseDetail();
    },


    updateSwiperHeight: function() {
        // 获取swiper组件实例
        const swiper = this.selectComponent('.research_swiper');
        // 调用swiper组件的更新高度方法
        swiper.updateAutoHeight();
      },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        this.swiperHeight();
        // let that=this;
        // wx.getStorage({
        //     key:'token',
        //     success(res){
        // wx.request({
        //     url:urls+ '/course/listCourseDetail',
        //     header:{
        //         'Authorization': 'Bearer' + ' '+res.data,
        //     },
        //     data:{
        //       courseId:that.data.id
        //     },
        //     success:function(res){
        //         console.log('课程详情',res);
        //     }
        //   })
        //     }
        // })
        


       
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