import React from 'react';
import { Typography, Button } from 'antd';
import { CheckCircleTwoTone, LoginOutlined } from '@ant-design/icons';
import { OAUTH_AUTHORIZE } from '../../util/routes';

const { Title, Paragraph, Text } = Typography;

export default function Landing(): React.ReactElement {
  return (
    <>
      <Title>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '20px' }} />
        Eval42
      </Title>
      <a href={OAUTH_AUTHORIZE}>
        <Button type="primary" shape="round" icon={<LoginOutlined />} size="large">
          Login with 42
        </Button>
      </a>
    </>
  );
}
