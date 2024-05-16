import React, { useState } from "react";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
// import type { GetProps } from 'antd';

const Calendar = () => {
  const dateFormat = "YYYY/MM/DD";
//   const [startDate, setStartDate] = useState(dayjs("2015/01/01", dateFormat));
//   const [endDate, setEndDate] = useState(dayjs("2015/01/01", dateFormat));
const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(null);

// type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

  const handleStartDateChange : DatePickerProps['onChange'] = (date, dateString ) => {
    if (typeof dateString === 'string') {
        console.log("xx",(dayjs(dateString, dateFormat)));
        
      setStartDate(dayjs(dateString, dateFormat));
    }
  };
  
//   const disabledDate: RangePickerProps['disabledDate'] = (current) => {
//     return current && current < dayjs().endOf('day');
//   };

  const handleEndDateChange : DatePickerProps['onChange'] = (date, dateString) => {
    if (typeof dateString === 'string') {
      setEndDate(dayjs(dateString, dateFormat));
    }
  };
  

  
  return (
    <div>
      <div>
        Start Date
        <DatePicker
          defaultValue={startDate}
          format={dateFormat}
          onChange={handleStartDateChange}
        />
      </div>
      <div>End Date
      <DatePicker
          defaultValue={endDate}
          format={dateFormat}
          onChange={handleEndDateChange}
        />
      </div>
    </div>
  );
};

export default Calendar;
