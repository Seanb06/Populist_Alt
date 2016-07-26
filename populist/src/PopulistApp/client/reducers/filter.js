import { FILTER_BY } from '../constants'

const initialState = {
  category: 1
}

export default function (state = initialState, action) {
  if(action.type === FILTER_BY) {
    return { category: state.category }
  }
  return state
}