module.exports = (sequelize, DataTypes) => {
  const Carro = sequelize.define('Carro', {
    idCarro: {
      type: DataTypes.INTEGER,
      field: 'id_carro',
      primaryKey: true
    },
    marcaDescricao: {
      type: DataTypes.STRING,
      field: 'marca_descricao'
    },
    placa: {
      type: DataTypes.STRING,
      field: 'placa'
    },
    anoCarro: {
      type: DataTypes.INTEGER,
      field: 'ano_carro'
    },
    idMarca: {
      type: DataTypes.INTEGER,
      field: 'id_marca'
    },
    created: {
      type: DataTypes.DATE,
      field: 'created'
    },
  }, {
      createdAt: false,
      updatedAt: false,
      tableName: 'carro',
      //schema: 'agencia',
    });
  Carro.associate = (models) => {
    Carro.belongsTo(models.MarcaCarro, {
      foreignKey: 'idMarca',
      as: 'index'
    });
  };
  return Carro;
};