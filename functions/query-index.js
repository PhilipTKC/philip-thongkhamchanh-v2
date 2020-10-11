require("dotenv").config();
const faunadb = require("faunadb");
const { query: q } = require("faunadb");

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  const index = body.index;

  const products = await client.query(
    q.Map(q.Paginate(q.Match(q.Index(index))), q.Lambda("X", q.Get(q.Var("X"))))
  );

  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};
