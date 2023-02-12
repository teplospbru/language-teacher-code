import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import './SelectField.scss';

interface RadioFieldProps extends HTMLAttributes<HTMLInputElement> {
  cb?: (a: boolean) => void;
  answers?: string[];
  options: string[];
}

export const SelectField: FC<RadioFieldProps> = ({ cb, answers, options }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (typeof cb !== 'undefined' && typeof answers !== 'undefined') {
      if (answers?.some((answer) => answer === value)) {
        cb(true);
      } else {
        cb(false);
      }
    }
  }, [value, cb, answers]);

  return (
    <select onChange={(e) => setValue(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
