import React, { FC, HTMLAttributes } from 'react';
import { Input, isRadioBtn, isSelect, isTextInput } from '../../core/api/types';
import { useInput } from './useInput';
import { InputField } from './InputField/InputField';
import { RadioField } from './RadioField/RadioField';
import { SelectField } from './SelectField/SelectField';
import './Question.scss';

interface AdminProps extends HTMLAttributes<HTMLDivElement> {
  question: string;
  inputs: Input[];
}

export const Question: FC<AdminProps> = ({ question, inputs }) => {
  const { inputSet } = useInput(question, inputs);

  return (
    <div className="question">
      {inputSet.map((item, i) => {
        if (typeof item === 'string') {
          return item;
        } else {
          if (isTextInput(item)) {
            return <InputField key={i} />;
          }
          if (isRadioBtn(item)) {
            return <RadioField key={item.id} options={item.options} question={question} id={item.id} />;
          }
          if (isSelect(item)) {
            return <SelectField options={item.options} key={item.id} />;
          }
        }
      })}
    </div>
  );
};
