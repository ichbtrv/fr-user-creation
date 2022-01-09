import axios from 'axios'
import { FormValues } from 'interfaces'

export const postForm = async (submittedFormData: FormValues) => {
  const data = await axios.post(
    `https://frontend-take-home.fetchrewards.com/form`,
    submittedFormData
  )

  return data.status === 200
}
