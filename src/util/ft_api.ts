import axios from 'axios';
import moment from 'moment';

import { BACK_TOKEN, FTAPI_ME, FTAPI_SLOT } from 'util/routes';
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

export const createSlot = async (user: Users, date: moment.Moment, timeRange: string[]) => {
  const dateFormatted = date.format('YYYY-MM-DD');
  const respond = await axios({
    url: FTAPI_SLOT,
    method: 'post',
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    data: {
      slot: {
        user_id: user.id,
        begin_at: `${dateFormatted}T${timeRange[0]}+09:00`,
        end_at: `${dateFormatted}T${timeRange[1]}+09:00`,
      },
    },
  });
  console.log(respond);
};
