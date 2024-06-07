import { createSlice } from '@reduxjs/toolkit'
import eletronicosThumb from 'assets/categorias/thumbnail/eletronicos.png'
import eletronicosHeader from 'assets/categorias/header/eletronicos.png'

import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png'
import automotivoHeader from 'assets/categorias/header/automotivo.png'

import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png'
import escritorioHeader from 'assets/categorias/header/escritorio.png'

import jogosThumb from 'assets/categorias/thumbnail/jogos.png'
import jogosHeader from 'assets/categorias/header/jogos.png'

import somThumb from 'assets/categorias/thumbnail/som.png'
import somHeader from 'assets/categorias/header/som.png'


const initialState =  [{
    nome: 'Eletrônicos',
    thumbnail: eletronicosThumb,
    header: eletronicosHeader,
    id: 'eletronicos',
    descricao: "os melhores e amis atuais dispositivos estão aqui "
  },{
    nome: 'Automotivos',
    thumbnail: automotivoThumb,
    header: automotivoHeader,
    id: 'automotivos',
    descricao: "os melhores e mais atuais dispositivos"
  },{
    nome: 'Jogos',
    thumbnail: jogosThumb,
    header: jogosHeader,
    id: 'jogos',
    descricao: "os melhores e amis atuais dispositivos"
  },
  {
    nome: 'Escritorio',
    thumbnail: escritorioThumb,
    header: escritorioHeader,
    id: 'escritorio',
    descricao: "os melhores e amis atuais dispositivos"
  },
  {
    nome: 'Som e imagem',
    thumbnail: somThumb,
    header: somHeader,
    id: 'som',
    descricao: "os melhores e amis atuais dispositivos"
  
  }]

  const categoriasSlice = createSlice({
    name: 'categorias',
    initialState,
  })

export default categoriasSlice.reducer