import BaseRequest from './base-request';
import APIConstant from './api-constant';

export default class APIInterface {

  static getCodeList() {
    return BaseRequest.post(APIConstant.BASE_URL + '/code/getCodeList', {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, {})
  }

  static getVerifyCode(phone) {
    return BaseRequest.get(APIConstant.BASE_URL + '/user/getVerifyCode?phone=' + phone, {

    })
  }

  static register(username, password, code) {
    return BaseRequest.post(APIConstant.BASE_URL + '/user/register', {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, {
      'username': username,
      'password': password,
      'code': code
    })
  }

  static login(username, password) {
    return BaseRequest.post(APIConstant.BASE_URL + '/user/login', {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, {
      'username': username,
      'password': password
    })
  }


  static upload(token, fileName, base64) {
    return BaseRequest.post(APIConstant.BASE_URL + '/file/upload', {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }, {
      'fileName': fileName,
      'base64': base64
    })
  }
}
