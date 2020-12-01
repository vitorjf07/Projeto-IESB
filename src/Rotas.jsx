import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import home from './paginas/home';
import Cabecalho from './componente/Cabacalho';
import CadastrarCarro from './paginas/CadastrarCarro';


export default () => {
  return (
    <>
      <BrowserRouter>
          <Cabecalho />
          <Route exact path="/carros" component={home} />
          <Route exact path="/carros/create" component={CadastrarCarro} /> 
      </BrowserRouter>
    </>
  )
} 