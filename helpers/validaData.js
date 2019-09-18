

class Valida {


  // valida se todos os campos estão preenchidos caso não esteja 
  // retorna todos que estão sem preenchimentos 
  async validaData(params) {

    const result = Object.values(params);
    const response = [];
    result.forEach((item) => {
      if (!item) {
        response.push(item);
      };
    });

    return response;
  }
}


module.exports = Valida;