import axios from 'axios';
import { BACK_TOKEN } from './routes';

export const getToken = async (search: string): Promise<string> => {
  const respond = await axios({
    url: `${BACK_TOKEN}${search}`,
    method: 'get',
  });
  return respond.data;
};

export const getUser = () => {};
