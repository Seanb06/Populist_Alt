import { FILTER_BY } from '../constants'

export function filter(event, index, value) {

  console.log("index " + index + "value " + value);
  return {
    type: FILTER_BY,
    category: value
  }
}
