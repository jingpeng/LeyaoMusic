export default class BaseRequest {

  // headers 比如 {'Accept': 'application/json', 'Content-Type': 'application/json'}
  // body 比如 {firstParam: 'yourValue', secondParam: 'yourOtherValue'}
  static get(url, headers) {
  	return fetch(url, {
      method: 'GET',
      headers: headers
    })
  }

  static post(url, headers, body) {
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    })
  }
}
