import React from 'react';
import { Typography, Divider } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Landing = () => {
  return (
    <>
      <Title>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '20px' }} />
        Eval42
      </Title>
    </>
  );
};

export default Landing;
