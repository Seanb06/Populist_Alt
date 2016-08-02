import { FILTER_BY } from '../constants'

export function filter(event, index, value) {
  return {
    type: FILTER_BY,
    category: value
  }
}
