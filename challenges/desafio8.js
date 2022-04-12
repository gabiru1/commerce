db.produtos.deleteMany(
  { curtdas: { $lt: 50 } },
  { _id: 0, nome: 1, vendidos: 1 },
);

db.produtos.find({}, { nome: 1, _id: 0 });