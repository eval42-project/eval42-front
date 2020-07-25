import axios from 'axios';
import { FT_UID, FT_SECRET } from './constant';
import { FRONT_URL, getOauthTokenUrl } from './routes';

export const getToken = async (code: string): Promise<string> => {
  const respond = await axios.post(getOauthTokenUrl(code));
  return respond.data.access_token;
};

export const getUser = () => {};
