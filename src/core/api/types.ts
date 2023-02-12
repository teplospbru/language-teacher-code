export interface Subcollection {
  id: string;
  title: string;
  description?: string;
  example?: string;
}

export interface TextInput {
  id: string;
  type: 'input';
  correctAnswers: string[];
  answer: string | null;
}

export interface Select {
  id: string;
  type: 'select';
  options: string[];
  correctAnswers: string[];
  answer: string | null;
}

export interface RadioBtn {
  id: string;
  type: 'radio';
  options: string[];
  correctAnswers: string[];
  answer: string | null;
}

export type Input = TextInput | Select | RadioBtn;

export interface Question<T> {
  question: string;
  id: number;
  inputs: T[];
}

export interface Test<T> {
  id?: string;
  title: string;
  description?: string;
  example?: string;
  questions: Question<T>[];
}

export const isTextInput = (input: Input): input is TextInput => {
  return (<TextInput>input).type === 'input';
};

export const isSelect = (input: Input): input is Select => {
  return (<Select>input).type === 'select' && (<Select>input).options !== undefined;
};

export const isRadioBtn = (input: Input): input is RadioBtn => {
  return (<RadioBtn>input).type === 'radio' && (<RadioBtn>input).options !== undefined;
};
