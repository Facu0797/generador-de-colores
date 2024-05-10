import { useState } from 'react'
import './App.css'
import Values from 'values.js'
import Formulario from './Componentes/Formulario';
import MostrarColores from './Componentes/MostrarColores';

function App() {

  const [listaColores, setListaColores] = useState(new Values("blue").all(5));

  return (
    <>
      <Formulario setListaColores={setListaColores} />
      <MostrarColores listaColores={listaColores} />
    </>

  )
}

export default App
