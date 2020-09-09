const { pg, Pool } = require("pg");

const PG_URI ="postgres://ynsexszd:noSPD_3-duKzULOAOw0mCzEfOiuVs9dC@lallah.db.elephantsql.com:5432/ynsexszd";

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
