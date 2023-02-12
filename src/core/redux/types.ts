import { Input, Question } from './../api/types';

// данные коллекции
export type TestsData = {
  title: string;
  description: string;
  example: string;
};

// Тип объекта теста
export type Test = {
  title: string;
  tests?: Question<Input>[];
  isLoading: boolean;
  isOpen: boolean;
};

// тип объекта задания ученику
export type Task = {
  tests: {
    title: string; // название коллекции
    questions?: {
      // выбранные учителем вопросы
      id: string; // id вопроса
      answers?: {
        // ответы ученика
        id: string; // id инпута
        answer: string; // ответ для этого инпута
      }[];
    }[];
  }[];
  student: string; // ФИО
  expiryDate: string; // Требуемая дата выполнения
  showLink: boolean; // Флаг отображения сгенерированной ссылки
};

export interface AdminInitalState {
  admin: {
    grammar: {
      testsData: TestsData[];
      isLoading: boolean;
      tests: Test[];
    };
    task: Task;
  };
}
