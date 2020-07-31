import axios from 'axios';

import { BACK_TOKEN, FTAPI_ME } from 'util/routes';
import { Users } from 'util/redux/types';

export const getToken = async (search: string): Promise<string> => {
  const respond = await axios({
    url: `${BACK_TOKEN}${search}`,
    method: 'get',
  });
  return respond.data;
};

export const getUser = async (token: string): Promise<Users> => {
  const respond = await axios({
    url: FTAPI_ME,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const respondObject = respond.data;
  const isCadet = respondObject.cursus_users.length !== 1;
  return {
    token,
    id: parseInt(respondObject.id, 10),
    login: respondObject.login,
    displayname: respondObject.displayname,
    imageUrl: respondObject.image_url,
    isCadet,
    isLoading: false,
  };
};
