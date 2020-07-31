import React from 'react';
import { Result, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import { OAUTH_AUTHORIZE } from 'util/routes';

export default function Login(): React.ReactElement {
  return (
    <Result
      status="warning"
      title="You need to login first before access this page"
      extra={
        <a href={OAUTH_AUTHORIZE}>
          <Button type="primary" shape="round" size="large" icon={<LoginOutlined />}>
            Login with 42
          </Button>
        </a>
      }
    />
  );
}
