import React, { useState } from 'react';
import { DateRange } from '../types';

interface DateRangeFilterProps {
  setDateRange: (dateRange: DateRange) => void;
  filterTransactions: (dateRange: DateRange) => void;
}

const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ setDateRange, filterTransactions }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleFilter = () => {
    const dateRange: DateRange = { startDate, endDate };
    setDateRange(dateRange);
    filterTransactions(dateRange);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default DateRangeFilter;
