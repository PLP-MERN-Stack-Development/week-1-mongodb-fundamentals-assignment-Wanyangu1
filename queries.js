db.books.insertOne({
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Classic Literature",
  price: 10.99,
  publishedYear: 1925,
  inStock: true,
  tags: ["classic", "1920s", "american"]
});

db.books.find();

db.books.find({ author: "J.K. Rowling" });

db.books.find({ price: { $gt: 20 } });

db.books.find({ publishedYear: { $gte: 2000, $lte: 2010 } });

db.books.find({}, { title: 1, author: 1, _id: 0 });

db.books.find().sort({ price: -1 });

db.books.updateOne(
  { title: "The Great Gatsby" },
  { $set: { price: 12.99 } }
);

db.books.updateMany(
  { category: "Classic Literature" },
  { $set: { bestseller: true } }
);

db.books.deleteOne({ title: "The Great Gatsby" });

db.books.deleteMany({ publishedYear: { $lt: 1950 } });

db.books.find({
  $and: [
    { price: { $gt: 15 } },
    { inStock: true }
  ]
});

db.books.aggregate([
  {
    $group: {
      _id: "$category",
      totalBooks: { $sum: 1 }
    }
  }
]);

db.books.aggregate([
  {
    $group: {
      _id: "$author",
      averagePrice: { $avg: "$price" }
    }
  }
]);

db.books.aggregate([
  { $sort: { price: -1 } },
  { $limit: 3 },
  { $project: { title: 1, price: 1, _id: 0 } }
]);

db.books.createIndex({ author: 1 });

db.books.createIndex({ category: 1, price: -1 });
