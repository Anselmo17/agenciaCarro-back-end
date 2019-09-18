const OperationBO = require('../operationRules/OperationBO');
const ExportsBO = require('../operationRules/exportsBO');
const Helpers = require('../helpers/validaData');
const logger = require('../helpers/logger');


// estanciando os operation do BO 
const op = new OperationBO();
const exportExcel = new ExportsBO();
const helper = new Helpers();

//adiciona itens
exports.adicionar = async function (data, callback) {
  logger.debug('controller.adicionar')

  const resData = await helper.validaData(data);

  // caso tenha campo vazio retorna 
  if (resData.length) {
    callback(null)
  } else {

    // operação caso esteja tudo certo
    op.adicionar(data, function (resp) {
      callback(resp)
    })
  }
}

//consulta os dados 
exports.consult = function (data, callback) {
  logger.debug('controller.consult')
  op.consult(data, function (resp) {
    callback(resp)
  })
};

// consult by id 
exports.consultId = async (id) => {
  logger.debug('controller.consultId')
  const findId = parseInt(id);
  const response = await op.consultId(findId);
  return response;
};

//update
exports.update = function (id, body, callback) {
  logger.debug('controller.update')
  op.update(id, body, function (resp) {
    callback(resp)
  })
}

//delete
exports.delete = function (id, callback) {
  logger.debug('controller.delete')
  op.delete(id, function (resp) {
    callback(resp)
  })
}


//Pega os dados a serem exportados  
exports.exports = function (callback) {
  logger.debug('controller.exports')
  exportExcel.export(callback, function (resp) {
    callback(resp)
  })
};




