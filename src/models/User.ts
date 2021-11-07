export class User {
  email: string
  password?: string
  name: string
  surname: string
  id?: string
  constructor(userJson: User) {
    this.email = userJson.email
    this.password = userJson.password
    this.name = userJson.name
    this.surname = userJson.surname
    this.id = userJson.id
  }
}
