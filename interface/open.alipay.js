import Promise from '../library/es6-promise.js';

/** 封装小程序提供的API，使其支持Promise */
function Promisify(fn) {
    return function (options = {}) {
        return new Promise((resolve, reject) => {
            options.success = function (result) {
                resolve(result);
            }
            options.fail = function (reason) {
                reject(reason);
            }
            fn(options);
        });
    }
}

/** 用户授权 */
function getAuthCode(scopes) {
    return Promisify(my.getAuthCode)({
        scopes: scopes || 'auth_base'
    });
}

/** 客户端获取会员信息 */
function getAuthUserInfo() {
    return Promisify(my.getAuthUserInfo)();
}

/** 
 *   小程序唤起支付 
 *      tradeNO	String	条件	接入小程序支付时传入此参数。此参数为支付宝交易号
 *   success 返回值
 *      resultCode 支付状态码说明：
 *      9000	订单支付成功
 *      8000	正在处理中
 *      4000	订单支付失败
 *      6001	用户中途取消
 *      6002	网络连接出错
 *      6004	支付结果未知（有可能已经支付成功），请查询商户订单列表中订单的支付状态
 *      99	    用户点击忘记密码导致快捷界面退出(only iOS)
*/
function tradePay(tradeNO) {
    return Promisify(my.tradePay)({
        tradeNO: tradeNO
    })
}

