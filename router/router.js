let app = require('../config/appConfig');
let controller = require('../controllers/controller');
const http = require('../helpers/enum/statusHttp');

//metodo de cadatrar os carros 
app.post('/carros/cadastrar', (req, res) => {

  // dados da requisição
  const { modeloCarro, anoCarro, marcaCarro, placa } = req.body;

  let data = {
    modeloCarro,
    placa,
    anoCarro,
    marcaCarro
  };

  data.modeloCarro = modeloCarro.toUpperCase();
  data.placa = placa.toUpperCase();

  //salvando os valores no banco 
  controller.adicionar(data, (resp) => {
    if (!resp) {
      res.status(http.ERROR).json({ message: "Nao foi possivel criar" });
    }
    res.status(http.CREATED).json(resp);
  });
});


//pegando a lista de carros 
app.get('/carros', (req, res) => {

  controller.consult((resp) => {
    res.status(http.OK).json(resp);
  });
});

// busca por id 
app.get('/carros/:id', (req, res) => {

  const id = req.params.id;

  controller.consultId(id).then((resp) => {
    res.status(http.OK).json(resp)
  });
});

// atualizar por id 
app.put('/carros/update/:id', (req, res) => {

  const id = req.params.id;
  const body = req.body;

  controller.update(id, body, (resp) => {
    res.status(http.CREATED).json(resp);
  })
});


//deletar por id 
app.delete('/carros/delete/:id', (req, res) => {

  const id = req.params.id;

  controller.delete(id, (resp) => {
    if (!resp) {
      res.status(http.ERROR).json({ message: "Nao foi possivel deletar" });
    }
    res.status(http.NO_CONTENT).end();
  });
});


//exportar excel 
app.get('/exports', (req, res) => {
  controller.exports((resp) => {

    // cria o arquivo excel
    res.attachment('report.xlsx');

    // envia os dados para se salvo o excel
    return res.status(http.OK).send(resp)
  });
});