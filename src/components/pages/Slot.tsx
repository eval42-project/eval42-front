import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { Typography, Divider, DatePicker, TimePicker, Button, message } from 'antd';
import { PlusCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

import Login from 'components/organisms/Login';
import LoginLoading from 'components/organisms/LoginLoading';
import { RootState } from 'util/redux/rootReducer';
import { Users } from 'util/redux/types';
import { createSlot } from 'util/ft_api';

const { Title, Text, Link } = Typography;
const { RangePicker } = TimePicker;

const SlotContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const disabledDate = (current: moment.Moment) => {
  return (
    current &&
    (current < moment().subtract(1, 'days').endOf('day') || moment().add(14, 'days').startOf('day') < current)
  );
};

type MomentRange = [moment.Moment | null, moment.Moment | null];

export default function Slot(): React.ReactElement {
  const nowMoment = moment();
  const user: Users = useSelector((state: RootState) => state.user);
  const [date, setDate] = useState(nowMoment);
  const [timeRange, setTimeRange] = useState(['', '']);

  const onDateChange = (changeDate: moment.Moment | null, dateString: string) => {
    setDate(changeDate!);
  };

  const onTimeRangeChange = (values: MomentRange | null, formatString: string[]) => {
    console.log(formatString);
    setTimeRange(formatString);
  };

  const disabledHours = () => (date.isSame(nowMoment, 'day') ? Array.from(Array(nowMoment.hour()).keys()) : []);

  const disabledMinutes = (hour: number) =>
    date.isSame(nowMoment, 'day') && date.hour() === hour ? Array.from(Array(nowMoment.minute()).keys()) : [];

  const onButtonClick = () => {
    message.loading('Creating slots...');
    createSlot(user, date, timeRange)
      .then(() => message.success('Creating slots complete!'));
  };

  if (user.isLoading) return <LoginLoading />;
  if (user.id === 0) return <Login />;
  return (
    <SlotContainer>
      <Title level={3}>
        {' '}
        <PlusCircleOutlined /> Create Slot
      </Title>
      <DatePicker onChange={onDateChange} disabledDate={disabledDate} defaultValue={moment()} size="large" />
      <RangePicker
        picker="time"
        format="HH:mm"
        minuteStep={15}
        size="large"
        onChange={onTimeRangeChange}
        disabledHours={disabledHours}
        disabledMinutes={disabledMinutes}
      />
      <Button type="primary" size="large" onClick={onButtonClick}>
        Create
      </Button>
      <Title level={4} style={{ marginTop: '10px' }}>
        <Link href="https://profile.intra.42.fr/slots" target="_blank">Intra Slot Page</Link>
      </Title>
      <Divider style={{ borderTopColor: '#cccccc' }} />
      <Title level={4}>
        <InfoCircleOutlined style={{ color: '#1890ff' }} /> Currently only slot creation is possible.
      </Title>
      <Text>More utils comming soon...</Text>
    </SlotContainer>
  );
}
