export interface Login {
  login: string;
  password: string;
  projectId: string;
}
export interface LoginResponse {
  token: string;
  refreshToken: string;
}
export interface DecodedToken {
  sub: string;
  iat: string;
}
