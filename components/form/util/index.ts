import axios from 'axios'

export const postForm = async (submittedFormData) => {
  console.log(submittedFormData)
  const data = await axios.post(
    `https://frontend-take-home.fetchrewards.com/form`,
    submittedFormData
  )

  return data.status === 200
}
