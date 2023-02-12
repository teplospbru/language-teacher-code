import React, { FC, useEffect, useState } from 'react';
import './AdminSubcollection.scss';
import '../../assets/svg/plus-24.svg';
import '../../assets/svg/minus-24.svg';
import { AdminQuestionsSet } from '../AdminQuestionsSet/AdminQuestionsSet';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, RootState } from '../../core/redux/store';
import { Test } from '../../core/redux/types';
import { setAdminSubcollectionOpen } from '../../core/redux/actions';

interface AdminSubcollectionProps {
  title: string;
  description: string;
  example: string;
}

export const AdminSubcollection: FC<AdminSubcollectionProps> = ({ title, description, example }) => {
  const { tests } = useSelector((state: RootState) => state.admin.admin.grammar);
  const test = tests.find((item) => item.title === title) as Test;
  const dispatch = useDispatch<Dispatch>();

  const clickHandler = () => {
    if (test.isOpen) {
      dispatch(setAdminSubcollectionOpen(title, false));
    } else {
      dispatch(setAdminSubcollectionOpen(title, true));
    }
  };

  return (
    <div className="admin__subcollection-item">
      <div className="admin__subcollection-header" onClick={clickHandler}>
        <div className="icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={test.isOpen ? '#minus-24' : '#plus-24'}></use>
          </svg>
        </div>
        <h4>{title}</h4>
      </div>
      {test.isOpen && (
        <>
          <div className="admin__subcollection-description">
            <p className="p-bold">{description}</p>
            {example && <p className="p-italic">Example: {example}</p>}
          </div>

          <AdminQuestionsSet title={title} />
        </>
      )}
    </div>
  );
};
