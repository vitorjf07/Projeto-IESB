'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Carros = use('App/Models/Carross')
/**
 * Resourceful controller for interacting with carrosses
 */
class CarrossController {
  /**
   * Show a list of all carrosses.
   * GET carrosses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    //const carros = await Carros.all();
    //return carros
    return await Carros.all()
  }

  /**
   * Render a form to be used for creating a new carross.
   * GET carrosses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new carross.
   * POST carrosses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'modelo',
      'ano',
      'img',
      'potencia_cv',
      'marca_id',
      'cambio_id',
      'combustivel_id'
    ])
    const carro = await Carros.create(data);
    return carro
  }

  /**
   * Display a single carross.
   * GET carrosses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const carro = await Carros.findOrFail(params.id);
    return carro 
  }

  /**
   * Render a form to update an existing carross.
   * GET carrosses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update carross details.
   * PUT or PATCH carrosses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const carro = await Carros.findOrFail(params.id);
    const data = request.only([
      'nome',
      'modelo',
      'ano',
      'img',
      'potencia_cv',
      'marca_id',
      'cambio_id',
      'combustivel_id'
    ])
    carro.merge(data) 
    await carro.save()
    return carro
  }

  /**
   * Delete a carross with id.
   * DELETE carrosses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const carro = await Carros.findOrFail(params.id)
    return await carro.delete()
  }
}

module.exports = CarrossController
