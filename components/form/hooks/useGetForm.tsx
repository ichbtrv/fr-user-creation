import axios from 'axios'
import { useQuery } from 'react-query'

export const useGetForm = () => {
  return useQuery(
    'userCreationFormData',
    async () =>
      await axios(`https://frontend-take-home.fetchrewards.com/form`).then(
        (res) => res.data
      )
  )
}
