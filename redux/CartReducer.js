import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { item, category } = action.payload
      const existingItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.item.id === item.id
      )

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].item.quantity++
      } else {
        state.cart.push({
          item: { ...item, quantity: 1 },
          category,
        })
      }
    },

    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.item.id === action.payload.id
      )

      if (itemPresent) {
        itemPresent.item.quantity++
      }
    },

    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.item.id === action.payload.id
      )

      if (itemPresent && itemPresent.item.quantity === 1) {
        state.cart = state.cart.filter(
          (item) => item.item.id !== action.payload.id
        )
      } else if (itemPresent) {
        itemPresent.item.quantity--
      }
    },

    cleanCart: (state) => {
      state.cart = []
    },
  },
})

// Export actions
export const { addToCart, incrementQuantity, decrementQuantity, cleanCart } =
  CartSlice.actions

// Export reducer
export default CartSlice.reducer
