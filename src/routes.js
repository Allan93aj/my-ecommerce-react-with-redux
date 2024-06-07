import Categoria from 'components/Pages/Categoria/Categoria';
import Home from 'components/Pages/Home/Home';
import PaginaPadrao from 'components/PaginaPadrao/PaginaPadrao';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Home/>} />
            <Route path='/categoria/:nomeCategoria' element={<Categoria/>} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

