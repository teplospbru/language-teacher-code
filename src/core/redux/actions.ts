import { Dispatch } from './store';
import {
  fetchSubcollections,
  fetchSubcollectionDocuments,
  setQuestion,
  unsetQuestion,
  setSubcollectionOpen,
  setFullNameAndExpiryDate,
} from './adminSlice';

export const getSubcolloctionsData = () => (dispatch: Dispatch) => {
  return dispatch(fetchSubcollections());
};

export const getSubcolloctionDocuments = (title: string) => (dispatch: Dispatch) => {
  return dispatch(fetchSubcollectionDocuments(title));
};

export const setAdminQuestion = (title: string, id: string) => (dispatch: Dispatch) => {
  return dispatch(setQuestion({ title, id }));
};

export const unsetAdminQuestion = (title: string, id: string) => (dispatch: Dispatch) => {
  return dispatch(unsetQuestion({ title, id }));
};

export const setAdminSubcollectionOpen = (title: string, isOpen: boolean) => (dispatch: Dispatch) => {
  return dispatch(setSubcollectionOpen({ title, isOpen }));
};

export const setAdminFullNameAndExpiryDate = (student: string, expiryDate: string) => (dispatch: Dispatch) => {
  return dispatch(setFullNameAndExpiryDate({ student, expiryDate }));
};
