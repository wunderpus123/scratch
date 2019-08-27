const pg = require('pg');

// connection to elephant sql database (cloud - free 20mb)
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

// dummy data format in the cloud db --- 

// userinfo table
// {
//   id: 1,
//   username: test ,
//   password: 123
// }

// project table
// {
//   id: 1,
//   name: scrum,
//   userid: 1,
// }

// task table
// {
//   id: 1,
//   title: "create db" ,
//   status: "todo",
//   owner: "paul",
//   projectid: 1
// }