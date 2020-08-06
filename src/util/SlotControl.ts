import moment from 'moment';

export type MomentRange = [moment.Moment | null, moment.Moment | null];

export const getLimitMoment = (): moment.Moment => {
  return moment().add(30, 'minute');
};

export const disabledDate = (current: moment.Moment): boolean => {
  const nowMoment = moment();
  return (
    current &&
    (current < nowMoment.subtract(1, 'days').endOf('day') || nowMoment.add(14, 'days').startOf('day') < current)
  );
};

export const disabledHours = (selectDate: moment.Moment): number[] => {
  const limitMoment = getLimitMoment();
  if (selectDate.isSame(limitMoment, 'day')) return Array.from(Array(limitMoment.hour()).keys());
  return [];
};

export const disabledMinutes = (hour: number, selectDate: moment.Moment): number[] => {
  const limitMoment = getLimitMoment();
  if (selectDate.isSame(limitMoment, 'day') && selectDate.hour() === hour)
    return Array.from(Array(limitMoment.minute()).keys());
  return [];
};

export const isTimeRangeValid = (timeRange: string[]): boolean => {
  if (timeRange[0] === '' || timeRange[1] === '') return false;
  const rangeMoment = timeRange.map((time) => moment(time, 'HHmm'));
  return rangeMoment[0].isBefore(rangeMoment[1]);
};
