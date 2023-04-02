import * as Yup from 'yup'

export const signupSchema = Yup.object({
  PinName: Yup.string().required('* Name Required'),
  NumVersionID: Yup.string().required('* Version ID Required'),
  NumPrice: Yup.string().required('* Price Required'),
  NumHasBrokenConnection: Yup.boolean().notRequired(),
  NumHasScratches: Yup.boolean().notRequired(),
  NumExtraInfo: Yup.string().notRequired(),
})
