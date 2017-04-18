import BaseRequest from './base-request';
import APIConstant from './api-constant';

export default class APIInterface {

  static getVerifyCode(phone) {
    return BaseRequest.get(APIConstant.BASE_URL + '/user/getVerifyCode?phone=' + phone, {

    })
  }

  static register(username, password, code) {
    return BaseRequest.post(APIConstant.BASE_URL + '/user/register?'
      + 'username=' + username
      + '&password=' + password
      + '&code=' + code, {}, {})
  }
}
