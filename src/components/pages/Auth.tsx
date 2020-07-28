import React, { useEffect } from 'react';
import { Result, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import history from 'util/customHistory';
import { IAuth } from 'components/pages/IAuth';
import { getToken } from 'util/ft_api';

const { Text } = Typography;

export default function Auth({ location }: IAuth): React.ReactElement {
  useEffect(() => {
    const result = getToken(location.search);
    result.then((token) => {
      console.log(token);
      history.push('/profile');
    });
  });
  return <Result icon={<LoadingOutlined />} title="Login in progress" extra={<Text>Please wait...</Text>} />;
}
