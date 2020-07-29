import axios from 'axios';
import { BACK_TOKEN, FTAPI_ME } from 'util/routes';
import { Users } from './redux/types';

export const getToken = async (search: string): Promise<string> => {
  const respond = await axios({
    url: `${BACK_TOKEN}${search}`,
    method: 'get',
  });
  return respond.data;
};

// TODO: fetch user data by token
export const getUser = async (token: string): Promise<Users> => {
  const respond = await axios({
    url: FTAPI_ME,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const respondObject = respond.data;
  const isCadet = respondObject.cursus_users.length;
  return {
    token,
    id: parseInt(respondObject.id),
    login: respondObject.login,
    displayname: respondObject.displayname,
    image_url: respondObject.image_url,
    isCadet,
  };
};
