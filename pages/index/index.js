var App = getApp();

Page({

    data: {
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
		cases:[
			"全部案例","开发类","设计类","市场&运营类","产品类"
		],
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        duration: 1000,
		x:0,
		activity:0
    },

	switchCase: function (event)
	{
		const width = 100;
		const distanceX = event.detail.x;
		const index = event.currentTarget.dataset.index;
		if (distanceX < width) {
			this.setData({
				activity:index,
				x: width
			});
		} else {
			this.setData({
				activity: index,
				x: - width * index
			});
		}
		
	},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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