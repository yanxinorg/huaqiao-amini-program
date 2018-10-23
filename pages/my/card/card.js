import __OPEN_ALIPAY__ from '../../../interface/open.alipay';

Page({
	data: {
		nickName: '',
		avatar: '',
		cardList: [
			{
				name: '李云鹏',
				id: 'B874869823465'
			},
			{
				name: '滕蓉',
				id: 'B874861483465'
			}
		]
	},
	onLoad() {
		var that = this;

		__OPEN_ALIPAY__
			.getAuthCode('auth_user')
			.then(__OPEN_ALIPAY__.getAuthUserInfo)
			.then(res => {
				console.log(res);
				that.setData({
					nickName: res.nickName,
					avatar: res.avatar
				});
			})
			.catch(error => {
				console.error(error)
				throw error;
			})
	},
	bindCard() {
		my.navigateTo({
			url: '/pages/services/card/card'
		});
	}
});
