import * as Yup from 'yup';

export const WORKING_RULES_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{3,64}$/, 'Enter a valid task')
  .required();
