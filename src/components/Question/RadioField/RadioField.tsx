import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import './RadioField.scss';

interface RadioFieldProps extends HTMLAttributes<HTMLInputElement> {
  cb?: (a: boolean) => void;
  answers?: string[];
  options: string[];
  id: string;
  question: string;
}

export const RadioField: FC<RadioFieldProps> = ({ cb, answers, options, id, question }) => {
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
    <div className="radio">
      {options.map((option) => (
        <div key={option}>
          <label htmlFor={question}>
            <input type="radio" name={question} value={option} />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
