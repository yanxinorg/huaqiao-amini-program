Page({
  data: {
    showPopupTop: false,
    name: '杨春华',
    title: '主任医师',
    introduction: '杨春华，视网膜色素变性治疗中心主任，副主任医师，原国际眼科杂志编辑部理事，中华临床医学会理事，原铁道医学会理事，曾多次获铁道部先进工作者，优秀共产党员，三八红旗手等光荣称号。',
    tags: ['近视', '散光', '弱视', '远视', '斜视', '屈光不正']
  },
  onLoad() { },
  onTopShowPopup() {
    this.setData({
      showPopupTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showPopupTop: false,
    });
  },
});
