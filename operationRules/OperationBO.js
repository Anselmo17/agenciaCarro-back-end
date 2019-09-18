const logger = require('../helpers/logger');

// teste models sequelize
const { Carro, MarcaCarro } = require('../models');

// generator id
const faker = require('faker');


class OperationBO {


  //adicionar dados ao banco
  async adicionar(data, callback) {
    logger.debug('OperationBO.adicionar')

    const format = new Date();

    const dataCarro = {
      idCarro: faker.random.number(),
      idMarca: data.marcaCarro,
      marcaDescricao: data.modeloCarro,
      placa: data.placa,
      anoCarro: data.anoCarro,
      created: format.toJSON().slice(0, 10) + ' ' + format.toTimeString().slice(0, 8)
    }

    // adiciona os dados no banco 
    const response = await Carro.create({
      ...dataCarro,
    });

    return callback({
      Message: 'Created Success',
      data: response
    });
  }

  // busca os dados no banco 
  async consult(callback) {
    logger.log('OperationBO.consult');

    // faz a busca na tabela e pega o dominio da marca do carro
    const res = await Carro.findAll(
      {
        raw: true,
        attributes: [
          'anoCarro', 'created', 'idCarro',
          'idMarca', 'marcaDescricao', 'placa'
        ],
        include: [{
          model: MarcaCarro,
          attributes: ['marca'],
          as: 'index'
        }]
      }
    );
    //retorno dos dados 
    return callback(res);
  }

  // busca por id 
  async consultId(id) {
    logger.log('OperationBO.consultId');
    const response = await Carro.findOne({
      where: {
        idCarro: id
      }
    });
    return !response ? { Message: 'Nenhum dado encontrado' } : response;
  }

  //update
  async update(id, body, callback) {
    logger.debug('OperationBO.update');

    const sql = `UPDATE agencia.agencia
  SET carro='${body.carro}', modelo='${body.modelo}', ano_carro=${body.ano_carro} WHERE id=${id};`

    connection.query(sql, function (error, results, fields) {

      if (error) {
        return console.log(error)
      } else {
        callback({ results: 'Dados atualizados com sucesso!!!' })
        //nao fechar conn.end();
      }


    })

  }

  //deletar por id 
  async delete(id, callback) {
    logger.debug('OperationBO.delete');
    const result = await Carro.destroy({
      where: {
        idCarro: id
      }
    });
    return callback(result);
  }

}

module.exports = OperationBO;