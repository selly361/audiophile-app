import { createSlice } from "@reduxjs/toolkit";
import products from '../data/data.json'

type cardProductType = {
    id: number,
    quantity: number,
    price: number,
    slug: string,
}

let cart: cardProductType[] = JSON.parse(localStorage.getItem("cart") || "[]")

let calcTotal = (arr: cardProductType) => arr.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  )
  
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart,
        total: calcTotal(cart)
    },

    reducers: {
        addToCart: (state, action) => {
            const { cart } = state;
            const { id, amount = 1, price, slug } = action.payload;

            // check if the product exists in the cart
            let existsIndex = cart.findIndex(product => product.id === id)

            /* if the product exists in the cart then increment the quantity by the amount
            otherwise add it to the cart with a quantity of 1*/

            if (existsIndex !== -1) {


                if (cart[existsIndex].quantity + amount > 20) {
                    cart[existsIndex].quantity = 20;
                } else {
                    cart[existsIndex].quantity += amount

                }

            } else {
                cart.push({ price, slug, id, quantity: amount })
            }
            
            state.total = calcTotal(state.cart)
        },


        deleteFromCart: (state, action) => {
            const { id } = action.payload;
            const { cart } = state;

            // find the index of the product
            let productIndex = cart.findIndex(product => product.id === id)

            // delete the product from the cart using its index
            cart.splice(productIndex, 1)
            state.total = calcTotal(state.cart)
        },


        removeAll: (state) => {
            // Deletes everything
            state.cart = []
            state.total = 0
        },

        // increments the quantity of the product

        increment: (state, action) => {
            const { id } = action.payload;
            const { cart } = state;

            // finds the index of the product
            let productIndex = cart.findIndex(product => product.id === id)

            // checks if the quantity is less than 20 (limit)
            if (cart[productIndex].quantity < 20) {
                // hasnt reached limit then add 1
                cart[productIndex].quantity += 1
            }
            state.total = calcTotal(state.cart)
        },

        // decrements the quantity of the product

        decrement: (state, action) => {
            const { id } = action.payload;
            const { cart } = state;

            // finds the index of the product
            let productIndex = cart.findIndex(product => product.id === id)

            // checks if the current quantity is 1

            if (cart[productIndex].quantity === 1) {
                // if the quantity is 1, then delete it from the cart
                cart.splice(productIndex, 1)
            }

            else {
                // otherwise decrement the quantity
                cart[productIndex].quantity -= 1
            }
            state.total = calcTotal(state.cart)
        }
    }
})

export default cartSlice.reducer;
export const { deleteFromCart, addToCart, increment, decrement, removeAll } = cartSlice.actions
