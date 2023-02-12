import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSubcolloctionDocuments } from '../../core/redux/actions';
import { Dispatch, RootState } from '../../core/redux/store';
import './AdminQuestionsSet.scss';
import { Question, Input } from '../../core/api/types';
import { AdminQuestion } from '../AdminQuestion/AdminQuestion';

interface AdminQuestionsSetProps {
  title: string;
}

export const AdminQuestionsSet: FC<AdminQuestionsSetProps> = ({ title }) => {
  const dispatch = useDispatch<Dispatch>();
  const { tests } = useSelector((state: RootState) => state.admin.admin.grammar);
  const test: { title: string; tests?: Question<Input>[]; isLoading: boolean } | undefined = tests.find(
    (t) => t.title === title
  );

  useEffect(() => {
    if (test?.isLoading) {
      dispatch(getSubcolloctionDocuments(title));
    }
  }, [dispatch, title, test?.isLoading]);

  return (
    <div className="admin__subcollection-question-set">
      {test && test.isLoading
        ? 'Loading...'
        : test &&
          test.tests?.map(({ question, id, inputs }) => (
            <AdminQuestion key={question} question={question} inputs={inputs} id={id.toString()} title={title} />
          ))}
    </div>
  );
};
