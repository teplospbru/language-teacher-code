import { useState, useEffect } from 'react';
import { Input, isRadioBtn } from '../../core/api/types';

export interface InputSet {
  inputSet: (Input | string)[];
}

/** Здесь создаётся а-ля виртуальный DOM-объект */
const parseQuestion = (question: string, inputs: Input[]): (Input | string)[] => {
  const match = question.match(/([^{}])+/gi);
  const arr: (Input | string)[] = [];

  if (match !== null) {
    match.map((item) => {
      const regexp = new RegExp('{{' + item + '}}');

      if (regexp.test(question)) {
        const matchedInput = inputs.find((input) => item === input.type);
        arr.push(matchedInput as Input);
      } else {
        arr.push(item);
      }
    });
  }

  return arr;
};

/** Здесь, если тип инпута - radio, то объект инпута перемещается конец массива,
 * а его место занимает строка: '________'
 */
const formatRadioInput = (inputs: (Input | string)[]) => {
  const arr: (Input | string)[] = [...inputs];
  let hasRadio, index;

  for (let i = 0; i < inputs.length - 1; i++) {
    const input = arr[i];

    if (typeof input !== 'string' && isRadioBtn(input)) {
      hasRadio = input;
      index = i;
      break;
    }
  }

  if (hasRadio && index !== undefined) {
    arr[index] = '________';
    arr.push(hasRadio);
  }

  return arr;
};

/** Данный хук служит для создания а-ля виртуального DOM-объекта из строки question.
 * Все элементы, заключенные в фигурные скобки будут заменены соответствующими инпутами
 * (объектами), взятыми из массива inputs. Текст в фигурных скобках, это идентификатор объекта
 * инпута (соответствует полю id инпута в inputs)
 */
export const useInput = (question: string, inputs: Input[]): InputSet => {
  const [inputSet, setInputs] = useState<(Input | string)[]>([]);

  useEffect(() => {
    if (inputs.length > 0) {
      const mapFromQuestion = parseQuestion(question, inputs);

      setInputs(formatRadioInput(mapFromQuestion));
    }
  }, [inputs, question]);

  return { inputSet };
};
