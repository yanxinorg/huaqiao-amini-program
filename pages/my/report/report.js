Page({
  data: {
    items: [],
    testData: [
      {
        title: '1',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '2',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '3',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '4',
        brief: '简介',
        extra: ''
      },
      {
        title: '5',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '6',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '7',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '8',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '9',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '10',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '11',
        brief: '简介',
        extra: '详细信息'
      },
      {
        title: '12',
        brief: '简介',
        extra: '详细信息'
      }
    ],
    displayDatePicker: 'none',
    displayProgress: 'none',
    displayList: 'block',
    startDate: '',
    endDate: '',
    isLoading: false,
    isDisabled: false
  },
  onLoad() { },
  /**  页面被拉到底部  */
  onReachBottom() {
    console.log('onReachBottom')
    const newItem = this.data.testData.slice(this.data.items.length, this.data.items.length + 1);
    if (newItem.length > 0) {
      this.setData({
        items: this.data.items.concat(newItem)
      })
    }
  },
  datepickerHandler(evt) {
    this.startDate = evt[0];
    this.endDate = evt[1];
    console.log(this.startDate);
    console.log(this.endDate);
    this.queryReport();
    this.toggleDatePicker();
  },
  /**  打开/关闭日期选择器  */
  toggleDatePicker() {
    this.setData({
      displayList: this.data.displayList === 'none' ? 'block' : 'none',
      displayDatePicker: this.data.displayDatePicker === 'none' ? 'block' : 'none'
    });
  },
  /**  选择缺省查询日期范畴  */
  selectDefaultDateRange(evt) {
    console.log(evt);
    console.log(new Date());
    this.queryReport();
    this.toggleDatePicker();
  },
  /**  查询报告单  */
  queryReport() {
    const that = this;
    //  清空数组
    this.data.items.splice(0, this.data.items.length);
    this.setData({
      isLoading: true,
      isDisabled: true,
      displayProgress: 'block',
      items: []
    });

    setTimeout(() => {
      that.setData({
        isLoading: false,
        isDisabled: false,
        displayProgress: 'none',
        items: that.data.testData.slice(0, 10)    //  测试数据取前10
      });
    }, 3000);
  },
  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index + 1}行`,
    });
  },
});