/** 
 *   支付代扣签约 
 *      signStr	String	是	签约字符串
 *   错误码
 *      7000	协议签约成功
 *      7001	签约结果未知（有可能已经签约成功），请根据外部签约号查询签约状态
 *      7002	协议签约失败
 *      6001	用户中途取消
 *      6002	网络连接出错
*/
function paySignCenter(signStr) {
    return Promisify(my.paySignCenter)({
        signStr: signStr
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                            交互反馈                                            /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** alert 警告框 */
function alert(title, content, buttonText) {
    return Promisify(my.alert)({
        title: title,
        content: content,
        buttonText: buttonText
    })
}

/** confirm 确认框 */
function confirm(title, content, confirmButtonText, cancelButtonText) {
    return Promisify(my.confirm)({
        title: title,
        content: content,
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText
    })
}

/** prompt 提示框 */
function prompt(title, content, placeholder, okButtonText, cancelButtonText) {
    return Promisify(my.prompt)({
        title: title,
        content: content,
        placeholder: placeholder,
        okButtonText: okButtonText,
        cancelButtonText: cancelButtonText
    })
}

/** 显示一个弱提示，可选择多少秒之后消失。 */
function showToast(type, content, duration) {
    return Promisify(my.showToast)({
        type: type,         //  toast 类型，展示相应图标，默认 none，支持 success / fail / exception / none’。其中 exception 类型必须传文字信息
        content: content,
        duration: duration,
    })
}

/** 显示加载提示 */
function showLoading(content, delay) {
    return Promisify(my.showLoading)({
        content: content,
        delay: delay,
    })
}

/** 隐藏加载提示 */
function hideLoading(page) {
    return Promisify(my.hideLoading)({
        page: page
    })
}

/** 显示导航栏 loading */
function showNavigationBarLoading() {
    return Promisify(my.showNavigationBarLoading)()
}

/** 隐藏导航栏 loading */
function hideNavigationBarLoading() {
    return Promisify(my.hideNavigationBarLoading)()
}

/** 显示操作菜单 */
function showActionSheet(title, items, badges, cancelButtonText) {
    return Promisify(my.showActionSheet)({
        title: title,
        items: items,
        badges: badges,
        cancelButtonText: cancelButtonText
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                联系人                                          /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 选择本地系统通信录中某个联系人的电话 */
function choosePhoneContact() {
    return Promisify(my.choosePhoneContact)()
}

/** 唤起支付宝通讯录，选择一个或者多个支付宝联系人  */
function chooseAlipayContact(count) {
    return Promisify(my.chooseAlipayContact)({
        count: count        //  count	Number	否	单次最多选择联系人个数，默认 1，最大 10
    })
}

/** 唤起选人组件，默认只包含支付宝联系人，可以通过修改参数包含手机通讯录联系人或者双向通讯录联系人  */
function chooseContact(chooseType, includeMe, includeMobileContactMode, multiChooseMax, multiChooseMaxTips) {
    return Promisify(my.chooseContact)({
        chooseType: chooseType || 'single',        // 选择类型，值为single（单选）或者 multi（多选）
        //  包含手机通讯录联系人的模式：默认为不包含（none）
        //  或者仅仅包含双向通讯录联系人（known）
        //  或者包含手机通讯录联系人（all）
        includeMobileContactMode: includeMobileContactMode || 'known',
        includeMe: includeMe,                       //  是否包含自己
        multiChooseMax: multiChooseMax || 1,        //  最大选择人数，仅 chooseType 为 multi 时才有效
        multiChooseMaxTips: multiChooseMaxTips      //  多选达到上限的文案，仅 chooseType 为 multi 时才有效
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                选择城市                                        /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 打开城市选择列表  */
function chooseCity(showLocatedCity, showHotCities, cities, hotCities) {
    return Promisify(my.chooseCity)({
        showLocatedCity: showLocatedCity,           //  是否显示当前定位城市，默认 false
        showHotCities: showHotCities,               //  是否显示热门城市，默认 true
        cities: cities || [],                       //  自定义城市列表
        hotCities: hotCities || []                  //  自定义热门城市列表
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                选择城市                                        /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/**
  *     打开日期选择列表  
  *  返回的日期格式
  *     yyyy-MM-dd（默认）
  *     HH:mm
  *     yyyy-MM-dd HH:mm
  *     yyyy-MM （最低基础库：1.1.1, 可用 canIUse('datePicker.object.format.yyyy-MM') 判断）
  *     yyyy （最低基础库：1.1.1,可用 canIUse('datePicker.object.format.yyyy') 判断） 
  */
function datePicker(format, currentDate, startDate, endDate) {
    return Promisify(my.datePicker)({
        format: format || 'yyyy-MM-dd',
        currentDate: currentDate,
        startDate: startDate,
        endDate: endDate
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     滚动                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 滚动到页面的目标位置  */
function pageScrollTo(scrollTop) {
    return Promisify(my.pageScrollTo)({
        scrollTop: scrollTop
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     图片                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 拍照或从手机相册中选择图片  */
function chooseImage(count, sourceType) {
    return Promisify(my.chooseImage)({
        count: count,           //          最大可选照片数，默认1张
        sourceType: sourceType  //          相册选取或者拍照，默认 [‘camera’,‘album’]
    })
}

/** 预览图片  */
function previewImage(urls, current) {
    return Promisify(my.previewImage)({
        urls: urls,             //	        要预览的图片链接列表
        current: current        //          当前显示图片索引，默认 0
    })
}

/** 保存在线图片到手机相册  */
function saveImage(url) {
    return Promisify(my.saveImage)({
        url: url                //	        要预览的图片链接列表
    })
}

/** 压缩图片 */
function compressImage(apFilePaths, compressLevel) {
    return Promisify(my.compressImage)({
        apFilePaths: apFilePaths,               //	        要压缩的图片地址数组
        compressLevel: compressLevel            //          压缩级别，支持 0 ~ 4 的整数，默认 4
    })
}

/** 获取图片信息 */
function getImageInfo(src) {
    return Promisify(my.getImageInfo)({
        src: src
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     缓存                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的数据 */
function setStorage(key, data) {
    return Promisify(my.setStorage)({
        key: key,
        data: data
    })
}

/** 获取缓存数据 */
function getStorage(key) {
    return Promisify(my.getStorage)({
        key: key
    })
}

/** 删除缓存数据 */
function removeStorage(key) {
    return Promisify(my.removeStorage)({
        key: key
    })
}

/** 清除本地数据缓存 */
function clearStorage() {
    return Promisify(my.clearStorage)()
}

/** 获取当前storage的相关信息 */
function getStorageInfo() {
    return Promisify(my.getStorageInfo)()
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     网络                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////

/** 向指定服务器发起一个跨域 http 请求 */
function httpRequest(url, method, data, dataType) {
    return Promisify(my.httpRequest)({
        url: url,
        method: method,
        data: data || {},
        dataType: dataType || 'json'
    })
}

/** 上传本地资源到开发者服务器 */
function uploadFile(url, fileType, fileName, filePath) {
    return Promisify(my.uploadFile)({
        url: url,
        fileType: fileType || 'image',
        fileName: fileName,
        filePath: filePath
    })
}

/** 下载文件资源到本地 */
function downloadFile(url) {
    return Promisify(my.downloadFile)({
        url: url
    })
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     位置                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////
/** 获取用户当前的地理位置信息 */
function getLocation(type, cacheTimeout) {
    return Promisify(my.getLocation)({
        type: type,
        cacheTimeout: cacheTimeout
    })
}

/** 使用支付宝内置地图查看位置 */
function openLocation(longitude, latitude, name, address) {
    return Promisify(my.openLocation)({
        longitude: longitude,
        latitude: latitude,
        name: name,
        address: address
    })
}

/** 使用支付宝内置地图选择地理位置 */
function chooseLocation() {
    return Promisify(my.chooseLocation)()
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////                                     设备                                       /////////
////////////////////////////////////////////////////////////////////////////////////////////////
/** 获取系统信息 */
function getSystemInfo() {
    return Promisify(my.getSystemInfo)()
}

/** 拨打电话 */
function makePhoneCall(phoneNumber) {
    return Promisify(my.makePhoneCall)({
        number: phoneNumber
    })
}

/** 获取当前网络状态 */
//  networkAvailable	Boolean	网络是否可用
//  networkType	String	网络类型值 UNKNOWN / NOTREACHABLE / WIFI / 3G / 2G / 4G / WWAN
function getNetworkType() {
    return Promisify(my.getNetworkType)()
}

/** 获取当前服务器时间的毫秒数 */
function getServerTime() {
    return Promisify(my.getServerTime)()
}

/** 设置是否保持屏幕长亮状态。仅在当前小程序生效，离开小程序后失效 */
function setKeepScreenOn(keepScreenOn) {
    return Promisify(my.setKeepScreenOn)({
        keepScreenOn: keepScreenOn
    })
}

/** 获取屏幕亮度 */
function getScreenBrightness() {
    return Promisify(my.getScreenBrightness)()
}

/** 设置屏幕亮度 */
function setScreenBrightness(brightness) {
    return Promisify(my.setScreenBrightness)({
        brightness: brightness
    })
}

/** 获取剪贴板数据 */
function getClipboard() {
    return Promisify(my.getClipboard)()
}

/** 设置剪贴板数据 */
function setClipboard(text) {
    return Promisify(my.setClipboard)({
        text: text
    })
}

module.exports = {
    getAuthCode: getAuthCode,
    getAuthUserInfo: getAuthUserInfo,
    tradePay: tradePay,
    paySignCenter: paySignCenter,
    alert: alert,
    confirm: confirm,
    prompt: prompt,
    showToast: showToast,
    showLoading: showLoading,
    hideLoading: hideLoading,
    showNavigationBarLoading: showNavigationBarLoading,
    hideNavigationBarLoading: hideNavigationBarLoading,
    showActionSheet: showActionSheet,
    choosePhoneContact: choosePhoneContact,
    chooseAlipayContact: chooseAlipayContact,
    chooseContact: chooseContact,
    chooseCity: chooseCity,
    datePicker: datePicker,
    pageScrollTo: pageScrollTo,
    chooseImage: chooseImage,
    previewImage: previewImage,
    saveImage: saveImage,
    compressImage: compressImage,
    getImageInfo: getImageInfo,
    setStorage: setStorage,
    getStorage: getStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getStorageInfo: getStorageInfo,
    httpRequest: httpRequest,
    uploadFile: uploadFile,
    downloadFile: downloadFile,
    getLocation: getLocation,
    openLocation: openLocation,
    chooseLocation: chooseLocation,
    getSystemInfo: getSystemInfo,
    makePhoneCall: makePhoneCall,
    getNetworkType: getNetworkType,
    getServerTime: getServerTime,
    setKeepScreenOn: setKeepScreenOn,
    getScreenBrightness: getScreenBrightness,
    setScreenBrightness: setScreenBrightness,
    getClipboard: getClipboard,
    setClipboard: setClipboard
}