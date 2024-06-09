import { configureStore } from '@reduxjs/toolkit'
import categoriasSlice from './Reduces/categorias'
import itensSlice from './Reduces/Itens'
import carrinhoSlice from './Reduces/Carrinho'

const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
    }
})

export default store;