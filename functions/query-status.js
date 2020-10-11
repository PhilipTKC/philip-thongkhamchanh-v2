require("dotenv").config();
const faunadb = require("faunadb");
const { query: q } = require("faunadb");

const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

exports.handler = async (event, context) => {
  const status = await client.query(
    q.Get(q.Ref(q.Collection("status"), "270283945570992653"))
  );

  return {
    statusCode: 200,
    body: JSON.stringify(status),
  };
};
