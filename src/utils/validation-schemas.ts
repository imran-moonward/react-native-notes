import * as Yup from 'yup';
export const noteValidationSchema = Yup.object().shape({
  note: Yup.string().required('Note cannot be empty.'),
});
