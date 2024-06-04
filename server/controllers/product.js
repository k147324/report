import {
  getData,
  addData,
  deleteData,
  getDataById,
} from "../models/ProductModel.js";

export const showData = (req, res) => {
  getData((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
export const showDataById = (req, res) => {
  getDataById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const addTransaction = (req, res) => {
  const data = req.body;
  addData(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
export const deleteTransaction = (req, res) => {
  const id = req.params.id;
  deleteData(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
