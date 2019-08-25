const pg = require('pg');

const url = 'postgres://abylrafp:B1E8jppoWdCgo1K0c6rphz6yVbIZcxoW@raja.db.elephantsql.com:5432/abylrafp'

const pool = new pg.Pool({
  connectionString: url
});

module.exports = pool;