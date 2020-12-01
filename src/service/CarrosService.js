import ApiCarros from "./ApiCarros"
import { unMask } from 'remask';

class CarrosService {
  getAll() {
    return ApiCarros.get('carros')
  }

  get(id) {
    return ApiCarros.get(`carros/${id}`)
  }

  create(data) {

    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return ApiCarros.post('carros', data)

  } 

  update(id, data) {
    data = {...data, cpf: unMask(data.cpf), cep: unMask(data.cep)}

    return ApiCarros.put(`carros/${id}`, data)
  }

  delete(id) {
    return ApiCarros.delete(`carros/${id}`)
  }
}

export default new CarrosService()