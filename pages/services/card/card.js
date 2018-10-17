Page({
  data: {
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
    //  Message 结果页
    title: "操作成功",
    subTitle: "内容详情可折行，建议不超过两行",
    messageButton: {
      mainButton: {
        buttonText: "主要操作"
      },
      subButton: {
        buttonText: "辅助操作"
      }
    }
  },
  onLoad() { },
  goBack() {
    my.navigateBack();
  }
});
