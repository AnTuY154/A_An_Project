import * as yup from 'yup';

export const formValidationSchema = yup.object().shape({
  sourceProblem: yup.string().required('Vấn đề phát sinh is Required'),
  title: yup.string().required('Tiêu đề is required'),
  job: yup.string().required('Về việc is required'),
  content: yup.string().required('Nội dung is required'),
});
