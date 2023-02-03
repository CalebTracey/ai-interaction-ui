import axios, { AxiosError, AxiosResponse, isAxiosError } from 'axios'

// const imageRequest = (): Promise<AxiosResponse<any>> => {
//   return axios.post()
// }
const URL = 'http://localhost:8080/v1/image'
const TEST_URL = 'http://localhost:8080/v1/test'

interface Props {
  request: RequestI
}

const Post = async (props: Props): Promise<ResponseI | undefined> => {
  const { request } = props

  return axios
    .post(URL, request)
    .then((res: AxiosResponse<ResponseI>) => {
      return res.data
    })
    .catch((err: AxiosError) => {
      if (isAxiosError(err)) {
        console.error(err)
      }

      return undefined
    })
}

const Service = { Post }

export default Service
