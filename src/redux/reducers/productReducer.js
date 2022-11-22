// Reducer will always take initial state and then action
import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: []
}
export const productReducer = (state = initialState, {type,payload})=>{ //initial state and action
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload}
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
    //   case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //     return {};
      default:
        return state;
    }
  };