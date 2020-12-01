import { React } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Pagina from '../componente/Pagina'
import { useForm } from 'react-hook-form'
import CarroValidator from '../Validator/CarroValidator'
import { Link } from 'react-router-dom'
import ApiCarros from '../service/ApiCarros'

export default () => {

  const {register, handleSubmit, errors} = useForm()

  function enviarDados(dados){
      ApiCarros.post('carros', dados).then(results=>{
      console.log(results.data);
    })
  }

  return ( 
    <Pagina titulo="Cadastrar Veiculo"> 
    <Form>
      <Form.Group as={Row} controlId="nome">
        <Form.Label className="text-rigth" column sm={2}>Nome: </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" name="nome" ref={register(CarroValidator.nome)} isInvalid={errors.nome} />
          <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="modelo">
        <Form.Label className="text-rigth" column sm={2}>Modelo: </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" name="modelo" ref={register(CarroValidator.modelo)} isInvalid={errors.modelo} />
          <Form.Control.Feedback type="invalid">{errors.modelo?.message}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="ano">
        <Form.Label className="text-rigth" column sm={2}>Ano: </Form.Label>
        <Col sm={9}>
          <Form.Control type="date" name="ano" />
          
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="potencia_cv">
        <Form.Label className="text-rigth" column sm={2}>Potencia(Cavalos): </Form.Label>
        <Col sm={5}>
          <Form.Control type="number" name="potencia_cv"/>
          
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="marca_id">
        <Form.Label className="text-rigth" column sm={2}>Marca: </Form.Label>
        <Col sm={5}>
          <Form.Control type="text" name="marca_id" ref={register(CarroValidator.marca)} isInvalid={errors.marca} />
          <Form.Control.Feedback type="invalid">{errors.marca?.message}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="cambio_id">
        <Form.Label className="text-rigth" column sm={2}>Tipo Cambio: </Form.Label>
        <Col sm={5}>
          <Form.Control type="text" name="cambio_id" ref={register(CarroValidator.cambio)} isInvalid={errors.cambio} />
          <Form.Control.Feedback type="invalid">{errors.cambio?.message}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="combustivel_id">
        <Form.Label className="text-rigth" column sm={2}>Tipo Combustivel: </Form.Label>
        <Col sm={5}>
          <Form.Control type="text" name="combustivel_id" ref={register(CarroValidator.combustivel)} isInvalid={errors.combustivel} />
          <Form.Control.Feedback type="invalid">{errors.nome?.combustivel}</Form.Control.Feedback>
        </Col>
      </Form.Group>
      <div>
        
          <Button variant="success" onClick={handleSubmit(enviarDados)} >Salvar</Button> 
          <Link className="btn btn-warning ml-1" to="/carros">Voltar</Link>
        
      </div>
      </Form>
 </Pagina>
 
  )
}