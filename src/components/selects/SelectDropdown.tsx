import React from 'react';
import { Select, MenuItem } from '@mui/material';

interface SelectOptions {
  title: string;
  options: string[];
}

const SelectDropdown: React.FC<SelectOptions> = ({ title, options }) => {
  return (
    <div>
        <p className='text-concrete'>
        {title}
        </p>
        <div>
        <Select className='w-[211px] h-[40px] rounded-[8px]' variant="outlined">
            {options.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
        </Select>
        </div>
    </div>
  );
};

export default SelectDropdown;