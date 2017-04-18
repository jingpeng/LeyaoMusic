export default class APIClient {

  static access(service) {

    let timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 15000, { message: '请求超时' })
    })

    let fetch = service.catch(error => {
      throw error;
    })

    return Promise.race([timeout, fetch]).then(response => {
      return response
    })
  }
}
