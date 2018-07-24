var App = getApp();

Page({

    data: {
		imgUrls:['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
				'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
				'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'],
		cases:[
			"全部案例","开发类","设计类","市场&运营类","产品类"
		],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
		x:0,
		activity:0,
		width: 100,
		caseSlideHeight:'400px',
		currentCase:0,
		animation:{},
		pageY:0,  //记录点击开始的屏幕Y坐标
    },

	casesSlideChange:function(event){
		const idx = event.detail.current;
		const that = this;
		const width = this.data.width;
		if (idx < this.activity){
			this.setData({
				activity: idx,
				x : (width * idx)
			});
		} else {
			this.setData({
				activity: idx,
				x: -(width * idx)
			});
		}
	},
	imageLoad:function(e){
		const imageWidth = e.detail.width;
		const imageHeight = e.detail.height;
		const factImageWidth = wx.getSystemInfoSync().windowWidth;
		const windownHeight = wx.getSystemInfoSync().windowHeight;
		const factImageHeight = factImageWidth / imageWidth * imageHeight;
		this.setData({
			factImageHeight : factImageHeight,
			caseSlideHeight: windownHeight - factImageHeight
		});
	},

	switchCase: function (event)
	{
		const width = this.data.width;
		const distanceX = event.detail.x;
		const index = event.currentTarget.dataset.index;
		if (distanceX < width) {
			this.setData({
				activity:index,
				x: width,
				currentCase:index
			});
		} else {
			this.setData({
				activity: index,
				x: - width * index,
				currentCase: index
			});
		}
	},

	caseDetail:function(){
		wx.showModal({
			title: '油麦菜',
			content: '精彩内容，敬请期待',
		})
	},

	touchMove:function(e){
		if (e.touches[0].pageY - this.data.pageY < -10) {
			var animation = wx.createAnimation({
				duration: 300,
				timingFunction: 'ease',
			})
			this.animation = animation;
			animation.translateY(-this.data.factImageHeight).step();
			this.setData({
				caseSlideHeight: wx.getSystemInfoSync().windowHeight
			});
			this.setData({
				animationData: animation.export()
			})
		}
	},

	touchStart:function(e){
		this.data.pageY = e.touches[0].pageY; 
	},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
		const that = this;
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
		
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
		
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
		
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})