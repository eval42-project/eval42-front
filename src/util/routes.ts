import { FT_UID } from './constant';

export const FRONT_URL = process.env.REACT_APP_FRONT_URL;

export const AUTH = '/auth';
export const PROFILE = '/profile';
export const SLOT = '/slot';
export const FORUM = '/forum';

export const BACK_URL = process.env.REACT_APP_BACK_URL;
export const BACK_TOKEN = `${BACK_URL}/token`;

const FTAPI_URL = 'https://api.intra.42.fr';
export const OAUTH = `${FTAPI_URL}/oauth`;
export const OAUTH_AUTHORIZE = `${OAUTH}/authorize?client_id=${FT_UID}&redirect_uri=${FRONT_URL}${AUTH}&response_type=code&scope=public+projects+profile`;
const FTAPI_V2 = `${FTAPI_URL}/v2`;
export const FTAPI_ME = `${FTAPI_V2}/me`;
export const FTAPI_SLOT = `${FTAPI_V2}/slots`;
