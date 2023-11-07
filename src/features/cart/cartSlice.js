import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    updatedAt: Date.now().toLocaleString(),
    total: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const products = state.items
            const productRepeated = products.find(
                item => item.id === action.payload.id
            )
            if (!productRepeated)
                return {
                    ...state,
                    items: [...state.items, action.payload],
                    total: state.total + action.payload.price,
                    updatedAt: new Date().toLocaleString(),
                }
            const itemsUpdated = products.map(item => {
                if (item.id === action.payload.id) {
                    return Object.assign({}, item, {
                        quantity: item.quantity + action.payload.quantity,
                    })
                }
                return item
            })
            return {
                ...state,
                items: itemsUpdated,
                total: state.total + action.payload.price,
                updatedAt: new Date().toDateString(),
            }
        },
        removeItem: (state, action) => {
            const productIdToRemove = action.payload.id;
            const productToRemove = state.items.find(item => item.id === productIdToRemove)
            
            if (!productToRemove) {
                return state;             
            }
            const totalCostToRemove = productToRemove.price * productToRemove.quantity;
            const updatedItems = state.items.filter(item => item.id !== productIdToRemove)
            return {
                ...state,
                items: updatedItems,
                total: state.total - totalCostToRemove,
                updatedAt: new Date().toLocaleString(),
            }
        },
        clearCart: (state) => {
            return {
                ...state,
                items: [],
                total: 0,
                updatedAt: Date.now().toLocaleString(),
            };
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
