db.createCollection("resumoProdutos");

db.resumoProdutos.insertOne(
  { franquia: "McDonalds", totalProdutos: 5 },
);

db.resumoProdutos.find(
  { franquia: "McDonalds" },
  { _id: 0, franquia: 1, totalProdutos: 1 },
);