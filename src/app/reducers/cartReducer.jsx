import { combineReducers, createReducer } from "@reduxjs/toolkit";
import * as Actions from "../../actions/types";

const initialState = [];

const cartDataReducer = createReducer(initialState, (builder) => {
    builder.addCase(Actions.ADD_ITEM, (state, action) => {

        const { id } = action.payload
        const existingProduct = state.find(item => item.id === id);


        if (existingProduct) {
            const quantity = existingProduct.quantity + 1
            const temp = state.filter((item) => item.id !== action.payload.id);
            return [...temp, { ...existingProduct, quantity }];
        }
        else return [...state, { ...action.payload, quantity: 1 }];

    }).addCase(Actions.DELETE_ITEM, (state, action) => {
        const temp = state.filter((item) => item.id !== action.payload.id);
        return temp
    })

});

const cartReducer = combineReducers({
    cartData: cartDataReducer,
});

export default cartReducer
