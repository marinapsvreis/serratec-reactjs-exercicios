import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComponentePai } from '../Pages/ComponentePai'
import { ControladaPai } from '../Pages/ControladaPai'
import { Home } from '../Pages/Home'
import { IndiretaPai } from '../Pages/IndiretaPai'
import { SecondPage } from '../Pages/SecondPage'
import { FazerLista } from '../Pages/FazerLista'
import { RenderizacaoCondicional } from '../Pages/RenderizacaoCondicional'
import { Contador } from '../Pages/Contador'

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemsomos" element={<SecondPage />} />
        <Route path="/comunicacaodireta" element={<ComponentePai />} />
        <Route path="/comunicacaoindireta" element={<IndiretaPai />} />
        <Route path="/comunicacaocontrolada" element={<ControladaPai />} />
        <Route path="/lista" element={<FazerLista />} />
        <Route path="/rendercondicional" element={<RenderizacaoCondicional />} />
        <Route path="/contador" element={<Contador />} />
      </Routes>
    </BrowserRouter>
  )
}
