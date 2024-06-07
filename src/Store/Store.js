import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './Reduces/categorias'
import itensSlice from './Reduces/Itens'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice
    }
})

export default store;