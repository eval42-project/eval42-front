import React from 'react';
import { Result, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Text } = Typography;

export default function LoginLoading(): React.ReactElement {
  return <Result icon={<LoadingOutlined />} title="Login in progress" extra={<Text>Please wait...</Text>} />;
}
