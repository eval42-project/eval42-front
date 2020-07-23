import React from 'react';
import { Typography } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { ILogo } from './ILogo';

const { Title } = Typography;

const Logo = ({ style }: ILogo) => {
  return (
    <>
      <Title level={2} style={style}>
        <CheckCircleTwoTone twoToneColor="#52c41a" style={{ marginRight: '10px' }} />
        Eval42
      </Title>
    </>
  );
};

export default Logo;
