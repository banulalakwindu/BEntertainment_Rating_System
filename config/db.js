const { createPool } = require("mysql");
const pool = createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ratingdb",
  port: 3306,
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error connecting to database...");
  }
  console.log("Connected to database...");
});

const excuteQuery = (query, arrParams) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, arrParams, (err, data) => {
        if (err) {
          console.log("Error in excuting query...");
          reject(err);
        } else {
          resolve(data);
        }
      });
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { excuteQuery };
