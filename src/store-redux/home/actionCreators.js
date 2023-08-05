import * as actionType from './constants'

export const changeBannersAction = (banners) => ({
  type: actionType.CHANGE_BANNERS,
  banners
})

export const changeRecommendsAction = (recommends) => ({
  type: actionType.CHANGE_RECOMMENDS,
  recommends
})

export const queryChangeBannersAction = () => {
  return (dispatch, getState) => {
    const banners = [
      {
        id: 0,
        name: '红楼梦',
      },
      {
        id: 1,
        name: '三国演义',
      },
      {
        id: 2,
        name: '水浒传',
      }
    ]
    dispatch(changeBannersAction(banners))
  }
}