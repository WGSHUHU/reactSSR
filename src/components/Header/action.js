import { CHNAGE_LOGIN } from './constant'

const headerLoginAction = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/v1/user/WGSHUHU').then(res => {
      if (res.status === 200) {
        const isSuccess = res.data.success
        dispatch({
          type: CHNAGE_LOGIN,
          data: isSuccess
        })
      }
    })
  }
}

export { headerLoginAction }
