const pg = require('pg');

const url = 'postgres://abylrafp:B1E8jppoWdCgo1K0c6rphz6yVbIZcxoW@raja.db.elephantsql.com:5432/abylrafp'

const pool = new pg.Pool({
  connectionString: url
});

pool.connect()
    .then((data) => console.log('connected to the database...'))
    .catch((err) => console.error('error connecting to database', err))

module.exports = {
  query: (text, params) => {
    return pool.query(text, params)
  },
}

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