const { Pool } = require('pg');

const pool = new Pool; ({
    user: 'mshjiuel',
    host: 'postgres://mshjiuel:dMEQZ5pLj9PA7HYEoZHMY34s0Qtp8vHf@raja.db.elephantsql.com:5432/mshjiuel',
    database: 'mshjiuel',
    password: 'dMEQZ5pLj9PA7HYEoZHMY34s0Qtp8vHf',
    port: 5432
});

// connects to elephantsql set up;
pool.connect()
    .then((data) => console.log('connected to postgresql @ elephantsql!'))
    .catch((err) => console.log(err));

// refer to pg docs on structure: exporting query recommended
module.exports = {
    query: (text, params) => pool.query(text, params),
};
