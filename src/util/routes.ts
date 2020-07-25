import { FT_UID, FT_SECRET } from './constant';

export const FRONT_URL = process.env.REACT_APP_FRONT_URL;

export const AUTH = '/auth';

export const FTAPI_URL = 'https://api.intra.42.fr';
export const OAUTH = `${FTAPI_URL}/oauth`;
export const OAUTH_AUTHORIZE = `${OAUTH}/authorize?client_id=${FT_UID}&redirect_uri=${FRONT_URL}${AUTH}&response_type=code&scope=public+projects+profile`;

export const getOauthTokenUrl = (code: string): string =>
  `${OAUTH}/token${code}&grant_type=authorization_code&client_id=${FT_UID}&client_secret=${FT_SECRET}&redirect_uri=${FRONT_URL}${AUTH}`;
