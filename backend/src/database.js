const pg = require('pg');
// Connect to PostgreSQL database
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'church',
    password: 'MOZNE2R4KI',
    port: 5432,
  });

module.exports =pool