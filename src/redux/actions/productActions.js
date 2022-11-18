import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) =>{
    return {
        type: ActionTypes.SET_PRODUCTS, //type of the action to be perform
        payload: products, //data
    }
}

export const selectedProduct = (product) =>{
    return {
        type: ActionTypes.SELECTED_PRODUCT, //type of the action to be perform
        payload: product, //data
    }
}