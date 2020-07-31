import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Result } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

export default function Forum(): React.ReactElement {
  const history = useHistory();
  return (
    <Result
      icon={<CommentOutlined />}
      title="Comming Soon"
      extra={
        <Button type="primary" shape="round" size="large" onClick={() => history.push('/')}>
          Back to Home
        </Button>
      }
    />
  );
}
