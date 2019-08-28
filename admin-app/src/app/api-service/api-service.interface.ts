export interface User {
  name: string,
  password: string,
  email: string,
  address: {
    city: string,
    country: string
  }
}

export interface UserApiService {
  saveUser(user: User): any

  getUser(): Array<User>
}
