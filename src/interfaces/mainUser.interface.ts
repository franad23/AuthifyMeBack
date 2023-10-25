export interface MainUser {
  id: number,
  apikey: string,
  username: string,
  email: string,
  password: string
}

export interface MainUserLogged {
  apikey: string,
  username: string,
  email: string,
  token?: string
}