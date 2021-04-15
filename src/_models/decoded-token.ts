export interface DecodedToken {
  authorities: Array<string>;
  length: number;
  exp: number;
  iat: number;
  jti: string;
}
