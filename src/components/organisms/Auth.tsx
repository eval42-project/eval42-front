import React, { useEffect } from 'react';
import { Result, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { IAuth } from 'components/organisms/IAuth';
import { getToken } from 'util/ft_api';
import { setUserToken } from 'util/redux/userSlice';
import { useHistory } from 'react-router-dom';

const { Text } = Typography;

export default function Auth({ location }: IAuth): React.ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const result = getToken(location.search);
    result.then((token) => {
      dispatch(setUserToken(token));
      history.push({
        pathname: '/profile',
        search: '',
      });
    });
  });
  return <Result icon={<LoadingOutlined />} title="Login in progress" extra={<Text>Please wait...</Text>} />;
}
