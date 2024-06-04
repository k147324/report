import db from "../config/db.js";

export const getData = (result) => {
  db.query("select * from new_table", (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
export const addData = (data, result) => {
  db.query("insert into new_table set? ", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
export const getDataById = (id, result) => {
  db.query("select * from new_table where id=?", [id], (err, results) => {
    if (err) {
      console.error("Database error:", err);
    }
  });
};
export const deleteData = (id, result) => {
  db.query("delete from new_table where id=?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
