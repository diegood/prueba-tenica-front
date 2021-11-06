export class Auth {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  constructor(authJson: Auth) {
    this.accessToken = authJson.accessToken;
    this.refreshToken = authJson.refreshToken;
    this.tokenType = authJson.tokenType;
  }
}
