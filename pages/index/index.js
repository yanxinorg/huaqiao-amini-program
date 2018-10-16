Page({
  data: {
    gridItems: [
      {
        icon: '../../images/grid_appointment.png',
        text: '门诊预约',
        desc: '',
        path: '/pages/services/appointment/appointment'
      },
      {
        icon: '../../images/grid_recharge.png',
        text: '门诊充值',
        desc: '',
        path: '/pages/services/recharge/recharge'
      },
      {
        icon: '../../images/grid_ahead.png',
        text: '住院预交',
        desc: '',
      },
      {
        icon: '../../images/grid_settle.png',
        text: '诊间结算',
        desc: '',
      },
      {
        icon: '../../images/grid_appointment_record.png',
        text: '预约记录',
        desc: '',
        path: '/pages/my/appointment/appointment'
      },
      {
        icon: '../../images/grid_bill.png',
        text: '账单记录',
        desc: '',
        path: '/pages/my/bill/bill'
      },
      {
        icon: '../../images/grid_balance.png',
        text: '我的余额',
        desc: '',
        path: '/pages/my/balance/balance'
      },
      {
        icon: '../../images/grid_report.png',
        text: '我的报告单',
        desc: '',
        path: '/pages/my/report/report'
      },
      {
        icon: '../../images/grid_member_card.png',
        text: '我的就诊卡',
        desc: '',
        path: '/pages/my/card/card'
      }
    ]
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '莆田华侨医院',
      desc: '莆田华侨医院为涵江区三大医院之一，是一所综合性二级乙等非营利性医院、莆田市医疗保险定点医院、新型农村合作医疗保险定点医院、城镇居民医疗保险定点医院、莆田市“120”、“110”联动单位。',
      path: 'pages/index/index',
    };
  },
  gotoHospitalNavigation() {
    my.navigateTo({
      url: '/pages/services/location/location'
    });
  },
  onGridItemClick(evt) {
    console.log(this.data.gridItems[evt.detail.index])
    if (this.data.gridItems[evt.detail.index].path) {
      my.navigateTo({
        url: this.data.gridItems[evt.detail.index].path
      });
    }
  }
});
