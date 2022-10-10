import { createSlice } from "@reduxjs/toolkit";
import products from '../data/data.json'

type cardProductType = {
    id: number,
    quantity: number
}

let cart: cardProductType[] = []



const dataSlice = createSlice({
    name: "data",
    initialState: {
        cart,
        products
    },

    reducers: {
        addToCart: (state, action) => {
            const { cart } = state;
            const id = action.payload;

            // check if the product exists in the cart
            let existsIndex = cart.findIndex(product => product.id === id)

            /* if the product exists in the cart then increment the quantity by 1
            otherwise add it to the cart with a quantity of 1*/

            if(existsIndex !== -1){
                ++cart[existsIndex].quantity
            } else {
                cart.push({ id, quantity: 1 })
            }
        },


        deleteProductFromCart: (state, action) => {
            const id = action.payload;
            const { cart } = state;

            // find the index of the product
            let productIndex = cart.findIndex(product => product.id === id)
            
            // delete the product from the cart using its index
            cart.splice(productIndex, 1)
        }
    }
})

export default dataSlice.reducer;
export const { deleteProductFromCart, addToCart } = dataSlice.actions