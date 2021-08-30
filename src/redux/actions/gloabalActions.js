import { types } from "src/types";

export const addProduct = (payload) => {
    return {
        type: types.addProduct,
        payload
    }
}

export const editProduct = (payload) => {
    return {
        type: types.editProduct,
        payload
    }
}

export const deleteProduct = (payload) => {
    return {
        type: types.deleteProduct,
        payload
    }
}