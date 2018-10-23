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

function getAuthCode(scopes) {
    return Promisify(my.getAuthCode)({
        scopes: scopes || 'auth_base'
    });
}

function getAuthUserInfo() {
    return Promisify(my.getAuthUserInfo)();
}

module.exports = {
    getAuthCode: getAuthCode,
    getAuthUserInfo: getAuthUserInfo
}