import React, { useEffect } from 'react';
import { Result, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import history from 'util/customHistory';
import { IAuth } from 'components/pages/IAuth';
import { getToken } from 'util/ft_api';
import { submitToken } from 'util/redux/tokenSlice';

const { Text } = Typography;

export default function Auth({ location }: IAuth): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    const result = getToken(location.search);
    result.then((token) => {
      dispatch(submitToken(token));
      console.log(token); // test token
      history.replace('/profile');
    });
  });
  return <Result icon={<LoadingOutlined />} title="Login in progress" extra={<Text>Please wait...</Text>} />;
}
