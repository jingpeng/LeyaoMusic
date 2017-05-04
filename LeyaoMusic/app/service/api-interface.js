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

  static updateUser(token, realname, pic, friends) {
    return BaseRequest.post(APIConstant.BASE_URL + '/user/updateUser', {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }, {
      'realname': realname,
      'pic': pic,
      'friends': friends
    })
  }

  static getNoticeList(token, numPerPage, pageNum) {
    return BaseRequest.post(APIConstant.BASE_URL + '/notice/getNoticeList', {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'token': token
    }, {
      'numPerPage': numPerPage,
      'pageNum': pageNum
    })
  }

  static details(token) {
    return BaseRequest.get(APIConstant.BASE_URL + '/user/details', {
      'token': token
    })
  }
}
