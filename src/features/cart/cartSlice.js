import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: 'userLogged',
    updatedAt: Date.now().toLocaleString(),
    total: 0,
    items: [],
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
            const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);

            if (indexToRemove !== -1) {
                console.log('Item found and removed:', action.payload.id);
                state.items.splice(indexToRemove, 1);

                // After removing the item, you can log the updated items for debugging
                console.log('Updated items:', state.items);

                state.items = state.items.filter(item => item.id !== action.payload.id);

                // Log the items after using filter
                console.log('Updated items after filter:', state.items);

                state.total = state.items.reduce(
                    (acc, currentItem) => acc += currentItem.price * currentItem.quantity,
                    0
                );
                state.updatedAt = new Date().toLocaleString();
            }
        },
    },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
