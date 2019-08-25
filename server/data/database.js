const pg = require('pg');

const url = 'postgres://abylrafp:B1E8jppoWdCgo1K0c6rphz6yVbIZcxoW@raja.db.elephantsql.com:5432/abylrafp'

const pool = new pg.Pool({
  connectionString: url
});

module.exports = pool;

// dummy data in the db for now --- 

// user table
// {
//   id: 1,
//   username: test ,
//   password: 123
// }

// project table
// {
//   id: 1,
//   name: scrum,
//   userId: 1,
// }

// task table
// {
//   id: 1,
//   taskName: create db ,
//   projectId: 1
// }