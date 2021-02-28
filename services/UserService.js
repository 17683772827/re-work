/*import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

class UserService {
  // obtain the userList
  getAll() {
    return http.get('/users')
  }

  // obtain a user given 'id'
  get(id) {
    return http.get(`/users/${id}`)
  }

  login(data) {
    return http.post('/user/login', data)
  }

  // create a user
  signup(data) {
    return http.post('/user/register?code=' + data.checkCode, {
      name: data.name,
      pass: data.pass,
      checkPass: data.checkPass,
      phone: data.phone
    })
  }

  // update a user with 'id'
  update(id, data) {
    return http.put(`/users/${id}`, data)
  }

  // delete a user with 'id'
  delete(id) {
    return http.delete(`/users/${id}`)
  }
}

export default new UserService()*/
