import { createSlice } from "@reduxjs/toolkit";
import dataCategories from '../../data/dataCategories';
import allProducts from '../../data/products';

const initialState = {
    categories: dataCategories,
    products: allProducts,
    productFilteredByCategory: [],
    categorySelected: null,
    productSelected: null,
}

export const shopSlice = createSlice({
    name:'shop',
    initialState,
    reducers:{
        setCategorySelected: () => {

        },
        setProductIdSelected: () => {

        },
    },
})

export const { setCategorySelected, setProductIdSelected} = shopSlice.actions

export default shopSlice.reducer