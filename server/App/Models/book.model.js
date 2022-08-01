

module.exports = (sequelize, DataTypes)=>{
  const Author = sequelize.define('Author', {
    authorid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
  },
  );
  return Author;
};

module.exports = (sequelize, DataTypes)=>{
  const Book = sequelize.define('Book', {
    isbn: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    pubdate: {
      type: DataTypes.DATE
    },
    pubid: {
      type: DataTypes.BOOLEAN
    },
    authorid: {
      type: DataTypes.BOOLEAN
    },
    cost: {
      type: DataTypes.BOOLEAN
    },
  });
  return Book;
};

module.exports = (sequelize,DataTypes)=>{
  const Publisher = sequelize.define('Publisher', {
    pubid: {
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
      },
    name: {
      type: DataTypes.STRING
    },
    contact: {
      type: DataTypes.STRING, 
    },
  });
  return Publisher;
};


