import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import './InputField.scss';

interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  cb?: (a: boolean) => void;
  answers?: string[];
}

export const InputField: FC<InputFieldProps> = ({ cb, answers }) => {
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

  return <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />;
};
