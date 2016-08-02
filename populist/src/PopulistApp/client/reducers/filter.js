import { FILTER_BY } from '../constants'

const initialState = {
  category: 1
}

export default function (state = initialState, action) {
  const {category, type} = action;
  switch (type) {
    case FILTER_BY:
      return Object.assign({}, state, {
        category: category,
      });

    default:
      return state;
  }

}