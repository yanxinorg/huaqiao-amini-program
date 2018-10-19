Component({
  mixins: [],
  data: {
    message: '',
    timerId: 0,
    hasSent: false,
    countDownSeconds: 10,
    maxInputLength: 6
  },
  props: {
    mobile: '',
    btnSendText: '发送'
  },
  didMount() {
    console.log('========> didMount | mobile : ' + this.props.mobile)
    console.log(this.methods);
    console.log(this)
    if(this.props.mobile){
        
    }
  },
  didUpdate() {
    console.log('========> didUpdate')
  },
  didUnmount() {
    console.log('========> didUnmount')
  },
  methods: {
    /**
    * 校验输入的手机号码
    * @param phone
    * @returns {boolean}
    */
    checkMobileValidity(phone) {
      const reg = /^1[0-9]{10}$/;
      return reg.test(phone);
    },

    /**
     * 清空Timer
     */
    clearTimer() {
      clearInterval(this.data.timerId);
    },

    /**
     * 倒计时
     */
    countDown() {
      const that = this;

      this.clearTimer();
      this.data.timerId = setInterval(() => {
        console.log(that.data.countDownSeconds);
        that.data.countDownSeconds--;
        if (that.data.countDownSeconds <= 0) {
          that.clearTimer();
          that.setData({
            countDownSeconds: 10,
            hasSent: false,
            btnSendText: '重新发送'
          });
        } else {
          that.setData({
            btnSendText: `${that.data.countDownSeconds} 秒`
          });
        }
      }, 1000);
    },

    /**
    * 开始发送验证码
    */
    sendSms() {
      console.log('========> sendSms | phone ==> ', this.props.mobile)
      if (this.checkMobileValidity(this.props.mobile)) {
        this.setData({
          hasSent: true
        });
        this.countDown();
        // this.sendMessageSubscription = this.backbone
        //   .sendVerificationCode(this.phone)
        //   .subscribe(result => {
        //     // console.log(result);
        //     if (result.hasOwnProperty('requestId') && result.hasOwnProperty('bizId')) {
        //       this.countDown();
        //       this.requestId = result.requestId;
        //       this.bizId = result.bizId;
        //     }
        //   });
      } else {
        this.data.message = '请输入正确的手机号码';
        console.log(this.data.message);
      }
    }
  }

});
