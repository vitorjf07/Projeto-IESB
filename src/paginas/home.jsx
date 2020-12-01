import { useEffect } from 'react'
import { React, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pagina from '../componente/Pagina'
import Cartao from '../componente/Pagina'
import ApiCarros from '../service/ApiCarros'

///////Inserir botão de "inserir imagens'"
export default () => {

  const [carros, setCarros] = useState([])
  

  useEffect(()=>{
    ApiCarros.get('carros').then(results=>{
      setCarros(results.data)
    })
  }, [])


  return (
    <Pagina titulo="Veiculos">

      <Link className="btn btn-warning mb-3" to="/carros/create">Inserir</Link>

      <Row>
                {carros.map(item => (
                    <Col md={4}>
                        <Cartao titulo={item.nome + ' - ' + item.marca_id}>
                            <Row>
                                <Col md={6}>
                                    <strong>Ano:</strong> {item.ano}
                                </Col>
                                <Col md={4}>
                                    <Button variant="primary">Detalhes</Button>
                                </Col>
                            </Row>
                        </Cartao>
                    </Col>
                ))}
            </Row>



     </Pagina>

   
  )
}