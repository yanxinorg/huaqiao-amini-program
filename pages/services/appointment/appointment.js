Page({
  data: {
    tabs: [
      // { title: '全部科室', anchor: 'a' },
      { title: '内科', anchor: 'b' },
      { title: '骨科', anchor: 'c' },
      { title: '消化科', anchor: 'd' },
      { title: '神经科', anchor: 'e' },
      { title: '心脑血管', anchor: 'f' },
      { title: '妇科', anchor: 'g' },
      { title: '皮肤科', anchor: 'h' },
      { title: '五官科', anchor: 'i' },
      { title: '肿瘤科', anchor: 'j' },
      { title: '呼吸科', anchor: 'k' }
    ],
    items: [
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
  },
  onLoad() { },
  onItemClick(evt) {
    console.log(`当前科室号：${evt.target.dataset.apartment}`);
    console.log(`点击了第${evt.index}行`);
    my.navigateTo({
      url: '/pages/detail/doctor/doctor'
    });
  }
});
