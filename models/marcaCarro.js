module.exports = (sequelize, DataTypes) => {
  const MarcaCarro = sequelize.define('MarcaCarro', {
    idMarca: {
      type: DataTypes.INTEGER,
      field: 'id_marca',
      primaryKey: true
    },
    marca: {
      type: DataTypes.STRING,
      field: 'marca'
    },
  }, {
      createdAt: false,
      updatedAt: false,
      tableName: 'domain_marca_carro',
      schema: 'agencia',
    });

  return MarcaCarro;
};