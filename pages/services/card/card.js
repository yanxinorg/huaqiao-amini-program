Page({
  data: {
    //  Steps: 步骤条
    activeIndex: 1,
    failIndex: 0,
    direction: 'vertical',
    items: [{
      title: '步骤1',
      description: '请输入就诊卡持有人的姓名，及登记时所填写的手机号码。',
    }, {
      title: '步骤2',
      description: '短信验证码将发送到所填写的手机上，请注意查收。',
    }, {
      title: '步骤3',
      description: '成功关联就诊卡。',
    }],
    //  手机号验证
    mobile: '',
    //  Message 结果页
    title: "成功关联就诊卡",
    subTitle: "新增就诊卡自动设置为默认卡，如需变更请点击我的就诊卡进行操作",
    messageButton: {
      mainButton: {
        buttonText: "我的就诊卡"
      },
      subButton: {
        buttonText: "返回"
      }
    },
    btnNextText: '下一步'
  },
  onLoad() { },
  bindKeyInput(evt) {
    this.data.mobile = evt.detail.value;
  },
  //  下一步
  next() {
    switch (this.data.activeIndex) {
      case 1:
        this.setData({
          mobile: this.data.mobile,
          activeIndex: 2
        });
        break;
      case 2:
      this.setData({
          activeIndex: 3
        });
        break;
      default:
        break;
    }
  },
  goBack() {
    my.navigateBack();
  }
});
