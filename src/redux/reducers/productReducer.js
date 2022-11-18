// Reducer will always take initial state and then action
import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [{
        id: 1,
        title: "Poojitha",
        category: "Developer"
    }]
}
export const productReducer = (state = initialState, {type,payload})=>{ //initial state and action
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}